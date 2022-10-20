const express = require('express');
const app =express();
app.use(express.json());

const port = process.env.port || 3000;//you can set the variable by using cmd: "set port=5000"
const courses = [
{id:1,name:'course 01'},
{id:2,name:'course 02'},
{id:3,name:'course 03'},
{id:4,name:'course 04'}

]
app.get('/',(req, res)=>{
res.send(`Hello World you have entered port ${port} it yet still works...`);


})
app.get('/api/courses',(req, res)=>{
    res.send(courses);
    
    })
    //api.get with param
app.get('/api/courses/:id',(req, res)=>{
    const course = courses.find(c=> c.id === parseInt(req.params.id))
    if(!course){
        res.status(404).send('the course was not found');
    }else{
        res.send(course);
    }
res.send(req.params.id);

//post method
app.post('/api/courses',(req,res)=>{
const course = {
    id:courses.length + 1,name: req.body.name
};
courses.push(course);
res.send(course);



})

})
//multiple parametres
app.get('/api/posts/:year/:month',(req, res)=>{
    //res.send(req.params);//note you can only have one res.send
    res.send(req.query);//reading a "?sortBy=name"
    
    })

//enviroment variable

app.listen(port,()=> console.log(`Hello on port ${port}`));
