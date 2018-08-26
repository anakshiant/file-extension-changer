const Processor = require('../processor');



const boot = async ({ extension, path, log }) => {
    log.info(`==============================================================`);
    log.info(`initating process `);
    setImmediate(() => {
        log.info("ending program");
        log.info("=================================================================");
    });
    if (!(extension || path)) {
        log.info("Information is not complete");
        return;
    }
    log.info(`directory path is ${path}`);
    log.info(`changing every file to ${extension} extension`);

    try {
        let result = await Processor(extension,path);
        result.forEach(argument=>{
            log.info(`${argument.filename} changed to ${argument.newFileName} to ${argument.extension}`);
        })
    }
    catch (err) {
        log.info(`caught this error while moving ahead`);
        log.info(err);
    }
}


module.exports = boot;