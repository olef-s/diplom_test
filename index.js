const express = require('express');
const app =express();
const port = process.env.port || 3000;//you can set the variable by using cmd: "set port=5000"
app.get('/',(req, res)=>{
res.send(`Hello World you have entered port ${port} it yet still works...`);


})
app.get('/api/courses',(req, res)=>{
    res.send('you get a list of courses');
    
    })
    //api.get with param
app.get('/api/courses/:id',(req, res)=>{
res.send(req.params.id);

})
//multiple parametres
app.get('/api/posts/:year/:month',(req, res)=>{
    //res.send(req.params);//note you can only have one res.send
    res.send(req.query);//reading a "?sortBy=name"
    
    })

//enviroment variable

app.listen(port,()=> console.log(`Hello on port ${port}`));
