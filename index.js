const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({etended:true}));

var tasks= [];

app.get('/' , (req , res) => {
    var today  = new Date();
    var options = {weekday : "long" , day : "numeric" , month : "long"};
    var day = today.toLocaleDateString("en-IN" , options);

    res.render("list" , {kindOfDay : day , newTask : tasks , taskLen : tasks.length , taskArray : tasks});
})

app.post('/submit' , (req , res) => {
    task = req.body.task;
    tasks.push(task);
    res.redirect("/")
})

app.listen(3000 , () => {
    console.log('server started at port 3000');
})