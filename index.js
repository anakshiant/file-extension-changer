const { commander, logger } = require('./utils');
const boot = require("././boot");

// gets the Filename Extension from -e  option in extension
// gets the Directory Path from -p option in path
const { extension, path } = commander();

// General logger
const log = logger();

//main processing starts here
boot({extension,path,log});