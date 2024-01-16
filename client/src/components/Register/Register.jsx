import style from "./Register.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:3000/auth/register", data);
        if (res.data.success === false) {
            setMessage(res.data.message);
            setTimeout(() => {
                setMessage("");
            }, 5000);
        } else {
        }
    };

    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.card}>
                <h1 className={style.cardTitle}>Registro</h1>
                <form className={style.cardForm} onSubmit={handleSubmit}>
                    <label className={style.cardFormMessage}>{message}</label>
                    <div className={style.cardFormSection}>
                        <div className={style.cardFormSectionIcon}>
                            <FaUser className={style.icon} />
                        </div>
                        <input
                            className={style.cardFormSectionInput}
                            type="text"
                            placeholder="Usuario..."
                            name="username"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.cardFormSection}>
                        <div className={style.cardFormSectionIcon}>
                            <MdEmail className={style.icon} />
                        </div>
                        <input
                            className={style.cardFormSectionInput}
                            type="text"
                            placeholder="Correo..."
                            name="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className={style.cardFormSection}>
                        <div className={style.cardFormSectionIcon}>
                            <FaKey className={style.icon} />
                        </div>
                        <input
                            className={style.cardFormSectionInput}
                            type="password"
                            placeholder="Contraseña..."
                            name="password"
                            onChange={handleChange}
                        />
                    </div>
                    <input className={style.cardFormSubmit} type="submit" value="Registrarse" />
                </form>
                <p className={style.cardRedirect}>
                    Ya tienes una cuenta? <Link to={"/login"}>Inicia Sesión</Link>
                </p>
            </div>
        </section>
    );
}
