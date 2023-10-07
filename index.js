const express = require('express')
const port = 8080;
const app = express()
app.listen(port, () => console.log(`app listening on port ${port}`))
app.use(express.json())

  app.get('/tshirt',(req,res) =>{
    res.status(200).send({
        tshirt: "tshirt sending...."
    })
  }); 

  app.post('/tshirt/:id',(req,res) =>{
   
    console.log("~~~~~~~Post hit~~~~~~~~~~~~~~~~")
    res.status(200).send({output: req.body.tshirt + " size- " +  req.params.id});
  })

  module.exports = app