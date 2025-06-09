import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../models/models.js";



const generateJWT = (email, nikname) => {
    return jsonwebtoken.sign(
        { email, nikname }, process.env.SECRET_KEY,
        {
            expiresIn: "1h"
        }
    );
}

export class UserController {
    async registration(req, res) {
        try {
            const {email, nikname, password} = req.body;

            if(!email || !nikname || !password) {
                res.status(400).json("Введенны не все поля!")
            }

            const candidate = await User.findOne({ where: { email } });
            if(candidate) {
                res.status(400).json("Пользователь с таким email существует!")
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = User.create({ email, nikname, password: hashPassword });

            const token = generateJWT(email, nikname);

            return res.json({ token })
            
        } catch (error) {
            console.log(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, nikname, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if(!user) {
                res.json("Пользователь не найден!");
            }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if(!comparePassword) {
                res.json("Пароль неверный")
            }
            

            const token = generateJWT(user.email, user.nikname);
            return res.json({ token })
        } catch (error) {
            console.log(error)
        }
    }

    async auth(req, res) {
        try {
            const token = generateJWT(req.user.email, req.user.nikname)   
            return res.json({ token })         
        } catch (error) {
            console.log(error)
        }
    }
}

