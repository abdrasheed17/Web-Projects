const EventEmitter = require('events')
const event = new EventEmitter()

//listen first
event.on('say my name', () => {
    console.log('my name is tahir')
})

event.on('say my name', () => {
    console.log('iam iron man')
})

//emit later
event.emit('say my name')