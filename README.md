### Prerequisites
+ Node 

### Gettting Started
npm run start

### Join Players 
POST localhost:3000/join
Endpoint will send idUser and the generated Card

### Call Number 
GET localhost:3000/call
Endpoint will return the called number

### Check Winner 
POST localhost:3000/check
BODY:
{
 "idUser":1 
}
Endpoint will send a message telling if the player won

