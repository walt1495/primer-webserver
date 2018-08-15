const http = require('http');

http.createServer((req, res) => {

    let data = {
        nombre: 'Walter',
        apellidos: 'Almestar Rivera',
        url: req.url
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(3000);

console.log('Escuchando en el puerto 3000');