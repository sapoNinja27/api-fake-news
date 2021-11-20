const auth = require('./auth');
module.exports = function(req, res, next){
    var naoAutorizado = function(){
        res.statusCode = 400
        throw new Error("Você não esta autorizado a ver esse conteudo")
    }
    const header = req.headers.authorization
    if(!header){
        naoAutorizado();
    }
    const token = header.split('Bearer ')[1]
    if(!token || token != auth){
        naoAutorizado();
    }

    next()
}