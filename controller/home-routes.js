const router = require('express').Router();
const sequelize = require('../config/connection');
const { Rent , User } = require('../models/Index');


router.get('/', (req, res) => {
  Rent.findAll({
    attributes: [
      'id',
      'title',
      'author',
      'smallImageURL',
      'available',
      'pricePerWeek'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })   .then(dbRentData => {
    const rents = dbRentData.map(rent => rent.get({ plain: true }));
    console.log(req.session.loggedin);
console.log(rents);
    res.render('homepage', { 
      rents,
      loggedin: req.session.loggedin
     });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/rent', (req, res) => {
  res.render('rent');
});

router.get('/payment', (req, res) => {
  res.render('payment');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/addpost', (req, res) => {
  Rent.findAll( {
    where: {
      // use the ID from the session
      user_id: req.session.userID
    }},
    {
    attributes: [
      'id',
      'title',
      'author',
      'smallImageURL',
      'available',
      'pricePerWeek'
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })   .then(dbRentData => {
    const userPost = dbRentData.map(rent => rent.get({ plain: true }));
    console.log(req.session.loggedin);
    res.render('addpost', { 
      userPost,
      loggedin: req.session.loggedin
     });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;