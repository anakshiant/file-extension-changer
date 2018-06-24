const bunyan = require('bunyan');
const config = require('config');
const prettyStream = require('bunyan-prettystream');

const prettyStdOut = new prettyStream();
const prettyStdErr = new prettyStream();
prettyStdOut.pipe(process.stdout);
prettyStdErr.pipe(process.stderr);


const init = ()=>{
    const logger = bunyan.createLogger({
        name:config.get('name'),
        streams:[
            {
                level:'info',
                stream:prettyStdOut,
            },
            {
                level:'error',
                stream:prettyStdErr
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
