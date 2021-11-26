const Objeto = require('./imagem')

module.exports.get = async function (req, res) {
    const descricao = req.params.descricao;
    let resultado = await Objeto.find(
        {
            descricao: {
                $in: [descricao]
            },
            avaliada: {
                $in: [true]
            }
        });
    res.json(shuffleArray(resultado).slice(0,2))
}
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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