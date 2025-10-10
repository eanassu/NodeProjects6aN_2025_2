const http=require('http');

const server=http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World em uma pagina Eugenio');
});

const PORT=3000;

server.listen(PORT, () => {
    console.log(`servidor executando em http://localhost:${PORT}/`);
});