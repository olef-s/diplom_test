const EventMitter = require('events');//class hence capitale letter
const { EventEmitter } = require('stream');


class Logger extends EventEmitter{

    log(message){
        console.log(message);
        //raise an event
        this.emit('messageLogged',{id: 1, url: 'http://...'});
    }
}

module.exports = Logger;