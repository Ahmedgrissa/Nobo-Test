let tableau_1 = [
    { id: 1, name: "Locomotive", parent: null },
    { id: 2, name: "Premier wagon", parent: 1 },
    { id: 3, name: "Deuxième wagon", parent: 1 },
    { id: 4, name: "Loup Alpha", parent: 2 },
    { id: 5, name: "Loup Omega", parent: 2 },
    { id: 6, name: "Fils loup Romeo", parent: 4 },
    { id: 7, name: "Fille louve Fedora", parent: 5 },
    { id: 8, name: "Petit- fils loup Nano", parent: 6 },
    { id: 9, name: "Petite- fille loup Gamma", parent: 7 },
    { id: 10, name: "Loup solitaire", parent: null }
];

const getChildrenId = (parentId) => {
    return tableau_1.filter(element => {
        return element.parent === parentId
    }).map(children => {
        return children.id
    });
}

const getChildrenObject = (id) => {
    const obj = {};
    tableau_1.filter(element => {
        return element.parent === id
    }).map(children => {
        return { id: children.id, name: children.name }
    }).forEach(child => {
        obj[child.id] = { name: child.name }
    });
    return obj;
}

const getNextLevel = (parent, finalArray) => {
    tableau_1.filter(element => {
        return element.parent === parent
    }).map(element => {
        return { id: element.id, name: element.name }
    }).forEach(child => {
        finalArray[child.id] = { name: child.name }
    });

    Object.keys(finalArray).forEach(element => {
        finalArray[element]["children"] = (getChildrenObject(Number(element)));
    });
}

const sortArray = (parent) => {
    children = getChildrenId(parent)
        children.forEach(child => {
            getNextLevel(parent, finalArray[parent].children);
        })
}

let parent = null;
let childrenId = getChildrenId(null);
let finalArray = {};
console.log(childrenId);
getNextLevel(null, finalArray);
sortArray(1);
sortArray(10);
sortArray(2);
sortArray(3);
sortArray(4);
sortArray(5);
sortArray(6);
sortArray(8);
sortArray(7);
sortArray(9);


// getNextLevel(1, finalArray["1"].children);
// getNextLevel(finalArray["1"].children)
// getNextLevel(10, finalArray["10"].children);
console.log('finalArray', finalArray["1"].children["2"]);
