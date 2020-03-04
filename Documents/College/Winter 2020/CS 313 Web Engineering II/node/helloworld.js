const http = require('http');
const fs = require('fs');

function onRequest(req, res) {
    console.log(req.url);
    const path = req.url;
    if(path == "/home") {
        console.log("if statement");
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./home.html', null, function (error, data) {
            if (error) {
                res.writeHead(404);
                res.write('Error: Page not found');
            }
            else {
                res.write(data);
            }
        });
    }
    else if (path == "/getData") {
        console.log("else if statement");
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        const json = '{"name":"Will V", "class":"cs313"}';
        const results = JSON.parse(json);
        res.write(JSON.stringify(results));
        console.log(results);
    }
    else {
        console.log("else statement");
        res.writeHead(404);
        res.write('Error: Page not found');
    }
    res.end();
}

const server = http.createServer(onRequest);
server.listen(1234);

console.log("Server listening...");