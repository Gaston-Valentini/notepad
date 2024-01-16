const validateAuthData = (data) => {
    const { email, password } = data;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

    if (!email || !password) {
        return {
            success: false,
            message: "Complete los campos obligatorios",
        };
    }

    if (!emailRegex) {
        return {
            success: false,
            message: "Escriba un formato de correo electrónico",
        };
    }

    if (!passwordRegex) {
        return {
            success: false,
            message: "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y 8 caracteres",
        };
    }

    return {
        success: true,
    };
};

export { validateAuthData };
