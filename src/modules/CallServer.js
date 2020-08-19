const axios = require('axios');

module.exports = (Config) => {
    return axios.post(Config.endPoint, {
        lang: Config.message.lang,
        number: Config.message.number,
        body: Config.message.body,
        mode: Config.environment
    },{
        headers: {'X-hash-fox': Config.hash_key}
    });
}