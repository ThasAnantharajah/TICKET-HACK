var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const moment = require('moment');

/* GET */

/*router.get('/trips', (req, res) => {
   Trip.find().then(data => {
    res.json({ trips:  data });
   })
   
});*/
//2024-05-15T21:39:22.594+00:00
router.get('/trips', (req, res) => {
  const date = new Date (req.query.date);
  const datePlusOne = new Date (moment(date).add(1, "days"));
  console.log(date,datePlusOne );
  
   Trip.find({departure: req.query.departure, arrival: req.query.arrival, date: { $gte: date, $lt: datePlusOne }}).then(data => {
   res.json({ trips:  data });
  })
  
});

/*router.post('/trips', (req, res) => {
  });
*/
module.exports = router;
