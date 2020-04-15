const input = [12, 3, 1, 2, -6, 5, -8, 6];
const targetSum = 0;
const answer = [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]];

function hashTable(integers, target) {
    const foundIntegers = {};

    for (let index = 0; index < integers.length; index++) {
        const lookingFor = target - integers[index];
        if (foundIntegers[lookingFor]) return [lookingFor, integers[index]];

        foundIntegers[integers[index]] = true;
    }

    return [];
}

function bruteForce(integers, target) {
    const result = [];
    while (integers.length) {
        const currentInteger = integers.pop();
        const difference = target - currentInteger;
        const found = hashTable(integers, difference);
        if (found.length) {
            found.push(currentInteger);
            found.sort((a, b) => a - b);
            result.push(found);
        }
    }
    result.sort((a, b) => a.reduce((total, next) => total + next, 0) - b.reduce((total, next) => total + next, 0));
    return result;
}

console.log(bruteForce(input, targetSum));
console.log(answer);
console.log(bruteForce(input, 1000));