const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const rename = promisify(fs.rename);

module.exports = async function(argument){
    try{
        const {dirpath,filename,extension,isDir} = argument;
        if(isDir)
            return argument;
        const oldFileName = filename;
        const newFileName = _extensionChanger(filename,extension);
        const oldpath = path.join(dirpath,oldFileName);
        const newpath = path.join(dirpath,newFileName);
        await rename(oldpath,newpath);
        return {
            dirpath,
            filename,
            extension,
            newFileName
        };
    }catch(err){
        throw err;
    }
}




const _extensionChanger = (filename,extension)=>{
    //split the filename with . character
    let splitedFilename = filename.split(".");
    //get the last member as it is the extension
    splitedFilename[splitedFilename.length-1] = extension;

    return splitedFilename.join(".");
}




