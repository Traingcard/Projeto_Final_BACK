const Router = require("express").Router();
const User = require("../Models/Users");


Router.get("/", (req, res) => {

    User.find().then((result) => {
        if (result.length < 1 ) {
            return res.status(403).send({
                success: false,
                message: "Não foi possível encontrar os Funcionários"
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


Router.post("/add", (req, res) => {
    const user = req.body;

    console.log(user);

    if (!user) {
        return res.status(403).send({
            success: false,
            message: "User não adas"
        })
    }

    User.create(user).then((result) => {
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
    const user = req.body;
    const {id} = req.params;

    if (user == [] ) {
        return res.status(403).send({
            success: false,
            message: "User não adas"
        })
    }

    User.updateOne({_id: user._id}, user).then((result) => {
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

Router.delete("/delete/:id", (req, res) => {

    const {id} = req.params;

    User.deleteOne({_id: id}).then((result) => {
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