const directoryReader = require('./directory-reader.service');
const fileChecker = require("./file-checker.service");
const fileRenamer = require("./file-renamer.service");


module.exports = {
    directoryReader,
    fileChecker,
    fileRenamer
}