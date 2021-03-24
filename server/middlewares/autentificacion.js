const jwt = require('jsonwebtoken');

// ===============================
// Verificación Token
// ===============================


let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify( token, process.env.SEED , (err, decode) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no valido'
                }
            });
        }

        req.usuarios = decode.usuario;

        next();
    });

};

module.exports = {
    verificaToken
}