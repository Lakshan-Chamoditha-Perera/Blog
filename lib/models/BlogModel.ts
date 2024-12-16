import mongoose, { Document, Schema } from "mongoose";

// TypeScript interface for the Blog document
export interface IBlog extends Document {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    category: string;
}

// Mongoose schema definition
const BlogSchema: Schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Blog = mongoose.model<IBlog>("blog", BlogSchema);
export default Blog;
