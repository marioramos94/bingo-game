const express = require("express");
const app = express();
const port = 80;
const cors = require("cors");
const Bingo = require('./Bingo')
const Player = require('./Player')
const BingoCardGenerator = require('./BingoCardGenerator')
app.use(cors());
app.use(express.json())

Bingo.setNumbers(75) 
Bingo.start()
const players = []

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post("/join",(req, res)=>{
    let card = BingoCardGenerator()
    let cardSize = 20
    players.push(new Player(card,cardSize))
    let idUser = players.length-1
    res.send({ idUser, card })
})

app.get("/call", (req, res) => {
    if(players.length == 0){
        return res.status(400).send({
            message:'No players'
        })
    }
    let numberCalled = Bingo.callNumber()
    players.forEach((player) => {
        player.checkCart(numberCalled)
    })
    res.send({ numberCalled })
});

app.post("/check", (req, res) => {
    if(players.length == 0){
        return res.status(400).send({
            message:'No players'
        })
    }
    if (players.length < req.body.idUser){
        return res.status(400).send({
            message:'Player does not exists'
        })
    }    
    let winner = players[req.body.idUser].isWinner()
    let message = winner? 'Player is the winner' : 'Player is not the winner'
    res.send({message})
})

app.listen(port, () => console.log(`Server listening on port ${port}!`));