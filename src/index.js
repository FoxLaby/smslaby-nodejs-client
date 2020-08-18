

class SMSLaby {
    init(hash_key) {
        this.hash_key = hash_key;

        return this;
    }

    lang(lang) {
        this.lang = lang;

        return this;
    }

    to(number) {
        this.number = number;

        return this;
    }

    message(body) {
        this.body = body;

        return this;

        
    }
}

module.exports = SMSLaby;