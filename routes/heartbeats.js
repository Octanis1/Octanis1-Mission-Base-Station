var express = require('express');
var router = express.Router();

var Heartbeat = require('../models/heartbeat');



/* GET heartbeats listing. */
router.get('/', function(req, res, next) {

  Heartbeat.find({}, function(err, docs) {
    if (!err){
        console.log(docs);
        res.send(docs);
    } else {throw err;}
  });

});


/* POST create heartbeat*/
router.post('/', function(req, res) {
  var ua = req.headers['user-agent'];
  var payload = req.body;

  console.log(new Date());
  console.log('User-Agent: ' + ua);
  console.log(req.body);
  console.log(req.headers);
  /*
  var newHeartbeat = Heartbeat(req.body);

  newHeartbeat.save(function(err){
    if(err) throw err;
  });
  */
  res.send('OK');

});



/* GET last heartbeat */
router.get('/last', function(req, res, next) {

  //TODO

});


module.exports = router;
