"use client";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsClient(true); // Only runs on client-side
    }, []);

    if (!isClient) {
        return null; // Return nothing while waiting for client-side rendering
    }

    return (
        <div className="py-5 border px-5 md:px-12 lg:px-28">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">Blog App</div>
                <div className="flex items-center">
                    <button
                        onClick={() => router.push("/blogs/create")}
                        className="mr-5 rounded p-2 border shadow flex items-center"
                    >
                        <FaPlus className="mr-2" />
                        New Blog
                    </button>
                    <button className="rounded p-2 border shadow">Latest Blogs</button>
                </div>
            </div>
            <div className="mt-5 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold">Latest Blogs</h1>
                <p className="mt-2">
                    Welcome to the blog app. Here you can find the latest blogs and read
                    them.
                </p>
                <form className="mt-5 flex items-center shadow border rounded">
                    <input
                        required
                        className="rounded p-2"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <button type="submit" className="ml-2 rounded p-2">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Header;
