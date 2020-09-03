const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const slugify = require("slugify")
const database = require('../database/database')
const middleware = require('../middleware/middleware')

// Select all tasks
router.get('/tasks',middleware, async (req, res) =>{
    try{
        let data = await database.select(['title', 'description', 'label']).table('tasks')
        return res.send(data)
    }catch(err){
        return res.status(400).send(err)
    }
})

// Select one taks by id
router.get('/task/:id',middleware,  async (req, res) =>{
    try{
        let id = req.params.id
        if(!isNaN(id)){
            let data = await database.select(['title', 'description', 'label']).where({id:id}).table('tasks')
            return res.send(data)
        }else{
            return res.status(400).send('Requisição inválida')
        }

    }catch(err){
        return res.status(400).send('Requisição inválida')
    }
})


// Select all tasks by label
router.get('/task/label/:label', middleware, async (req, res) =>{
    try{
        let label = req.params.label
        let data = await database.select(['title', 'description', 'label']).where({label:label}).table('tasks')
        return res.send(data)
        }
    catch(err){
        return res.status(400).send('Requisição inválida')
    }
})



// Create a task
router.post('/task', middleware, async(req, res) =>{
    try{
        let {title, description, label,user_id} = req.body
        let slug = slugify(label)
        let data = await database.insert({title, description, label:slug,user_id}).table('tasks')
        return res.send(data)
    }catch(err){
        return res.send(err)
    }

})

// Delete a task
router.delete('/task/:id',middleware,  async (req, res) =>{
    try{
        let id = req.params.id
        if(!isNaN(id)){
            await database.delete().where({id:id}).table('tasks')
            return res.send('Usúario deletado com sucesso')
        }else{
            return res.status(400).send('Requisição inválida')
        }
    }catch(err){
        return res.status(400).send('Requisição inválida')
    }
})

// Edit a task
router.put('/task/:id',middleware,  async (req, res) =>{
    try{
        let id = req.params.id
        let existId = await database.select().table('tasks').where({id:id})
        if(existId.length > 0){
            if(!isNaN(id)){
                let {title, description, label} = req.body
                if(title != undefined){
                    await database.where({id:id}).update({title: title}).table('tasks')
                }
                if(description != undefined){
                    await database.where({id:id}).update({description: description}).table('tasks')
                }
                if(label != undefined){
                    let slug = slugify(label)
                    await database.where({id:id}).update({label: slug}).table('tasks')
                }
                return res.send('Atualizado')
            }else{
                return res.status(400).send('Requisição inválida')
            }
        }else{
            return res.status(404).send('Id não encontrado')
        }

    }catch(err){
        return res.status(400).send('Requisição inválida')
    }
})


module.exports = app => app.use('/', router)