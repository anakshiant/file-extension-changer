const { fileChecker, fileRenamer, directoryReader, extensionChanger } = require('../services');


let argument = {
    isDir:false,
    dirpath:"",
    extension:"",
    filename:"",
};


const processor = async ({extension,path,log}) => {
    log.info(`==============================================================`);
    log.info(`initating process `);
    setImmediate(()=>{
        log.info("ending program");
        log.info("=================================================================");
    });
    if(!(extension || path)){
        log.info("Information is not complete");
        return;
    }
    log.info(`directory path is ${path}`);
    log.info(`changing every file to ${extension} extension`);

    try {
        const fileNames = await directoryReader(path);
        const promise_map = fileNames.map((element)=>{
            return _processor_helper(path,extension,element);
        });
        
        promise_map.reduce((accumlater, currentvalue) => {
            log.info("okkkk");
            let result = Promise.resolve(currentvalue);
            accumlater.push(result)
            return accumlater;   
        },[]);

    }
    catch (err) {
        log.info(`caught this error while moving ahead`);
        log.info(err);
    }    
}

const _processor_helper = async (path,extension,currentvalue)=>{
    
    const checkFileResult = await fileChecker(path,currentvalue);
    if (!checkFileResult){
        return;
    }
    const newFileName = extensionChanger(currentvalue, extension);
    await fileRenamer(path, currentvalue, newFileName);
}


module.exports = processor