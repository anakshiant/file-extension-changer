const bunyan = require('bunyan');
const config = require('config');
const prettyStream = require('bunyan-prettystream');

const prettyStdOut = new prettyStream();
prettyStdOut.pipe(process.stdout);


const init = ()=>{
    const logger = bunyan.createLogger({
        name:config.get('name'),
        streams:[
            {
                level:'info',
                path:'./logs/info.log',
            },
            {
                level:'error',
                path:'./logs/error.log'
            },
            {
                level:'debug',
                stream:prettyStdOut
            }
        ]
    })
    return logger;
}


module.exports = init;
