import style from "./Register.module.css";
import { Link } from "react-router-dom";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Register() {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <h1 className={style.title}>
                    Bienvenido a la página de
                    <br />
                    <span>Registro</span>
                </h1>
                <form className={style.form}>
                    <div className={style.formSection}>
                        <div className={style.formSectionData}>
                            <label>Nombre de usuario</label>
                            <input type="text"></input>
                        </div>
                        <div className={style.formSectionIcon}>
                            <FaUser />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <div className={style.formSectionData}>
                            <label>Correo electrónico</label>
                            <input type="text"></input>
                        </div>
                        <div className={style.formSectionIcon}>
                            <MdEmail />
                        </div>
                    </div>
                    <div className={style.formSection}>
                        <div className={style.formSectionData}>
                            <label>Contraseña</label>
                            <input type="password"></input>
                        </div>
                        <div className={style.formSectionIcon}>
                            <FaKey />
                        </div>
                    </div>
                    <input type="submit" value="Registrarse" />
                </form>
                <div className={style.redirect}>
                    <p>
                        Ya tienes una cuenta? <Link to={"/login"}>Inicia Sesión</Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
