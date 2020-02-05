var arr = [-1,-1,0,1,1];

function plusMinus(arr){
    let postiveCount = 0; let negativeCount = 0; let zeroCount =0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] == 0){
            zeroCount++;
        } else if( arr[i] > 0){
            postiveCount++;
        } else {
            negativeCount++;
        }
    }
    console.log(postiveCount/arr.length +'\n'+ negativeCount/arr.length +'\n'+ zeroCount/arr.length);
}

plusMinus(arr);