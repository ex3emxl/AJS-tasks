const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const isHTML = req.url.includes('.html');
    const fileName = req.url.replace('/', '');

    if (isHTML) {
        fs.readFile(fileName, (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            if (err)
                res.end('<strong>Error HTML!</strong>');
            res.end(String(data));
        });
        return;
    }

    fs.readFile(fileName, (err, data) => {
        if (err)
            res.end('<strong>Error not HTML!</strong>');
        res.end(data);
    });
});


server.listen(5600, () => {
    console.log('Server is listening on port: 5600');
});
