'use strict';

const HapiPino = require('hapi-pino');
const Config = require('../config/logger')();

module.exports = {

    register: (server) => {

        const plugin = {
            register: HapiPino.register,
            options: Config.pino
        };

        server.register(plugin, (err) => {

            if (err) {
                throw err;
            }

            server.log(['info'], 'hapi-pino logger plugin registered');
        });
    }
};
