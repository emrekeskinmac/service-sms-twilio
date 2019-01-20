# Twilio SMS Service

Send SMS with Twilio

# Contents

- [Installation](#Installation)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [sendSms](#sendsms)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

Download the source code of this service, and then in the service's folder, run the following command:
```bash
mesg-core service deploy
```

# Definitions


# Tasks

## sendSms

Task key: `sendSms`

Send email with Twilio

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Twilio Account SID** | `accountSid` | `String` | The Twilio Account SID that you can create here https://www.twilio.com/console |
| **Twilio Account Auth Token** | `authToken` | `String` | The Twilio Account Auth Token that you can create here https://www.twilio.com/console |
| **Body** | `body` | `String` | The body of the sms |
| **From** | `from` | `String` | The account to send the sms from |
| **To** | `to` | `String` | The recipient of the sms |

### Outputs

#### Failure

Output key: `failure`

when an error occurs when trying to send the sms (this can be any kind of error, wrong phone number, Twilio API down...)

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Message** | `message` | `String` | Error message |

#### Success

Output key: `success`

When the sms is successfully sent

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **Status** | `status` | `String` | Status returned by the Twilio API |


