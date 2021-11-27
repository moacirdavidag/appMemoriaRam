const http = require('http');
const host = "http://localhost";
const port = 3000;
const stats = require('./usoDeMemRam.js');


// console.log(http); Ok

// Servidor criado e porta setada para 3000

http.createServer((req, res) => {
    let url = req.url;

    if(url === '/stats') {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end("<h1>Seja bem-vindo!</h1>");
    }

}).listen(port, () => console.log(`Servidor rodando em ${host}:${port}`));
