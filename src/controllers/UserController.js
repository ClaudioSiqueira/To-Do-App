const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const database = require('../database/database')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
            let user = await database.select().table('users').where({email:email})
            user = user[0]
            let secret = 'cbipxusgp923ioasdn3290wdsae'
            let token = jwt.sign({id: user.id},secret, {
                expiresIn:86400
            })
            res.send({user: user, token: token})
            
        }catch(err){
            return res.status(500).send({err: err})
        }

    }else{
        return res.status(400).send({err: "Dados faltando"})
    }
})

router.post('/authenticate', async (req, res) =>{
    try{
        let {email, password} = req.body
        if(email == undefined || password == undefined){
            return res.status(400).send({err: 'Dados faltando'})
        }
        let user = await database.select().table('users').where({email:email})
        if(user.length == 0){
            return res.status(404).send('Usuário não encontrado')
        }
        if(await bcrypt.compareSync(password, user[0].password)){
            user[0].password = undefined
            user = user[0]
            secret = 'cbipxusgp923ioasdn3290wdsae'
            let token = jwt.sign({id: user.id},secret, {
                expiresIn:86400
            })
            return res.send({user, token})
        }else{
            return res.status(401).send({err: 'Senha errada'})
        }
        
        
    }catch(err){
        return res.send(err)
    }

})


module.exports = app => app.use('/user', router)