var bar = require("./bar.js");
var msg = "ÄãºÃ";
var info = "ºÇºÇ";

function showInfo(){
    console.log(info);
}

exports.msg = msg;
exports.info = info;
exports.showInfo = showInfo;