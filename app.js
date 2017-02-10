/* app.js */
const http = require('http');
const port = process.env.port || 1377;

let message = require('./message/message');
const BlogRoute = require('./route/BlogRoute');

let app = http.createServer(function requestListener(req, res) {

  let blogRoute = new BlogRoute({message, req, res});

  if(blogRoute.isValidRoute()){
    blogRoute.route();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('A simple micro blog website with no frills nor nonsense.')
});

app.listen(port);

console.log(`Listening on http://localhost:${port}`);