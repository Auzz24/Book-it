require("dotenv").config()
var axios = require("axios").default;

//import expreess create routes , 

const router = require("express").Router();

router.get('/buyBooks', (req, res) => {
    axios.get(process.env.ApiBaseURL + "/api/books/getBooks")
    .then(response => {
      console.log(response)
      res.render("homepage", response.data.books)
    })
    .catch(err=>{
      console.log(err)
    })
});

module.exports = router; 