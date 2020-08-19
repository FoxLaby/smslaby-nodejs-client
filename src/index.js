const Config = require('./../src/config');
const CallServer = require('./modules/CallServer');

class SMSLaby {
    init(hash_key = false) {
        Config.hash_key = hash_key;

        return this;
    }

    lang(lang) {
        Config.message.lang = lang;

        return this;
    }

    to(number) {
        Config.message.number = number;

        return this;
    }

    message(body) {
        Config.message.body = body;

        return this;
    }

    send(callbcak)
    {
        CallServer(Config).then(response => {
            callbcak(response.data);
        });
    }
}

module.exports = SMSLaby;