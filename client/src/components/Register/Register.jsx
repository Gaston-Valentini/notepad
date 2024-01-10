import style from "./Register.module.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Register() {
    return (
        <section className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.card}>
                <h1 className={style.cardTitle}>Registro</h1>
                <form className={style.cardForm}>
                    <div className={style.cardFormSection}>
                        <div className={style.cardFormSectionIcon}>
                            <FaUser className={style.icon} />
                        </div>
                        <input className={style.cardFormSectionInput} type="text" placeholder="Usuario..." name="username" />
                    </div>
                    <div className={style.cardFormSection}>
                        <div className={style.cardFormSectionIcon}>
                            <MdEmail className={style.icon} />
                        </div>
                        <input className={style.cardFormSectionInput} type="text" placeholder="Correo..." name="email" />
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
