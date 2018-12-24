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

const getNextLevel = (parent, finalObject) => {
    tableau_1.filter(element => {
        return element.parent === parent
    }).map(element => {
        return { id: element.id, name: element.name }
    }).forEach(child => {
        finalObject[child.id] = { name: child.name }
    });

    Object.keys(finalObject).forEach(element => {
        finalObject[element]["children"] = (getChildrenObject(Number(element)));
    });
}

let parent = null;
let childrenId = getChildrenId(null);
let finalObject = {};
getNextLevel(null, finalObject);
getNextLevel(1, finalObject["1"].children);
getNextLevel(10, finalObject["10"].children);
getNextLevel(2, finalObject["1"].children["2"].children);
getNextLevel(3, finalObject["1"].children["3"].children);
getNextLevel(4, finalObject["1"].children["2"].children["4"].children);
getNextLevel(5, finalObject["1"].children["2"].children["5"].children);
getNextLevel(6, finalObject["1"].children["2"].children["4"].children["6"].children);
getNextLevel(7, finalObject["1"].children["2"].children["5"].children["7"].children);

console.log(finalObject);

