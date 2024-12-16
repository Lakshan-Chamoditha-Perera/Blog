import { type NextRequest, type NextResponse } from "next/server";
import { connectDB } from "@/lib/config/db";


export async function GET(request: NextRequest) {
    console.log("GET request received");

    return new Response("API response", {
        status: 200,
    });
}

export async function POST(request: NextRequest) {
    console.log("POST request received");

    return new Response("API response", {
        status: 200,
    });
}

export async function PUT(request: NextRequest) {
    console.log("PUT request received");

    return new Response("API response", {
        status: 200,
    });
}


export async function DELETE(request: NextRequest) {
    console.log("DELETE request received");

    return new Response("API response", {
        status: 200,
    });
}