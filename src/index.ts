import axios from 'axios';

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
    system?: boolean
}

export const makeLog = (log: Log, config: FactoryLog) => {
    console.log('makeLog: ', log);
    console.log(config);
    axios({
        url: `${config.endpoint}/`,
        method: 'POST',
        responseType: 'json',
        data: log,
        headers: {
            'origin-name': config.origin
        }
    }).then(r => {
        console.log(r);
    }).catch(e => {
        console.error(e);
    });
}

interface FactoryLog {
    endpoint: string,
    origin: string
}

export const factoryMakeLog = (config: FactoryLog) => {
    return {
        makeLog(log: Log) {
            makeLog(log, config);
        }
    }
}