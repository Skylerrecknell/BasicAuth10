
/*
 * GET home page.
 */

exports.index = function(req, res){
  var user = req.user;
  res.render('index.html', {u: user, title: 'index' });
};

exports.foo = function(req, res){
  var user = req.user;
  console.log(req);
  res.render('foo.html', {u: user, title: 'foo' });
};