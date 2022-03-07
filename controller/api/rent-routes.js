const router = require('express').Router();
const { Rent , User } = require('../../models/Index');
const sequelize = require('../../config/connection');


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
  })   .then(dbPostData => {
    const rents = dbRentData.map(rent => rent.get({ plain: true }));

    res.render('homepage', { rents });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


// router.get('/', (req, res) => {
//   Rent.findAll({
//     attributes: [
//       'id','title', 'author', 'smallImageURL', 'available', 'pricePerWeek'
//     ],
//   })
//   .then(dbRentData => {
//     const posts = dbRentData.map(rent => rent.get({ plain: true }));

//     res.render('rent', { posts });
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });


  
router.get('/:id', (req, res) => {
  Rent.findOne({
    where: {
      id: req.params.id
    },
    attributes: [ 'id','title', 'author', 'smallImageURL', 'available', 'pricePerWeek'],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbRentData => {
      if (!dbRentData) {
        res.status(404).json({ message: 'No post found' });
        return;
      }
      res.json(dbRentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/users
router.post('/', (req, res) => {
  Rent.create({
    title: req.body.title,
    author: req.body.author,
    smallImageURL: req.body.smallImageURL,
    available: true,
    pricePerWeek: req.body.pricePerWeek,
    user_id: req.session.userID
  })
    .then(dbRentData => res.json(dbRentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// PUT /api/users/1
router.put('/:id', (req, res) => {
  Rent.update(
    {
      available: req.body.available
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbRentData => {
      if (!dbRentData) {
        res.status(404).json({ message: 'No post found ' });
        return;
      }
      res.json(dbRentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
  Rent.destroy({
  where: {
    id: req.params.id
  }
})
  .then(dbRentData => {
    if (!dbRentData) {
      res.status(404).json({ message: 'No post found' });
      return;
    }
    res.json(dbRentData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

  module.exports = router;
  

