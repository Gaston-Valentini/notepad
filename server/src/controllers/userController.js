import { validateAuthData } from "../validations/vieldValidation.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
    try {
        const validation = validateAuthData(req.body);

        if (validation.success === false) {
            return res.json({
                success: false,
                message: validation.message,
            });
        }

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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.json({
                success: false,
                message: "Email o contraseña inválidos",
            });
        }

        const unhashedPassword = bcrypt.compareSync(password, userFound.password);

        if (!unhashedPassword) {
            return res.json({
                success: false,
                message: "Email o contraseña inválidos",
            });
        }

        const token = jwt.sign({ id: userFound._id }, process.env.JWT, { expiresIn: "24h" });

        return res.json({
            success: true,
            message: "Usuario autenticado correctamente.",
            token,
        });
    } catch (error) {
        return res.json({
            success: false,
            message: `Error en el servidor: ${error}`,
        });
    }
};

export { register, login };
