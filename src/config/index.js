class Config
{
    constructor() {
        this.settings = {
            endPoint: 'https://foxlaby.com/api/smslaby/send'
        };
    }

    reSet(set_settings)
    {
        Object.assign(this.settings, set_settings);
    }
}

module.exports = new Config;