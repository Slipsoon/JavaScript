function bigestSumOfTwoElements(array) {
    let number1 = 0;
    let number2 = 0;

    if (array.length > 1) {
        for (let i = 0; i < array.length; i++)
            number1 = (number1 < array[i]) ? array[i] : number1;
        
        for (let i = 0; i < array.length; i++)
            number2 = (number2 < array[i] && array[i] != number1) ? array[i] : number2;

        return number1 + number2;
    } else if (array.length == 1) {
        return array[0];
    } else {
        return false;
    }
}

console.log(bigestSumOfTwoElements([1,2,3,4]));
console.log(bigestSumOfTwoElements([]));
console.log(bigestSumOfTwoElements([76]));
console.log(bigestSumOfTwoElements([23,45,17,12]));