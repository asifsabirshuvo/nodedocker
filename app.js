const express = require ('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('API is running');
});

app.listen('3000',()=>{
console.log('app running on 3000');
});
