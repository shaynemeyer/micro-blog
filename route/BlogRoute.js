/* route/blogRoute.js */
let BlogRoute = function BlogRoute(context) {
  this.req = context.req;
  this.res = context.res;
  this.message = context.message;
};

BlogRoute.prototype.isValidRoute = function isValidRoute() {
  return this.req.method === 'GET' && this.req.url.indexOf('/blog/') >= 0;
};

BlogRoute.prototype.route = function route() {
  const url = this.req.url;
  const index = url.indexOf('/blog/') + 1;
  const path = url.slice(index) + '.md';

  this.message.readTextFile(path, function dummyTest(err, rawContent) {
    this.res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    this.res.end(rawContent);
  }.bind(this));
};

module.exports = BlogRoute;