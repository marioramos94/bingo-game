class Bingo {
    constructor() {       
        this.numbers = 75
        this.numbersList = []
    }

    setNumbers(numbers){
        this.numbers = numbers
    }

    generateNumbers() {
        let numbersList = []
        for (let i = 0; i <= this.numbers-1; i++) {
            numbersList[i] = i+1
        }
        this.numbersList = numbersList
    }

    shuffle(){
        let tmp, current, top = this.numbersList.length;
        if (top) while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = this.numbersList[current];
            this.numbersList[current] = this.numbersList[top];
            this.numbersList[top] = tmp;
        }
    }

    start(){
        this.generateNumbers()
        this.shuffle()
        console.log("Game Start")
    }

    callNumber() {
        if(this.numbersList.length<=1){
            let lastNumber = this.numbersList.pop()           
            this.start()
            return lastNumber
        }else{
            return this.numbersList.pop()
        }
    }
}

module.exports = new Bingo