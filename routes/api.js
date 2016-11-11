const express = require('express')
const Beer = require('./models/beer')

const router = express.Router()

router.get('/', function(req, res, next) {
  res.json({message: 'You are running dangerously ...'})
  console.log("api called")
  // next()
})


// const beersRoute = router.route('/beers')

// beersRoute.post(function(req, res) {
//   let beer = new Beer()
// console.log(req)

//   beer.name = req.body.name
//   beer.type = req.body.type
//   beer.quantity = req.body.quantity

//   beer.save(function(err) {
//     if(err) {
//       res.send(err)
//     }

//     res.json({message: 'Beer added to the locker!', data: beer})
//   })

// })


module.exports = router
