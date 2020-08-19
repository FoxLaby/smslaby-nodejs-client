# foxlaby/smslaby-nodejs-client
You can send sms through a our server using your sender id by encryption key.

## Install via npm
```bash
$ 
```

## Use
```javascript
const SMSLaby = require('smslaby').init('<hash_key>');

SMSLaby.lang('ar')
    .to('01×××××××××')
    .message('body')
    // .sandbox(true)
    .send((data) => {
        console.log(data);
    });
```

### Hash Key:-
Add a value you choose but you must add this value in a .env file
```
SMSLABY_HASH_KEY=<hash_key>
```

### Methods:-
- lang: Add lang alpha-2 (ar|en).
- to: Add the recipient number.
- sandbox: For trial only, in this case the message will not be sent to the recipient but to our dashboard.
- message: Message content.