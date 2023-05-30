var Planta = require('../models/planta')

module.exports.list = () => {
    return Planta
            .find()
            .sort({'Nome Científico': 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlanta = id => {
    return Planta.findById(id)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlantasEspecie = especie => {
    return Planta
            .find({'Espécie': especie})
            .sort({'Nome Científico': 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getPlantasImplantacao = implantacao => {
    return Planta
            .find({'Implantação': implantacao})
            .sort({'Nome Científico': 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getFreguesias = () => {
    return Planta
            .distinct('Freguesia')
            .sort({'Freguesia': 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.getEspecies = () => {
    return Planta
            .distinct('Espécie')
            .sort({'Espécie': 1})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.addPlanta = p => {
    return Planta.create(p)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Caminho
            .deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}
