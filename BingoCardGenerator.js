const {  uniqueRandomNumbersArray } = require('./utils')

const BingoCardGenerator = ()=>{
    let card = {}
    let  bColumn = uniqueRandomNumbersArray(1,15,4)   
    let  iColumn = uniqueRandomNumbersArray(16,30,4)    
    let  nColumn = uniqueRandomNumbersArray(31,45,4)
    let  gColumn = uniqueRandomNumbersArray(46,60,4)
    let  oColumn = uniqueRandomNumbersArray(61,75,4)
    let cardColumns = [].concat.apply([], [bColumn, iColumn, nColumn, gColumn, oColumn ])
    card = cardColumns.reduce((acc,curr)=> (acc[curr]=true,acc),{});
    return card
}

module.exports = BingoCardGenerator