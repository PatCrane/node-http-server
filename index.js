const http = require('http');

const PORT = 3000;

const myServer = http.createServer();

myServer.on('request', (req,res) => {
    if(req.url === '/api/book') {
        
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });

        res.end(JSON.stringify({
            book: 'The Hobbit',
            author: 'JRR Tolkien'
        }));
    } else if(req.url === '/book') {

        res.write('<html>')
        res.write('<body>')
        res.write('<ul>');
        res.write('<li>Book: The Hobbit </li>')
        res.write('<li>Author: JRR Tolien </li>')
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    }
});

myServer.listen(PORT, () => {
    console.log(`My server is listening on ${PORT}`);
});



