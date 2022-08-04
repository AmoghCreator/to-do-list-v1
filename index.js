const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({etended:true}));
app.use(express.static('public'));
let tasks= [];
let workTasks = [];
console.log(date())
app.get('/' , (req , res) => {
    res.render("list" , {kindOfDay : day , newTask : tasks , taskLen : tasks.length , taskArray : tasks});
})

app.post('/submit' , (req , res) => {
    console.log(req.body);
    if(req.body.button == 'work') {
        let task = req.body.task;
        workTasks.push(task)
        res.redirect("/work");
    }  
    

    if(req.body.button2 == 'work') {
        workTasks.pop();
        res.redirect("/work");
    } else {
        tasks.pop();   
    }
})

app.get('/work' , (req , res) => {
    res.render("list" , {kindOfDay : "work" , taskArray : workTasks , taskLen : workTasks.length})    
})

app.post('/work' , (req , res) => {
    task = req.body.task;
    workTasks.push(task);
    res.redirect("/work");
})

app.listen(3000 , () => {
    console.log('server started at port 3000');
})