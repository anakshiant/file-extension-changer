const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const stats = promisify(fs.stat);
 
// Checks every file name and return if ti is a file or directory
module.exports = async function(argument){
    const {dirpath,filename} = argument;
    const filePath = path.join(dirpath,filename);
    try{
        const stat = await stats(filePath);
        argument.isDir = stat.isFile() ? false:true;
        return argument;
    }catch(err){
        throw err;
    }
}