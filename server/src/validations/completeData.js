const validateAuthData = (data, res) => {
    const { email, password } = data;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])(?=.{8,})/;

    if (!email || !password || !emailRegex.test(email) || !passwordRegex.test(password)) {
        return res.json({
            success: false,
            message: "La contraseña o el email no son válidos.",
        });
    }
};

export { validateAuthData };
