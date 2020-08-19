class Config {
    constructor() {
        this.endPoint = 'https://foxlaby.com/api/smslaby/send';
        this.environment = 'production';

        this.hash_key = false;

        this.message = {};
    }
}

module.exports = new Config;