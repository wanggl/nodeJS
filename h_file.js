var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
    //不处理小图标
    if(req.url == "/favicon.ico"){
        return;
    }
    fs.mkdir("./album");
    fs.mkdir("./album/aaa");
    //stat检测状态
    fs.stat("./album/aaa",function(err,data){
        //检测这个路径，是不是一个文件夹
        console.log(data.isDirectory());
    });
    res.end();
});

server.listen(3000,"127.0.0.1");