const fs = require('fs');
const {promisify} = require('util');

const readDir = promisify(fs.readdir);

// REads a given directory and return the array fo filenames
module.exports = async function(path){
    try{
        const data = await readDir(path);
        return data;
    }catch(err){
        throw err;
    }
}