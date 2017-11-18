
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', { title: 'Cloudant Boiler Plate' });
};

exports.foo = function(req, res){
  res.render('foo.html', { title: 'Cloudant Boiler Plate' });
};