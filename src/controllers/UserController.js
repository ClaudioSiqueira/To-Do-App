const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const database = require('../database/database')
const bcrypt = require('bcryptjs')

router.post('/', async (req, res) =>{
    let {name, email, password} = req.body
    if(name != undefined && email != undefined && password != undefined){
        try{
            let emailDup = await database.select().table('users').where({email:email})
            if(emailDup.length > 0){
                return res.status(401).send({err: 'Esse email já está cadastrado'})
            }
            let hash = bcrypt.hashSync(password, 10)
            let data = await database.insert({name, email, password: hash}).table('users')
            return res.send(data)
        }catch(err){
            return res.status(500).send({err: 'Erro interno'})
        }

    }else{
        return res.status(400).send({err: "Dados faltando"})
    }
    
})


module.exports = app => app.use('/user', router)