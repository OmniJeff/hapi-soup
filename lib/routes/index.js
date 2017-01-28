'use strict';

module.exports = {
    addRoutes: (server) => {
        require('./ping')(server);
    }
};
