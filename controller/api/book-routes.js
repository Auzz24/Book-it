var axios = require("axios").default;


//import expreess create routes , 

const router = require("express").Router();

router.get('/getBooks', (res, req) => {

    var options = {
      method: 'GET',
      url: 'https://goodreads-books.p.rapidapi.com/genres/textbook/best',
      headers: {
        'x-rapidapi-host': 'goodreads-books.p.rapidapi.com',
        'x-rapidapi-key': '94c895e35bmsha5d3d63d53d272ap14d10cjsn4a1ba9717cc5'
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