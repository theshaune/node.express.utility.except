const UrlPattern = require('url-pattern');

let except = function(path, middleware) {
  return function(req, res, next) {
    let pattern = new UrlPattern(path);
    if (pattern.match(req.path)) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
};

module.exports = except;
