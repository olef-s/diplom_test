const express = require('express');
const app =express();

app.get('/',(req, res)=>{
res.send('Hello World you have entered port 3000...');


})
app.get('/api/courses',(req, res)=>{
res.send('Here you have a list of courses');

})
app.listen(3000,()=> console.log('Hello on port 3000...'));
