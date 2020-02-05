var arr = [5, 2, 3, 4, 1];

function minMaxSumMethod1(arr) {
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);
    minarr = []
    maxValu = [];
    equalVal = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < maxValue) {
            minarr.push(arr[i]);
        }
        if (arr[i] > minValue) {
            maxValu.push(arr[i]);
        }
    }
    if (minValue == maxValue) {
        var MinSum = min => min.reduce((a, b) => a + b, 0);
        var MaxSum = max => max.reduce((a, b) => a + b, 0);
        console.log(MinSum(arr.slice(0, 4)) + ' ' + MaxSum(arr.slice(0, 4)));
    } else {
        var MinSum = min => min.reduce((a, b) => a + b, 0);
        var MaxSum = max => max.reduce((a, b) => a + b, 0);
        console.log(MinSum(minarr) + ' ' + MaxSum(maxValu));
    }


}

function minMaxSumMethod2(arr) {
    arr.sort();
    var MinSum = min => min.reduce((a, b) => a + b, 0);
    var MaxSum = max => max.reduce((a, b) => a + b, 0);
    console.log(MinSum(arr.slice(0, 4)) + ' ' + MaxSum(arr.slice(1, 5)));
}

minMaxSumMethod1(arr);
minMaxSumMethod2(arr);
