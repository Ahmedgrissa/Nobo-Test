const n = 100;
const banana = "Banana";
const split = "Split";
let show = '';
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0)
        show = banana;
    if (i % 3 === 0)
        show += split;
    console.log(i, " ", show);
    show = '';
}