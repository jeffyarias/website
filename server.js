const express = require('express');


const app = express();

app.get('/', (req, res)=> {

res.sendFile('/', 'hello world');










})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log('App is running');
})