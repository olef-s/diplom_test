//console.log('Hello');
//console.log('another hello');

function SayHello(message){
    console.log(message);
}

SayHello('hello from a function');
SayHello('dette er endnu en test');
SayHello('så er der endnu en ændring');
const path = require('path');
var pathobj = path.parse(__filename);
console.log(pathobj);