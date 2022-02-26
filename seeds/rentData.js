const sequelize = require('../config/connection');
const { Rent } = require('../models');

const rentdata = [
  {
    username: 'auzz24',
    id: 145806,
    title: 'Biology (Hardcover)',
    author: 'Neil A. Campbell',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387710538l/145806._SX50_.jpg',
    available: false, 
    pricePerWeek: 5
  },
  {
    username: 'Ronboi',
    id:108986,
    title: 'https://www.goodreads.com/book/show/108986.Introduction_to_Algorithms',
    author: 'Thomas H. Cormen',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1387741681l/108986._SX50_.jpg',
    available: false, 
    pricePerWeek: 4
  },
  {
    username: 'ijj5565',
    id: 27543,
    title: 'Artificial Intelligence: A Modern Approach (Hardcover)"',
    author: 'Stuart Russell',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1385600294l/27543._SX50_.jpg',
    available: true , 
    pricePerWeek: 5
  },
  {
    username: 'msindependent',
    id: 145292,
    title: 'Introduction to Electrodynamics (Hardcover)',
    author: 'David J. Griffiths',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347933077l/145292._SX50_.jpg',
    available: true, 
    pricePerWeek: 7
  },
  {
    username: 'djill33',
    id: 202485,
    title: 'Fundamentals of Physics (Hardcover)',
    author: 'David Halliday',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388795532l/202485._SX50_.jpg',
    available: false, 
    pricePerWeek: 4
  },
  {
    username: 'jmr3525',
    id: 5546,
    title: 'The Feynman Lectures on Physics (Hardcover)"',
    author: 'Richard P. Feynman',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1433168047l/5546._SX50_.jpg',
    available: true , 
    pricePerWeek: 7
  },
  {
    username: 'megan6',
    id: 61297,
    title: 'Calculus [With CDROM] (Hardcover)',
    author: 'James Stewart',
    smallImageURL: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1170573179l/61297._SX50_.jpg',
    available: true , 
    pricePerWeek: 6
  }
];

const seedRent = () => Rent.bulkCreate(rentdata);

module.exports = seedRent;