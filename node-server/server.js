const http = require('http');
const fs = require('fs');
const prettyDate = require('./date');

const server = http.createServer((req, res) => {
    const isHTML = req.url.includes('.html');
    const fileName = req.url.replace('/', '');
    const styles = '<style>.pretty-date {position: fixed;bottom: 0;right: 0;}</style>';
    const formatPrettyDate = '<div class="pretty-date">' + prettyDate() + '</div>';

    if (isHTML) {
        fs.readFile(fileName, (err, data) => {
            res.setHeader('Content-Type', 'text/html');
            if (err)
                res.end('<strong>Error HTML!</strong>');
            res.end(styles + String(data) + formatPrettyDate);
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
