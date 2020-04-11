function bruteForce(integers, target) {
    for (let outerLoopIndex = 0; outerLoopIndex < integers.length - 1; outerLoopIndex++) {
        for (let innerLoopIndex = outerLoopIndex + 1; innerLoopIndex < integers.length; innerLoopIndex++) {
            steps++;
            if (integers[outerLoopIndex] + integers[innerLoopIndex] === target) {
                return [integers[outerLoopIndex], integers[innerLoopIndex]];
            }
        }
    }

    return [];
}

function sortedFirst(integers, target) {
    // sort integers
    // loop start from front
    // loop starting from back
    // if sum is less than target break
    integers.sort((a, b) => a - b);
    for (let outerLoopIndex = 0; outerLoopIndex < integers.length - 1; outerLoopIndex++) {
        for (let innerLoopIndex = integers.length - 1; innerLoopIndex > outerLoopIndex; innerLoopIndex++) {
            steps++;
            const sum = integers[outerLoopIndex] + integers[innerLoopIndex];
            if (sum == target) return [integers[outerLoopIndex], integers[innerLoopIndex]];
            else if (sum < target) break;
        }
    }
    return [];
}

function everShrinkingArray(integers, target) {
    while (integers.length) {
        steps++;
        const currentInteger = integers.pop();
        const lookingFor = target - currentInteger;
        if (integers.includes(lookingFor)) return [currentInteger, lookingFor];
    }
    return [];
}

let steps = 0;
console.log(bruteForce([3, 5, -4, 8, 11, 1, -1, 6], 10), steps);
console.log(bruteForce([3, 5, -4, 8, 11, 1, -1, 6], 100), steps);

steps = 0;
console.log(sortedFirst([3, 5, -4, 8, 11, 1, -1, 6], 10), steps);
console.log(sortedFirst([3, 5, -4, 8, 11, 1, -1, 6], 100), steps);

steps = 0;
console.log(everShrinkingArray([3, 5, -4, 8, 11, 1, -1, 6], 10), steps);
console.log(everShrinkingArray([3, 5, -4, 8, 11, 1, -1, 6], 100), steps);