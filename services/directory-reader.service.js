const fs = require('fs');
const {promisify} = require('util');

const readDir = promisify(fs.readdir);

module.exports = async function(path){
    try{
        const data = await readDir(path);
        return data;
    }catch(err){
        throw err;
    }
}