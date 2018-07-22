const { commander, logger } = require('./utils');
const processor = require("./processor");

const { extension, path } = commander();
const log = logger();


processor({extension,path,log});