const directoryReader = require('./directory-reader.service');
const fileChecker = require("./file-checker.service");
const fileRenamer = require("./file-renamer.service");

let argument = {
    isDir: false,
    dirpath: "",
    extension: "",
    filename: "",
    newFileName: ""
};

module.exports = async function Processor(extension,dirpath){
    let args = Object.assign({},argument,{extension,dirpath});
   return await _connect_all(args)([directoryReader,fileChecker,fileRenamer]);
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

