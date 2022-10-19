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
console.log(`Total memory ${totalmem}`);