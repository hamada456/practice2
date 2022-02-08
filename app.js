
const http = require("http");
const fs = require("fs");
//const ejs = require("ejs");
//const moment = require("moment");
//moment.locale("ja");
//let datetoday = moment().format("LL");

var server = http.createServer(
    (request,response) => {
        fs.readFile("./index.html","UTF-8",(error,data) => {
            response.writeHead(200, {"Content-Type":"text/html"});
            response.write(data);
            response.end();
        })
    }
);
server.listen(3000);