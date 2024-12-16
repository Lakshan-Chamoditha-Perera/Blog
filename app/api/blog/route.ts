import { connectDB } from "@/lib/config/db";
import Blog from "@/lib/models/BlogModel";
import { NextResponse, type NextRequest } from "next/server";

// Ensure database connection is established
const ensureDBConnection = async () => {
    try {
        await connectDB();
        console.log("Database connection successful");
    } catch (error) {
        console.error("Database connection error:", error);
        throw new Error("Failed to connect to database");
    }
};

// GET: Retrieve all blogs
export async function GET(request: NextRequest) {
    try {
        await ensureDBConnection();
        console.log("Fetching all blogs");
        const blogs = await Blog.find({});
        return NextResponse.json({ data: blogs }, { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}

// POST: Create a new blog
export async function POST(request: NextRequest) {
    try {
        await ensureDBConnection();
        const data = await request.json();
        const newBlog = new Blog(data);

        console.log("Creating new blog:", newBlog);
        await newBlog.save();
        return NextResponse.json({ data: newBlog }, { status: 201 });
    } catch (error) {
        console.error("Error creating blog:", error);
        return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
    }
}

// DELETE: Delete a blog by ID
export async function DELETE(request: NextRequest) {
    try {
        await ensureDBConnection();
        const { searchParams } = new URL(request.url);
        const blogId = searchParams.get("id");

        if (!blogId) {
            return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
        }

        console.log(`Deleting blog with ID: ${blogId}`);
        const deletedBlog = await Blog.findByIdAndDelete(blogId);

        if (!deletedBlog) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }

        return NextResponse.json(
            { message: "Blog deleted successfully", data: deletedBlog },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting blog:", error);
        return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
    }
}
