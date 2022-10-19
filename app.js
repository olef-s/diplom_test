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
const emitter = new EventMitter(); //object

//register a listner
//emitter.on('messageLogged',function(){console.log('listner called');})

//raise an event
//emitter.emit('messageLogged');

//events with arguments
//register a listner
emitter.on('messageLogged',(eventArg)=>{console.log('listner called', eventArg);})

//raise an event
emitter.emit('messageLogged',{id: 1, url: 'http://...'});

