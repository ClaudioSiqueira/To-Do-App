const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./routes/routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

require('./controllers/TaskController')(app)

app.get('/', (req, res) =>{
    res.send('teste')
})

app.listen(7777, () =>{
    console.log('Servidor aberto !')
})