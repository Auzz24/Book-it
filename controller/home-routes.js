const router = require('express').Router();
const sequelize = require('../config/connection');
const { Rent , User } = require('../models');


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
console.log(rents);
    res.render('homepage', { rents });
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

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;