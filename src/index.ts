// const axios = require('axios');

export const greet = (name: string) => `Hello ${name}`;

interface Log {
    type?: string
    details?: string
    action?: string
    process?: string
    date?: Date
    user_id?: string
    before?: JSON
    after?: JSON
    origen_id?: string
    username?: string
    system?: boolean
}

export const makeLog = (log: Log, config: FactoryLog) => {
    console.log('makeLog: ', log);
    console.log(config);
}

interface FactoryLog {
    endpoint: string
}

export const factoryMakeLog = (config: FactoryLog) => {
    return {
        makeLog(log: Log) {
            makeLog(log, config);
        }
    }
}