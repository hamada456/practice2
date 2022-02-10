
const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
//const moment = require("moment");
//moment.locale("ja");
//let datetoday = moment().format("LL");

const index = fs.readFileSync("./index.ejs","utf8");

var server = http.createServer(getFromClient);
server.listen(3000);
console.log("Server start!");

function getFromClient(req,res){
        var content = ejs.render(index);
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write(content);
        response.end();
}