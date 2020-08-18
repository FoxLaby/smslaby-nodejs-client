const axios = require('axios');

module.exports = () => {
    axios.post('https://foxlaby.com/api/smslaby/send', {
        lang: 'en',
        number: '01×××××××××',
        body: 'Test node.js ask',
        mode: true
    },{
        headers: {'X-hash-fox': ''}
    })
    .then((response) => {
        console.log(response.data);
    }, (error) => {
        console.log(error);
    });
}