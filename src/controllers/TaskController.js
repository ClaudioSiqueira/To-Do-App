const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const database = require('../database/database')


router.get('/tasks', async (req, res) =>{
    try{
        let data = await database.select(['title', 'description', 'label']).table('tasks')
        res.send(data)
    }catch(err){
        res.status(400).send(err)
    }
})

router.get('/task/:id', async (req, res) =>{
    try{
        let id = req.params.id
        if(!isNaN(id)){
            let data = await database.select(['title', 'description', 'label']).where({id:id}).table('tasks')
            res.send(data)
        }else{
            res.status(400).send('Requisição inválida')
        }

    }catch(err){
        res.status(400).send('Requisição inválida')
    }
})



router.post('/task', async(req, res) =>{
    try{
        let {title, description, label,user_id} = req.body
        let data = await database.insert({title, description, label,user_id}).table('tasks')
        res.send(data)
    }catch(err){
        res.send(err)
    }

})

router.delete('/task/:id', async (req, res) =>{
    try{
        let id = req.params.id
        if(!isNaN(id)){
            await database.delete().where({id:id}).table('tasks')
            res.send('Usúario deletado com sucesso')
        }else{
            res.status(400).send('Requisição inválida')
        }
    }catch(err){
        res.status(400).send('Requisição inválida')
    }
})

router.put('/task/:id', async (req, res) =>{
    try{
        let id = req.params.id
        if(!isNaN(id)){
            let {title, description, label} = req.body
            if(title != undefined){
                await database.where({id:id}).update({title: title}).table('tasks')
                res.send('atualizado')
            }
            if(description != undefined){
                await database.where({id:id}).update({description: description}).table('tasks')
                res.send('atualizado')
            }
        }else{
            res.status(400).send('Requisição inválida')
        }
    }catch(err){
        res.status(400).send('Requisição inválida')
    }
})


module.exports = app => app.use('/', router)