// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

//Routes
// Methods HTTP: GET, POST, PUT, DELETE
app.get('/v1/explorers',(req,res) => {
    console.log(`Get Explorers V1 API ${new Date()}`)
    const explorer1 = {id:1, name: "Explorer1"}
    const explorer2 = {id:2, name: "Explorer2"}
    const explorer3 = {id:3, name: "Explorer3"}
    const explorer4 = {id:4, name: "Explorer4"}
    const explorers = [explorer1,explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

app.get('/v1/explorers/:id',(req,res)=>{
    console.log(`APi Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id:1,name:"Moy"}
    res.status(200).json(explorer)
})

app.post('/v1/explorers',(req,res)=>{
    console.log(`Api Explorers POST request ${new Date()}`)
    //Agregrar logica para persistir
    const requestBody = req.body// Parámetros de un cliente
    res.status(201).json({message: "Created"})
})

app.put('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id ${req.params.id}`)
    
    const requestBody = req.body// Parámetros de un cliente
    res.status(200).json({message: "Update!"})
})

app.delete('/v1/explorers/:id',(req,res)=>{
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body// Parámetros de un cliente
    res.status(200).json({message: "Delete"})
})



// Con esto inicializamos esta app
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`)
})