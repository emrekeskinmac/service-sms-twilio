module.exports = ({ body, from, to, accountSid, authToken }, { success, failure }) => {
  if (!body && !from && !to) {
    failure({ message: "at least of the 'body' and 'from' and 'to' contents must be provided" })
    return
  }

  const twilio = require('twilio')(accountSid, authToken);
  twilio.messages
    .create({
      body: body,
      from: from,
      to: to
    })
    .then((response) => success({ status: response.sid }))
    .catch(error => failure({ message: error.toString() }))
    .done();
}