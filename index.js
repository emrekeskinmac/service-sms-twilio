const MESG = require('mesg-js').service()

MESG.listenTask({
  sendSms: require('./tasks/send-sms')
})