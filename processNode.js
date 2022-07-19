const { _nodeColor, _nodeBackgroundColor, _nodeFontProperty } = require("./Variable/variable.js")

function processNode(content, style, option) {
    let length1 = content.split("/").length;
    let length2 = style.split("/").length;


    // convert content into specified string
    content = [...content.split("/")];
    // console.log(content);
    // example: "x/y/z" -> "%cx%cy%cz"
    // ["", ..."x/y/z".split("/")].join("%c"); // "%cx%cy%cz"


    // split style(string) into array
    style = style.split("/");

    // option || {}
    // avoid deconstructing option when it is undefined, deconstruct empty object instead.
    const { userColor, userBackgroundColor, userFontProperty } = option || {};


    // when option has user settings, use them instead of local settings
    const color = userColor || _nodeColor;
    const backgroundColor = userBackgroundColor || _nodeBackgroundColor;
    const FontProperty = userFontProperty || _nodeFontProperty;
    const mapArray = [color, backgroundColor, FontProperty];

    function dealWithStyle(contentString, styleString) {
        let result = `\x1B[`;
        let flag = false;
        for (let i = 0; i < mapArray.length; i++) {
            let style = mapArray[i][styleString[i]];
            if (style === undefined) flag = true;
            switch (i) {
                case 0:
                    result += style;
                    break;
                case 1:
                    result += ";" + style;
                    break;
                case 2:
                    result += ";" + style;
                    break;
            }
        }
        result += "m" + contentString + `\x1B[0m`;
        return flag ? "no support style" : result;
    }

    if (length1 === length2) {
        let res = ``;
        for (let i = 0; i < length1; i++) {
            res += " " + dealWithStyle(content[i], style[i]);
        }
        return console.log(res);
    } else if (length1 > length2) {
        let res = ``;
        for (let i = 0; i < length2; i++) {
            res += " " + dealWithStyle(content[i], style[i]);
        }
        return console.log(res);
    } else {
        let res = ``;
        for (let i = 0; i < length1; i++) {
            res += " " + dealWithStyle(content[i], style[i]);
        }
        return console.log(res);
    }
}
// '\x1B[41;33m[node_orm:error]\x1B[0m'
// '\x1B[32;42;00mbright green\x1B[0m'
module.exports = processNode;