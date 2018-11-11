const http = require('http');
const fs = require('fs');

http.get('http://wttr.in/~kharkov', (res) => {
    const {statusCode} = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
    } else if (!/^text\/html/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                `Expected text/html but received ${contentType}`);
    }
    if (error) {
        console.error(error.message);
        res.resume();
        return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
            fs.writeFile('weather.html', rawData, (err) => {
                if (err)
                    return console.log(err);
                console.log('File weather.html created!');
            });
    });
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
