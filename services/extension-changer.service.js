

const extensionChanger = ({filename,extension})=>{
    //split the filename with . character
    let splitedFilename = filename.split(".");
    //get the last member as it is the extension
    splitedFilename[splitedFilename.length-1] = extension;

    return splitedFilename.join(".");
}

module.exports = extensionChanger;