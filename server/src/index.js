import { database } from "./database/database.js";
import { app } from "./app/app.js";
import dotenv from "dotenv";
dotenv.config();

const startApp = async () => {
    try {
        await database();
        app.listen(3000, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error(`An error occurred during server initialization: ${error}`);
    }
};

startApp();
