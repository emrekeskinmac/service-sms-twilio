const MESG = new (require('@liteflow/service'))()

MESG.listenTask({
  sendSms: require('./tasks/send-sms')
})