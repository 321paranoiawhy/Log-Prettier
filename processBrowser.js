const { _color, _backgroundColor, _padding, _borderRadius, _fontSize, _base } = require("./Variable/variable.js");

function processBrowser(content, style, option) {
    let length1 = content.split("/").length;
    let length2 = style.split("/").length;


    // convert content into specified string
    content = ["", ...content.split("/")].join("%c");
    // console.log(content);
    // example: "x/y/z" -> "%cx%cy%cz"
    // ["", ..."x/y/z".split("/")].join("%c"); // "%cx%cy%cz"


    // split style(string) into array
    style = style.split("/");


    // option || {}
    // avoid deconstructing option when it is undefined, deconstruct empty object instead.
    const { userColor, userBackgroundColor, userPadding, userBorderRadius, userFontSize } = option || {};


    // when option has user settings, use them instead of local settings
    const color = userColor || _color;
    const backgroundColor = userBackgroundColor || _backgroundColor;
    const padding = userPadding || _padding;
    const borderRadius = userBorderRadius || _borderRadius;
    const fontSize = userFontSize || _fontSize;


    // two-dimensional array
    const mapArray = [color, backgroundColor, padding, borderRadius, fontSize];
    // CSS style prefix
    // example: "color:"
    const prefix = ["color:", "background-color:", "padding:", "border-radius:", "font-size:"];
    // space separated (multiple properties such as padding, border-radius)
    const space = " ";
    // CSS style suffix
    const suffix = ";";
    // full CSS style example: prefix + mapArray[0][0] + suffix


    // deal with CSS style
    function dealWithStyle(string) {
        let stringLength = string.length;
        let result = "";
        for (let i = 0; i < stringLength; i++) {
            let value = mapArray[i][_base[string[i]]];
            switch (i) {
                // color
                case 0:
                    result += prefix[i] + value + suffix;
                    break;
                // background-color
                case 1:
                    result += prefix[i] + value + suffix;
                    break;
                // padding
                case 2:
                    result += prefix[i] + value["top"] + space + value["right"] + space + value["bottom"] + space + value["left"] + suffix;
                    break;
                // border-radius
                case 3:
                    result += prefix[i] + value["top-left"] + space + value["top-right"] + space + value["bottom-right"] + space + value["bottom-left"] + suffix;
                    break;
                // font-size
                case 4:
                    result += prefix[i] + value + suffix;
                    break;
                default:
                    break;
            }
        }
        return result;
    }


    // example
    // console.log("%cA%cB%cC", "color:red;", "color:blue;", "color:green;");
    // let arr = ["color:red;", "color:blue;", "color:green;"];
    // console.log("%cA%cB%cC", ...arr);
    // return: console.log();


    // 1. length1 === length2
    // mapping one element of styleArray to one element of content
    // example: console.log("%c123%456", style1, style2);
    let styleArray = [];
    style.forEach((item) => styleArray.push(dealWithStyle(item)));
    if (length1 === length2) {
        return console.log(content, ...styleArray);
    }
    // 2. length1 > length2
    // reuse element of styleArray as some elements of content do not have element of styleArray respectively
    // example: console.log("%c123%456", style1);
    else if (length1 > length2) {
        let tail = new Array(length1 - length2).fill(styleArray.at(-1));
        styleArray.push(...tail);
        return console.log(content, ...styleArray);
    }
    // 3. length1 < length2
    // discard element of styleArray
    // example: console.log("%c123%456", style1, style2, style3);
    else {
        styleArray.splice(length1);
        return console.log(content, ...styleArray);
    }
}

module.exports = processBrowser;