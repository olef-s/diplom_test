const express = require('express');
const app =express();
const port = process.env.port || 3000;//you can set the variable by using cmd: "set port=5000"
app.get('/',(req, res)=>{
res.send(`Hello World you have entered port ${port} it yet still works...`);


})
app.get('/api/courses',(req, res)=>{
res.send('Here you have a list of courses');

})

//enviroment variable

app.listen(port,()=> console.log(`Hello on port ${port}`));
