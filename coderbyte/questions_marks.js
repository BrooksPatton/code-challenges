function QuestionsMarks(str) {
    // strip alpha characters
    const strArray = str.split('');
    const state = {
        firstNumber: null,
        secondNumber: null,
        questionCount: 0,
        questionMarkTarget: 3
    }

    strArray.forEach(character => {
        if (!state.firstNumber) {
            const digit = Number(character);

            if (!isNaN(digit)) state.firstNumber = digit;
        } else if (state.firstNumber !== null && state.questionCount === 3) {
            const digit = Number(character);

            if (!isNaN(digit)) state.secondNumber = digit;
        } else if (state.firstNumber !== null && state.secondNumber === null) {
            if (character === '?') {
                state.questionCount++;
            }
        }
    });
    // 

    // code goes here  
    return state.firstNumber + state.secondNumber === 10;

}

console.log(QuestionsMarks("aa6?9")) // false
console.log(QuestionsMarks("acc?7??sss?3rr1??????5")) // true