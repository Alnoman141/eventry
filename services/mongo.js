import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined in environment variables");
        }

        const connection = await mongoose.connect(mongoURI);

        console.log("Connected to MongoDB:", connection.connection.host);

        return connection;

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}