const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

const hostname = process.env.hostname || '0.0.0.0' // allow remote access
const port = process.env.PORT || 3002

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('My SID is S538365');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log("Lindsay really hopes this works")
});