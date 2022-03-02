var axios = require("axios").default;


//import expreess create routes , 

const router = require("express").Router();

router.get('/getBooks', (req, res) => {

    var options = {
      method: 'GET',
      url: 'https://goodreads-books.p.rapidapi.com/genres/textbook/best',
      headers: {
        'x-rapidapi-host': 'goodreads-books.p.rapidapi.com',
        'x-rapidapi-key': '99f96aae53msh9a0e5b42e091eeep12e261jsn062edb68215d'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
        res.json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
    
    
})



module.exports = router;