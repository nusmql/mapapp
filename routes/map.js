var express = require('express');
var router = express.Router();
var fhip = "http://192.168.68.20/chartering-api/frontend/web/index.php";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('map', {title: 'Map - This is important for the SEO'});
});


module.exports = router;
