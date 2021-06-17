class Player {
    constructor(card,cardSize){
        this.card = card
        this.winner = false
        this.cardSize = cardSize
    }

    isWinner(){
        return this.winner
    }

    checkCart(numberCalled){
        if(this.card[numberCalled]){
            delete this.card[numberCalled]
            this.cardSize --
            if(this.cardSize === 0) {
                console.log("win")
             this.winner = true
            }
        }
    }    
}

module.exports = Player