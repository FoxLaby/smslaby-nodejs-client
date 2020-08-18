const assert = require('chai').assert;
const Config = require('./../src/config');

describe('Test Config Settings for endPoint', () => {
    it('Test default endPoint', () => {
        assert.equal(Config.settings.endPoint, 'https://foxlaby.com/api/smslaby/send');
    });

    it('Test endPoint after the change', () => {
        Config.reSet({
            endPoint: 'https://foxlaby.com/api/v1/smslaby/send'
        });
        assert.equal(Config.settings.endPoint, 'https://foxlaby.com/api/v1/smslaby/send');
    });
});