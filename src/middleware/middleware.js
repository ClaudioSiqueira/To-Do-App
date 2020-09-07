const jwt = require('jsonwebtoken')
const secret = require('../../secret.json')

module.exports = (req, res, next) =>{
    const authHeader = req.headers.authorization
    // if authHeader doesn't exist
    if(!authHeader){
        return res.status(401).send({err: "Nenhum token enviado"})
    }
    const parts = authHeader.split(' ')

    if(parts.length != 2){
        return res.status(401).send({err: "Formato de Token inválido"})
    }

    const [scheme, token] = parts
    jwt.verify(token, secret.secret, (err, decoded) =>{
        if (err)
            return res.status(401).send({err: "Token inválido"})
                    // decoded.id é o parametro que eu passo na hora de criar no jwt
            req.userId = decoded.id
            return next()
    })
}