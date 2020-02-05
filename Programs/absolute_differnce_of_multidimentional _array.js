
var data = [[20,10, 4],
            [40,30,9],
            [40,30,9]]

let firstSum = 0;
 let secondSum = 0;
console.log("length", data.length);

function AbsoluteSum(){
    for(let i = 0; i<data.length; i++){
        firstSum += data[i][i];
        secondSum += data[i][data.length - i - 1];
    }
    return Math.abs(firstSum - secondSum);
}

let result = AbsoluteSum();
console.log(result);


