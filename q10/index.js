var http = require('http');
const PORT = 10000;
var server = http.createServer(function (req, res) {
    res.write("Hello World, This is my Node.js Server");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});