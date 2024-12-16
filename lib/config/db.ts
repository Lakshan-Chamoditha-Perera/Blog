import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://pereraalc2000:FibUL2NOqrIQIZPk@blog.v6dod.mongodb.net/blog");
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Error connecting to MongoDB: ", error);
    }
};