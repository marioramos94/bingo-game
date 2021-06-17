const generateNumbersArray = (fromNumber,toNumber) => {
    let numbersList = []
    for (let i = fromNumber; i < toNumber+1; i++) {
        numbersList.push(i)
    }
    return numbersList
}

const shuffleAndCutArray = (numbersList,size) => {
    let tmp, current, top = numbersList.length;
    if (top) while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = numbersList[current];
        numbersList[current] = numbersList[top];
        numbersList[top] = tmp;
    }
    return numbersList.slice(0,size)
}

const uniqueRandomNumbersArray= (fromNumber,toNumber,size)=> {
    let numberList = generateNumbersArray(fromNumber,toNumber)
    let nummbersArray = shuffleAndCutArray(numberList,size)
    return nummbersArray
}

module.exports  = {
    uniqueRandomNumbersArray
}