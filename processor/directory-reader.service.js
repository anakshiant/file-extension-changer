const fs = require('fs');
const {logger} = require("../utils");
const {promisify} = require('util');

const log = logger();

const readDir = promisify(fs.readdir);

// REads a given directory and return the array fo filenames
module.exports = async function({extension,dirpath}){
    try{
        const data = await readDir(dirpath);
        return data.map((elem)=>{
            return {
                isDir: false,
                dirpath: dirpath,
                extension: extension,
                filename: elem,
                newFileName: ""
            };
        });
    }catch(err){
        throw err;
    }
}