const roast = require('roast');


roast.it('Is valid blog route', function isValidBlogRoute() {
  let req = {
    method: 'GET',
    url: 'http://localhost/blog/a-simple-test'
  };

  let route = new BlogRoute({req, res});

  return route.isValidRoute();
});

roast.it('Read raw post with path', function readRawPostWithPath() {
  let messageMock = new MessageMock();
  let req = {
    url: 'http://localhost/blog/a-simple-test'
  };

  let route = new BlogRoute({message: messageMock, req});

  route.route();

  return messageMock.readTextFileCalledWithPath === 'blog/a-simple-test.md' && messageMock.hasCallback;
});