const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {

// ------------------------------- refer below for individual url rendering implementation -------------------------------

    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead('200', { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead('200', { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     });
    // }

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Lalit', age: 20 },
    //         { name: 'Amit', age: 25 }
    //     ];

    //     res.writeHead('200', { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

// ------------------------------- refer below for dynamic url rendering implementation -------------------------------

    // build file path
    let filepath = path.join(__dirname, 'public', req.url === '/' ?
        'index.html' : req.url);

    // extension of file
    let extname = path.extname(filepath);

    // initial content-type
    let contentType = 'text/html';

    // check ent and set content type
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image.jpg';
            break;
    }

    // read file
    fs.readFile(filepath, (err, content) => {

        if (err) {
            if (err.code == 'ENOENT') {
                // page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead('200', { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                // some server error
                res.writeHead(500);
                res.end(`Internal server error: ${err.code}`)
            }
        } else {
            // success
            res.writeHead('200', { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));