import { database } from "./database/database.js";
import { app } from "./app/app.js";

const startApp = async () => {
    try {
        await database();
        app.listen(3000, () => {
            console.log(`Server listening on port 3000`);
        });
    } catch (error) {
        console.error(`An error occurred during server initialization: ${error}`);
    }
};

startApp();
