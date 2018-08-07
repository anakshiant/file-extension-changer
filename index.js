const { commander, logger } = require('./utils');
const processor = require("./processor");

// gets the Filename Extension from -e  option in extension
// gets the Directory Path from -p option in path
const { extension, path } = commander();

// General logger
const log = logger();

//main processing starts here
processor({extension,path,log});