var express = require('express');
var router = express.Router();

var gsmPacket = require('../models/gsm_packet');



/* GET gsmPacket listing. */
router.get('/', function(req, res, next) {

  gsmPacket.find({}, function(err, docs) {
    if (!err){
        res.send(docs);
    } else {throw err;}
  });

});


/* POST create heartbeat*/
router.post('/', function(req, res) {
  var ua = req.headers['user-agent'];
  var payload_hex_string = "";

  if(req.is('text/plain')){
    payload_hex_string = req.body;
  }else{
    var gb = new Buffer(req.body, 'binary');
    payload_hex_string = gb.toString('hex');
  }

  console.log(new Date());
  console.log('User-Agent: ' + ua);
  console.log(req.body);
  console.log(req.headers);


  var newgsmPacket_frame = {
    user_agent: ua,
    payload_hex: payload_hex_string,
    timestamp: new Date(),
    board: req.query.board
  }

  var newgsmPacket = gsmPacket(newgsmPacket_frame);

  newgsmPacket.save(function(err){
    if(err) throw err;
  });

  res.send('OK');

});



/* GET last gsmPacket */
router.get('/last', function(req, res, next) {

  //TODO

});


module.exports = router;
