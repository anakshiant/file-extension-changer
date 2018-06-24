const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const stats = promisify(fs.stat);

module.exports = async function(dirpath,filename){
    const filePath = path.join(dirpath,filename);
    try{
        const stat = await stats(filePath);
        const result = stat.isFile() ? true:false;
        return result;
    }catch(err){
        throw err;
    }
}