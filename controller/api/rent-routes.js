const router = require('express').Router();
const { Rent } = require('../../models');

router.get('/', (req, res) => {
    Rent.findAll({
      attributes: [
          'username',
        'id',
        'title',
        'author',
        'smallImageURL',
        'available',
        'pricePerWeek'
      ]
    }) .then(dbRentData => res.json(dbRentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router;
  