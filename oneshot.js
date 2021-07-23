const express = require('express')
const app = express()
//conexion mysql
const mysql = require('mysql')

//const trickdata= require('./parkings.json') //recupere fichier dans une 

//connexion mysql
/*
const db = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password:"mdp"
 
  });
db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    db.query("CREATE DATABASE mabdd", function (err, result) {
        if (err) throw err;
        console.log("Base de données créée !");
      });
 
  });*/
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mdp",
    database : "tricking_progression"
  });
 
   con.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
    con.query("SELECT tricks.id, tricks.name FROM tricks" , function (err, result) {
        if (err) throw err;
        console.log(result);
      });
    }); 
 


    //POST
    con.post('/parkings', (req,res) => {
        parkings.push(req.body)
        res.status(200).json(parkings)
    })
    
    app.put('/parkings/:id', (req,res) => {
        const id = parseInt(req.params.id)
        let parking = parkings.find(parking => parking.id === id)
        parking.name =req.body.name,
        parking.city =req.body.city,
        parking.type =req.body.type,
        res.status(200).json(parking)
    })

/*
app.use(express.json())

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app.get('parking/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id ===id)
    res.status(200).json(parking)
})



app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})

app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})
app.listen(8007, () => {
    console.log("Serveur à l'écoute, entrez http://localhost:8007")
  })*/