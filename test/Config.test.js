const assert = require('assert');
const Config = require('./../src/config');

describe('Test Config Settings', () => {
    it('Test default endPoint', () => {
        assert.equal(Config.settings.endPoint, 'https://foxlaby.com/api/smslaby/send');
    });

    it('Test default endPoint after the change', () => {
        Config.reSet({
            endPoint: 'https://foxlaby.com/api/v1/smslaby/send'
        });
        assert.equal(Config.settings.endPoint, 'https://foxlaby.com/api/v1/smslaby/send');
    });
});