'use strict';

module.exports = {
    hapiStub: {
        Server: function Server(opts) {
            this.start = (cb) => {
                cb(new Error('uh-oh'));
            };
            this.connection = (cfg) => { };
            this.route = () => {};
            this.register = () => {};
            this.log = () => {};
        }
    }
};