import jwt from "jsonwebtoken";

export class ValidateTokenUser {
    validateToken(req, res, next) {
        if(req.method === "OPTIONS") {
            next()
        }

        try {
            const token = req.headers.authorization.split(" ")[1]

            if(!token) {
                return res.status(401).json({ message: "Вы не авторизированы!" })
            }

            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decoded;
            next();

        } catch(err) {
            res.status(403).json({ message: "Произошла ошибка авторизации" })
        }
    }
}