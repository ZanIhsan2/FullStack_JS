const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { validateRegister, validateLogin } = require('../utils/authValidator');
const errorHandler = require('../utils/errorHandler');

class AuthController {
    // Register
    register(req, res) {
        const data = req.body;

        const error = validateRegister(data);
        if(error) {
            return errorHandler(res, 400, error);
        }

        User.findByEmail(data.email, async (err, results) => {
            if(err) {
                return errorHandler(res, err);
            }
            if(results.length > 0){
                return errorHandler(res, "Email sudah ada", 400, "Email sudah terdaftar");
            }

            const hashed = await bcrypt.hash(data.password, 10);

            const user = {
                email: data.email,
                password: hashed,
                role: data.role || "user"
            };

            User.create(user, (err) => {
                if(err) {
                    return errorHandler(res, err);
                }

                res.status(201).json({
                    success: true,
                    message: "Register Berhasil"
                });
            });
        });
    }

    // Login 
    login(req, res){
        const data = req.body;

        const error = validateLogin(data);
        if(error){
            return errorHandler(res, error, 400, error);
        }

        User.findByEmail(data.email, async (err, results) => {
            if(err) {
                return errorHandler(res, err);
            }

            if(results.length === 0){
                return errorHandler(res, "Not Found", 404, "User tidak ditemukan");
            }

            const user = results[0];

            const match = await bcrypt.compare(data.password, user.password);
            if(!match){
                return errorHandler(res, "Password Salah", 400, "Login Gagal");
            }

            const token = jwt.sign(
                {
                    id: user.user_id,
                    role: user.role
                },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );

            res.json({
                succes: true,
                message: "Login Berhasil",
                token
            });
        });
    }
}

module.exports = new AuthController();