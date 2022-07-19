const processBrowser = require("./processBrowser");
const processNode = require("./processNode");

function logPrettier(content, style = "00000", option) {
    return typeof window !== 'undefined' ? processBrowser(content, style, option) : processNode(content, style, option);
}

module.exports = logPrettier;