const fs = require('fs');
const path = require('path');
const {logger} = require("../utils");
const {promisify} = require('util');

const log = logger();

const stats = promisify(fs.stat);
 
// Checks every file name and return if ti is a file or directory
module.exports = async function(arguments){
    let args = [];
    for(let argument of arguments){
        let arg = await check_file(argument);
        args.push(arg);
    }
    return args;
}

async function check_file(argument){
    const {dirpath,filename} = argument;
    const filePath = path.join(dirpath,filename);
    try{
        const stat = await stats(filePath);
        argument.isDir = stat.isFile() ? false : true;
        return argument;
    }catch(err){
        throw err;
    }
}