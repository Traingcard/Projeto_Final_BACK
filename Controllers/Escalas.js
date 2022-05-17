const Router = require("express").Router();
const Escalas = require("../Models/Escalas");


Router.get("/", (req, res) => {

    Escalas.find().then((result) => {
        if (result.length < 1 ) {
            return res.status(400).send({
                success: false,
                message: "Não foi possível encontrar o horário"
            })
        }
        return res.status(200).send({
            success: true,
            message: result
        });
    }).catch((err) => {
        return res.status(400).send({
            success: false,
            message: err
        });
    })
})

Router.get("/:id", (req, res) => {

    const {id} = req.params;

    Escalas.find({title: id}).then((result) => {
        if (result.length < 1 ) {
            return res.status(400).send({
                success: false,
                message: "Não foi possível encontrar o horário"
            })
        }
        return res.status(200).send({
            success: true,
            message: result
        });
    }).catch((err) => {
        return res.status(400).send({
            success: false,
            message: err
        });
    })
})

Router.patch("/indisponivel/:id", (req, res) => {

    const {id} = req.params;

    Escalas.updateOne({_id: id}, {disponibilidade:false}).then((result) => {
        console.log(result);
        return res.status(200).send({
        success: true,
        message: result
    });
}).catch((err) => {
    return res.status(400).send({
        success: false,
        message: err
    });
})
})

Router.post("/add", (req, res) => {
    const new_escala = req.body

    if (!new_escala) {
        return res.status(400).send({
            success: false,
            message: "User não adas"
        })
    }

    Escalas.create(new_escala).then((result) => {
        return res.status(200).send({
            
        success: true,
        message: result
    });
}).catch((err) => {
    return res.status(400).send({
        success: false,
        message: err
    });
})
})

Router.patch("/edit/:id", (req, res) => {
    const escala = req.body;
    const {id} = req.params

    if (escala == [] ) {
        return res.status(400).send({
            success: false,
            message: "Não existem escalas"
        })
    }

    Escalas.updateOne({_id: id}, escala).then((result) => {
        return res.status(200).send({
        success: true,
        message: result
    });
}).catch((err) => {
    return res.status(400).send({
        success: false,
        message: err
    });
})
})

Router.patch("/indesponivel/:id", (req, res) => {
    const {id} = req.params

    Escalas.find({_id: id}).then((result) => {
        console.log(result)
}).catch((err) => {
    console.log("erro")
})
})

Router.delete("/delete/:id", (req, res) => {

    const {id} = req.params;

    Escalas.deleteOne({_id: id}).then((result) => {
        return res.status(200).send({
        success: true,
        message: result
    });
}).catch((err) => {
    return res.status(400).send({
        success: false,
        message: err
    });
})
})


module.exports = Router;
