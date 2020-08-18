const axios = require('axios');

module.exports = (Config) => {
    return axios.post(Config.endPoint, {
        lang: 'en',
        number: '01×××××××××',
        body: 'Test node.js ask',
        mode: true
    },{
        headers: {'X-hash-fox': ''}
    }).then(response => {
        return response.data
    });
}