import { validateAuthData } from "../validations/completeData.js";

const register = (req, res) => {
    validateAuthData(req.body, res);
};

export { register };
