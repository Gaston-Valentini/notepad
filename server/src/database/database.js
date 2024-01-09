import { connect } from "mongoose";

const database = async () => {
    try {
        await connect("mongodb+srv://root:oFM3QfYNYegCH5kN@cluster0.dlxlkgm.mongodb.net/notepad");
        console.log(`Connected to database "notepad"`);
    } catch (error) {
        console.error(`An error occurred in the connection to the database: ${error}`);
    }
};

export { database };
