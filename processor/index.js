const { fileChecker, fileRenamer, directoryReader } = require('../services');


let argument = {
    isDir: false,
    dirpath: "",
    extension: "",
    filename: "",
    newFileName: ""
};


const processor = async ({ extension, path, log }) => {
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
        const fileNames = await directoryReader(path);
        let results = [];
        for (let filename of fileNames) {
            const arg = Object.assign(argument, { dirpath: path, extension: extension, filename: filename });
            const result = await _connect_all(arg)([fileChecker,fileRenamer]);
            results.push(result);
        }

    }
    catch (err) {
        log.info(`caught this error while moving ahead`);
        log.info(err);
    }
}



const _connect_all = (arguemnt) => {
    return async function (transformers) {
        return transformers.reduce(async (accum, curr) => {
            let argumentResolved = await accum;
            let result = await curr(argumentResolved);
            return result;
        }, Promise.resolve(arguemnt));
    };
}


module.exports = processor