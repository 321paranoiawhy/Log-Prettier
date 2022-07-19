const processBrower = require("./processBrower");
const processNode = require("./processNode");

function logPrettier(content, style = "00000", option) {
    return typeof window !== 'undefined' ? processBrower(content,style,option):processNode(content,style,option)
}

module.exports = logPrettier;