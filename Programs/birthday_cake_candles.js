var arr = [3, 2, 1, 3];

let maxValue = Math.max(...arr);
let count = 0
arr.forEach(element => {
    if (element == maxValue) {
        count += 1;
    }
});

console.log('\n',count);