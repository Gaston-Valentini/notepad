const validateAuthData = (data, res) => {
    const { email, password } = data;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!email || !password) {
        return res.json({
            success: false,
            message: "La contraseña o el email no son válidos",
        });
    } else if (!emailRegex) {
        return res.json({
            success: false,
            message: "Escriba un formato de correo electrónico",
        });
    } else if (!passwordRegex) {
        return res.json({
            success: false,
            message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y 8 caracteres",
        });
    }
};

export { validateAuthData };
