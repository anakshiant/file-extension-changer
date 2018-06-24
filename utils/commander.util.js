
const init = () => {
    const config = require('config');
    const program = require('commander')
        .version(config.get('version'), '-v,--version')
        .option('-p,--path <path>', 'provide path where files extension has to change')
        .option('-e,--extension <extension>', 'Extension to which file name has to change')
        .parse(process.argv)
    return program;
}

module.exports = init;