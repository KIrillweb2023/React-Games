import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { User } from "../models/models.js";



const generateJWT = (id, email, nikname) => {
    return jsonwebtoken.sign(
        { id, email, nikname }, 
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
    );
}

export class UserController {
    async registration(req, res) {
        try {
            const {email, nikname, password} = req.body;

            if(!email || !nikname || !password) {
                res.status(400).json("Не все данные были введенны!")
            }

            const candidate = await User.findOne({ where: { email } });

            if(candidate) {
                res.status(400).json("Пользователь с таким email существует!")
            }

            const hashPassword = await bcrypt.hash(password, 5)
            const user = User.create({ email, nikname, password: hashPassword });

            const token = generateJWT(user.id, email, nikname);

            return res.json({ token })
            
        } catch (error) {
            console.log(error)
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email } });
            if(!user) {
                res.json({ message: "Пользователь с такой почтой не найден!" });
            }

            let comparePassword = bcrypt.compareSync(password, user.password);
            if(!comparePassword) {
                res.json({ message: "Возможно вы ввели неверный пароль!" })
            }
            

            const token = generateJWT(user.id, user.email, user.nikname);
            return res.json({ token })
        } catch (error) {
            console.log(error)
        }
    }

    async auth(req, res) {
        try {
            const token = generateJWT(req.user.id, req.user.email, req.user.nikname)   
            return res.json({ token })         
        } catch (error) {
            console.log("Что-то пошло не так!", error)
        }
    }
}

