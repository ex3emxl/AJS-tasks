const http = require('http');
const fs = require('fs');
const server = http.createServer(
        (req, res) => {
    const isHTML = req.url.includes('.html');
    if (isHTML) {
        fs.readFile(req.url.replace('/', ''), (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            if (err)
                return res.end('Error');
            res.end(String(data));
        });
        return;
    }
    
    fs.readFile(req.url.replace('/', ''), (err, data) => {
           
            if (err)
                return res.end('Error');
            res.end(data);
        });
});



server.listen(5600, () => console.log('Running'));