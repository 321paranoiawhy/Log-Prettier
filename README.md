# What Is This

This is a simple project which provides a simple way to log prettier in the browser. It is somewhat like [`chalk`](https://github.com/chalk/chalk). Because syntax of `chalk` is too long and redundant, this project will use a more simple syntax for developers. What you only need is to choose style you want.

If you have some suggestions or problems, please feel free to send a pull request or open an issue on GitHub.

# `Syntax`

* `/` is used to split each text and style.
* Each style has five digits, such as `00000`
* The order of each style is `color`, `background-color`, `padding`, `border-radius`, `font-size`.
* Number of styles can be smaller than number of texts, or equal to, or greater than.

```JavaScript
// "/" is used to split each text and style

// one text and one style
logPrettier("text1","style1");

// two texts and one or two styles (style1,style2)
logPrettier("text1/text2","style1[/style2]");

// three texts and one or two or three styles(style1,style2,style3)
logPrettier("text1/text2/text3","style1[/style2[/style3]]");

// or more texts and styles
```

# Several Basic Examples

```JavaScript
// single text

logPrettier("bright green", "02000");
// equals to the below snippet
console.log("%cbright green", "color:#fff;background-color:#4c1;padding:2px 5px 2px 5px;border-radius:5px 5px 5px 5px;font-size:12px;");


logPrettier("blueviolet", "09000");
// equals to the below snippet
console.log("%cblueviolet", "color:#fff;background-color:blueviolet;padding:2px 5px 2px 5px;border-radius:5px 5px 5px 5px;font-size:12px;");

logPrettier("hotpink", "0A000");
// equals to the below snippet
console.log("%chotpink", "color:#fff;background-color:#ff69b4;padding:2px 5px 2px 5px;border-radius:5px 5px 5px 5px;font-size:12px;");
```

```JavaScript
// double texts

logPrettier("tests/all passed, none failed", "00010/01020");
// equals to the below snippet
console.log("%ctests%call passed, none failed", "color:#fff;background-color:#555;padding:2px 5px 2px 5px;border-radius:5px 0 0 5px;font-size:12px;", "color:#fff;background-color:#e05d44;padding:2px 5px 2px 5px;border-radius:0 5px 5px 0;font-size:12px;");


logPrettier("passed tests/31", "00010/0B020");
// equals to the below snippet
console.log("%cpassed tests%c31", "color:#fff;background-color:#555;padding:2px 5px 2px 5px;border-radius:5px 0 0 5px;font-size:12px;", "color:#fff;background-color:#007ec6;padding:2px 5px 2px 5px;border-radius:0 5px 5px 0;font-size:12px;");
```

# Folder Tree

```
├─Examples # Some Examples
├─JSON # JSON Files
├─Mapping-Table
└─Variable # Collect Variables
```

# Mapping Table

## `color`

[See Here](Mapping-Table/color.md)

## `background-color`

[See Here](Mapping-Table/background-color.md)

## `padding`

[See Here](Mapping-Table/padding.md)

## `border-radius`

[See Here](Mapping-Table/border-radius.md)

## `font-size`

[See Here](Mapping-Table/font-size.md)

## `base`

[See Here](Mapping-Table/base.md)

# How to Install & Import

## Install

```bash
npm i log-so-easy
```

## Import in `Native JavaScript`

```JavaScript
const log = require("log-so-easy");

console.log(log); // [Function: logPrettier]

log("tests/all passed, none failed", "00010/01020");
```

## Import in `Vue.js`

## Import in `React.js`

## Import in `Angular.js`

## Other Else

To be continued...

Need your help!

# More Examples

See Here:

* [single](Examples/single.js)
* [double](Examples/double.js)

# Thanks

* [shields - GitHub](https://github.com/badges/shields)
* [shields.io](https://shields.io/)
* [chalk - GitHub](https://github.com/chalk/chalk)
* [chalk - npm](https://www.npmjs.com/package/chalk)