const http = require("http");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(`\n${req.method} ${req.url}`);
    console.log(req.headers);

    req.on("data", function(chunk) {
        console.log("BODY: " + chunk);
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write('\n'+req.method +req.url);
    for( header in req.headers) {
        res.write('\n\t' + header +': '+ ""+req.headers[header]);
    }
    res.end("");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
