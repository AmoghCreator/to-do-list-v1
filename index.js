const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/' , (req , res) => {
    var today = new Date();
    if(today.getDay() == 3) {
        res.send("it's a Tuesday!!");
    }
    else {
        res.send("go work");
    }
})

app.listen(3000 , () => {
    console.log('server started at port 3000');
})