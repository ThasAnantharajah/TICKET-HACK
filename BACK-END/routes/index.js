var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

/* GET */


//let trips = ['Paris', 'Lyon', 'Marseille', 'Bruxelles'];

router.get('/trips', (req, res) => {
    res.json({ trips:  });
});

/*router.post('/trips', (req, res) => {
  const newTrip = {
    departure : req.body.departure,
    arrival : req.body.arrival,
    date : req.body.Date,
    price: req.body.price,
  }
  Trip.push(newTrip);
  //console.log(newtrip);
  res.json({ trips: newTrip });
 });
*/
module.exports = router;
