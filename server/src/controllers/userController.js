import { validateAuthData } from "../validations/completeData.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
    try {
        validateAuthData(req.body, res);

        const { username, email, password } = req.body;

        const userFound = await User.findOne({ email });

        if (userFound) {
            return res.json({
                success: false,
                message: "Ya existe un usuario registrado con ese correo electrónico",
            });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);

        const userRegistered = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const token = jwt.sign({ id: userRegistered._id }, process.env.JWT, { expiresIn: "24h" });

        return res.json({
            success: true,
            message: "Usuario registrado correctamente.",
            token,
        });
    } catch (error) {
        return res.json({
            success: false,
            message: `Error en el servidor: ${error}`,
        });
    }
};

export { register };
