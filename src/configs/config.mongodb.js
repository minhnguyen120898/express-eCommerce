
const devEnvironment = {
    app: {
        port: process.env.DEV_APP_PORT
    },
    databases: {
        port: process.env.DEV_DATABASE_PORT,
        host: process.env.DEV_DATABASE_HOST,
        name: process.env.DEV_DATABASE_NAME
    }
}

const prodEnvironment = {
    app: {
        port: process.env.PROD_APP_PORT
    },
    databases: {
        port: process.env.PROD_DATABASE_PORT,
        host: process.env.PROD_DATABASE_HOST,
        name: process.env.PROD_DATABASE_NAME
    }
}

const config = {devEnvironment, prodEnvironment};
const env = process.env.NODE_ENV || 'devEnvironment';

module.exports = config[env];