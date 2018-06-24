const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const rename = promisify(fs.rename);

module.exports = async function(filePath,oldFileName,newFileName){
    try{
        const oldpath = path.join(filePath,oldFileName);
        const newpath = path.join(filePath,newFileName);
        await rename(oldpath,newpath);
    }catch(err){
        throw err;
    }
}




