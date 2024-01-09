import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const database = async () => {
    try {
        await connect(process.env.DATABASE);
        console.log(`Connected to database "notepad"`);
    } catch (error) {
        console.error(`An error occurred in the connection to the database: ${error}`);
    }
};

export { database };
