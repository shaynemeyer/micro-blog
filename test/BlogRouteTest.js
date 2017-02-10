const roast = require('roast');
let BlogRoute = require('../route/BlogRoute');

let MessageMock = require('./mock/messageMock');
let ResponseMock = require('./mock/responseMock');

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

roast.it('Read post view with path', function readPostViewWithPath() {
  var messageMock = new MessageMock();
  var rawContent = 'content';

  var route = new BlogRoute({ message: messageMock });

  route.readPostHtmlView(null, rawContent);

  return messageMock.readTextFileCalledWithPath !== '' &&
    route.rawContent === rawContent &&
    messageMock.hasCallback;
});

roast.it('Respond with full post', function respondWithFullPost() {
  var messageMock = new MessageMock();
  var responseMock = new ResponseMock();

  var route = new BlogRoute({ message: messageMock, res: responseMock });

  route.renderPost(null, '');

  return responseMock.result.indexOf('200') >= 0;
});