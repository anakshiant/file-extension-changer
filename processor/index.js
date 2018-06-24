const {fileChecker,fileRenamer,directoryReader} = require('../services');
const {commander,logger} = require('../utils');

const processor = async ()=>{
    const {extension,path} = commander();
    const log = logger(path);
    log.info(`initating process `);
    log.info(`directory path is ${path}`);
    log.info(`changing every file to ${extension} extension`);
    
    const fileNames = await directoryReader(path);

    fileNames.reduce(async (accumlater,currentvalue)=>{
        const checkFileResult = await fileChecker(path,currentvalue);
        if(!checkFileResult)
            log.info('current file is directory');
        log.info(`changing extension of file ${currentvalue}`);        
    });

}


module.exports = processor