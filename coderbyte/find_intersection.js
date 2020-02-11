// function FindIntersection(strArr) {
//     let result = '';
//     // convert strings into arrays
//     const string1 = strArr[0].split(',');
//     const string2 = strArr[1].split(',');
//     // for each number in the first array
//     string1.forEach(number => {
//         if (isIn(number, string2)) {
//             result += number.toString();
//         }
//     })
//     // if the number is in the second array
//     // add to the result

//     // code goes here  
//     return result;

// }

// function FindIntersection(strArr) {
//     // convert the first array into a lookup table
//     const numbers = {};
//     strArr[0]
//         .split(',')
//         .forEach(numberString => {
//             const number = numberString.trim();
//             numbers[number] = number;
//         });
//     let result = [];
//     strArr[1]
//         .split(',')
//         .forEach(number => result.push(numbers[number.trim()]));
//     return result
//         .filter(item => item)
//         .join(',');
// }

// function isIn(number, array) {
//     for (let item of array) {
//         if (number === item) return true;
//     }
//     return false;
// }

function FindIntersection(strArr) {
    // convert the first array into a lookup table
    const numbers = createLookupTable(strArr[0]);

    return strArr[1]
        .split(',')
        .map(trim)
        .reduce((result, numberString) => numbers[numberString] ? `${result},${numberString}` : result);
}

function createLookupTable(arr) {
    return arr
        .split(',')
        .map(trim)
        .reduce((numberTable, numberString) => {
            numberTable[numberString] = numberString;
            return numberTable;
        }, {});
}

function trim(str) {
    return str.trim();
}

// keep this function call here 
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // '1,4,13'
console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])); // '1,9,10'