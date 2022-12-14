//console.log('Hello');
//console.log('another hello');

function SayHello(message){
    console.log(message);
}

//SayHello('hello from a function');
//SayHello('dette er endnu en test');
//SayHello('så er der endnu en ændring');

//path module
const path = require('path');
var pathobj = path.parse(__filename);
//console.log(pathobj);

//os module
const os = require('os');
var totalmem = os.totalmem(); 
var freeMem = os.freemem();
//console.log('the amount of mem is '+totalmem+' total of free mem is '+freeMem);
//Template string - ES6 or ES2015: ECMAScript 6

//console.log(`Total memory ${totalmem}`);

//File systems
//const fs = require('fs');
//See all the files in a directory called by a synchronized call
//const files = fs.readdirSync('./');
//console.log('files from sync call '+files);

//fs.readdir('./',function(err,files){
//    if (err) {
//        console.log('result from async call '+err);
//    } else {
//        console.log('result from async call '+files);
//    }
//});

//event module - a signal that something has occured
const EventMitter = require('events');//class hence capitale letter


//register a listner
//emitter.on('messageLogged',function(){console.log('listner called');})

//raise an event
//emitter.emit('messageLogged');

//events with arguments
//register a listner
const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',(eventArg)=>{console.log('listner called', eventArg);})

//raise an event
//emitter.emit('messageLogged',{id: 1, url: 'http://...'});

//my own event handling


logger.on('Logging',(eventArg)=>{console.log('will now write this message to the log ',eventArg)});

//rasing the logging event
//emitter.emit('Logging',{message: 'dette skal gemmes i loggen'});

//Extending EventEmitter

logger.log('message');

//::::::::::::::::::::::::::::::::http module:::::::::::::::::::::::::::::::::::::::::::

const http = require('http');
const server = http.createServer((reg,res)=>{
    if(reg.url ==='/'){
        res.write('Hello World');
        res.end();
    }
    if(reg.url ==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
    }
    
});


server.listen(3000);
console.log('Listening on port 3000');





