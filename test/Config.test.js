const assert = require('chai').assert;
const Config = require('./../src/config');


describe('Test Config Settings for endPoint', () => {
    
    it('Test default endPoint', () => {
        assert.equal(Config.endPoint, 'https://foxlaby.com/api/smslaby/send');
    });

    it('Test endPoint after the change', () => {
        Config.endPoint = 'https://foxlaby.com/api/v1/smslaby/send';
        assert.equal(Config.endPoint, 'https://foxlaby.com/api/v1/smslaby/send');
    });
});

describe('Test Config Settings for environment', () => {
    
    it('Test default environment', () => {
        assert.equal(Config.environment, 'production');
    });

    it('Test environment after the change', () => {
        Config.environment = 'testing';
        assert.equal(Config.environment, 'testing');
    });
});