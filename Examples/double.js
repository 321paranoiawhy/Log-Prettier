const logPrettier = require("../logPrettier.js");

// https://img.shields.io/badge/tests-477%20passed%2C%202%20failed-red
logPrettier("tests/all passed, none failed", "00010/01020");
// console.log("%ctests%call passed, none failed", "color:#fff;background-color:#555;padding:2px 5px 2px 5px;border-radius:5px 0 0 5px;font-size:12px;", "color:#fff;background-color:#e05d44;padding:2px 5px 2px 5px;border-radius:0 5px 5px 0;font-size:12px;");

// https://img.shields.io/badge/passed%20tests-31-informational
logPrettier("passed tests/31", "00010/0B020");
// console.log("%cpassed tests%c31", "color:#fff;background-color:#555;padding:2px 5px 2px 5px;border-radius:5px 0 0 5px;font-size:12px;", "color:#fff;background-color:#007ec6;padding:2px 5px 2px 5px;border-radius:0 5px 5px 0;font-size:12px;");