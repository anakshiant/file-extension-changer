const { fileChecker, fileRenamer, directoryReader } = require('../services');


let argument = {
    isDir:false,
    dirpath:"",
    extension:"",
    filename:"",
    newFileName:""
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
            const arg = Object.assign(argument,{dirpath:path,extension:extension,filename:element});
            return _processor_helper(argument);
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

const _processor_helper = async (argument)=>{
    return await _connect_all(argument)([fileChecker,fileRenamer]);
}

const _connect_all =  (arguemnt)=>{
    return async function(transformers){
        transformers.reduce(async (accum,curr)=>{
            const result = await curr(accum);
            return Object.assign(accum,result);
        },arguemnt);
    };
}


module.exports = processor