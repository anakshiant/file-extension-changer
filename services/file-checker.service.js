const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const stats = promisify(fs.stat);

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