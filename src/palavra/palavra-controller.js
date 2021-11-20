const Objeto = require('./palavra')

module.exports.get = async function (req, res) {
    let resultado = await Objeto.findOne();
    res.json(resultado)
}

module.exports.update = async function (req, res) {
    const id = req.params.id;
    const Body = req.body;
    const resultado = await Objeto.findByIdAndUpdate(id, Body)
    res.json(resultado)
}

module.exports.delete = async function (req, res) {
    const id = req.params.id
    const resultado = await Objeto.findByIdAndDelete(id)
    res.json(resultado)
}

module.exports.save = async function (req, res) {
    const obj = new Objeto(req.body)
    obj.avaliada = false;
    await obj.save()
    res.json(obj)
}

module.exports.getAll = async function (req, res) {
    let limite = parseInt(req.query.limite) || 3;
    if (limite > 10) {
        limite = 10;
    }
    let resultado = await Objeto.find().where('avaliada').equals('false').limit(limite)
    res.json(resultado)
}