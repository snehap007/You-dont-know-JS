function arrayExample() {
    // Program : check input is an array or not
    var inp = [1, 2, 3, 4];
    console.log(Array.isArray(inp));
    console.log(Array.isArray('hgfhsdgfh'));

    // Program : clone an array
    const cloneArray = inp.slice(0);
    console.log("cloneed array", cloneArray);

    // Program : get first element from an array, passing the parameter n will return the last n elements of the array
    const result = (array, n) => {
        if (array == null)
            return void 0;
        if (n == null)
            return array[0];
        if (n < 0)
            return [];
        return array.slice(0, n);
    }
    const sampleArray = [7, 8, 7, 0];
    const sampleArray1 = [1, 3, 5, 6, 9];
    const sampleArray2 = [3, 3, -3];
    console.log(result(sampleArray), result(sampleArray1, 3), result(sampleArray2, -3));

    // Program : join all elements of the following element into string
    const stringArray = ['Red', 'Orange', 'Green', 'Black'];
    // method 1
    let concatResult = stringArray.reduce((curr, prev) => { return (curr + ',' + prev) });
    console.log("conact Object using method 1", concatResult);
    console.log("conact Object using method 2", stringArray.toString());
    console.log("conact Object using method 3", stringArray.join());
    console.log("conact Object using method 4", stringArray.join('+'));

    //  Program : Accepts a number as a input and insert Dash(-) between each even number
    // ex. accept : 025468 output should be 0-254-6-8
    var number = 02546;
    var digits = number.toString().split('');
    var temp = '';
    for (let i = 0; i < digits.length; i++) {
        if (Number(digits[i]) % 2 == 0 && Number(digits[i + 1]) % 2 == 0) {
            temp = temp + "" + digits[i] + '-';
        } else {
            temp = temp + '' + digits[i];
        }
    }
    console.log(temp);


    // sort the items of an array with using sort function
    console.log([3, 8, 7, 6, 5, -4, 3, 2, 1].sort());

    // sort the items of an array without using sort function
    var sortArray = [3, 8, 7, 6, 5, -4, 3, 2, 1];
    let min = sortArray[0];
    let max = sortArray[0];
    let sortedArray = [];
    let pos;
    // find max element from array
    for (let i = 0; i < sortArray.length; i++) {
        if (max < sortArray[i]) max = sortArray[i];
    }

    for (let i = 0; i < sortArray.length; i++) {
        for (let j = 0; j < sortArray.length; i++) {
            if (sortArray[j] != 'X') {
                if (min > sortArray[j]) {
                    min = sortArray[j];
                    pos = j;
                }
            }
        }
        sortedArray[i] = min;
        sortArray[i] = 'x';
        min = max;
    }
    console.log("sorted Array", sortedArray);
}

function mostFrequentNumber() {
    // find the most frequent item of an array
    var frequentArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var mf = 1;
    var m = 0;
    var item;
    for (let i = 0; i < frequentArray.length; i++) {
        for (let j = 0; j < frequentArray.length; j++) {
            if (frequentArray[i] == frequentArray[j])
                m++;
            if (mf < m) {
                item = frequentArray[i];
                mf = m;
            }
        }
        m = 0;
    }
    console.log("most frequent Array", item, mf);
}

function swapTheCaseOfCahracter(input) {
    let SwapCaseString = '';
    for (let i = 0; i < input.length; i++) {
        if (input[i] == input[i].toUpperCase()) {
            SwapCaseString += input[i].toLowerCase();
        } else {
            SwapCaseString += input[i].toUpperCase();
        }
    }
    console.log(SwapCaseString);
}

function PrintElementFromTheArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("row " + i);
        for (let j = 0; j < arr[i].length; j++) {
            console.log("\n", arr[i][j]);
        }
    }
}

function SumProductOfArray(arr) {
    let sum = 0;
    let product = 1;
    arr.reduce((prev, curr) => {
        sum += curr;
        product *= curr;
    }, arr[0])
    console.log(sum, product);
}

function RemoveDuplicate(num) {
    // method one
    console.log([...new Set(num)]);
}



function findLeapYear(startYear, endYear) {
    let years = [];
    // find all years 
    for (let i = startYear; i <= endYear; i++) {
        years.push(i);
    }
    let new_years = [];
    years.forEach(ele => {
        if((ele % 4 === 0 && ele % 100 !== 0) || (ele % 100 === 0 && ele % 400 === 0)){
            new_years.push(ele);
        }
    })

    console.log(new_years);
}

// 1st
// arrayExample();

// 2nd
mostFrequentNumber();

// 3rd
swapTheCaseOfCahracter('The Quick Brown Fox');

// 4th
// PrintElementFromTheArray([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]])

// 5th 
SumProductOfArray([1, 2, 3, 4, 5, 6]);

// 6th remove duplicate items from an array 
RemoveDuplicate([1, 1, 3, 4, 2, 3, 3, 6, 6])


// 7th find leap year in given range of years
findLeapYear(2000, 2012)