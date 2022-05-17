const Router = require("express").Router();
const User = require("../Models/Users");
const jwt = require('jsonwebtoken');
const config = require('../config');

Router.post("/", (req, res) => {
    const { num_user, password_user } = req.body;

    console.log(req.body)
    if (!num_user) {
        return res.status(403).send({
            success: false,
            message: "User não existe"
        })
    }

    if (!password_user) {
        return res.status(403).send({
            success: false,
            message: "Password não da"
        })
    }
console.log(req.body)
    return User.find({ num_user, password_user}).then((result) => {

        if (result.length != 1) {
            return res.status(403).send({
                success: false,
                message: "User não encontrado!"
            })
        }

        console.log(result);

        const token = jwt.sign({ num_user }, config.jsonPass, {
            expiresIn: '12h'
        });

        return res.status(200).send({
            success: true,
            message: "Login efetuado com sucesso!",
            token,
            user: result[0]
        })
    })
});

Router.get('/verify-token', (req, res) => {
    const Token = req.headers['x-access-token'] || null;

    if (!Token) {
        return res.status(400).send({
            success: false,
            message: "Sem Token."
        });
    }

    jwt.verify(Token, config.jsonPass, (err, element) => {
        if (err) {
            return res.status(400).send({
                success: false,
                message: "Erro no Token."
            });
        }
        console.log(element.num_user)
        User.find({ num_user: element.num_user }).then((result) => {
            if (result.length != 1) {
                
                return res.status(403).send({
                    success: false,
                    message: "User não encontrado1!"
                })
            }
            return res.status(200).send({
                success: true,
                message: "OK",
                user: result[0]
            });
        }).catch((err) => {
            return res.status(400).send({
                success: false,
                message: "Erro no User."
            });
        });
    });

})

module.exports = Router;
