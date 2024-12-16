"use client";
import { Blogs } from "@/assets/db"; // Importing the mock data
import React, { useEffect, useState } from "react";

interface BlogDetailsProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
    createdDate: string;
    category: string;
}

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
    const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

    // Unwrap the params Promise and set the resolved value
    useEffect(() => {
        const resolveParams = async () => {
            const resolved = await params;
            setResolvedParams(resolved);
        };

        resolveParams();
    }, [params]);

    const [blogDetails, setBlogDetails] = useState<BlogDetailsProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!resolvedParams) return;

        const fetchBlogDetails = () => {
            try {
                // Convert string id from params to a number for comparison
                const blog = Blogs.find((blog) => blog.id === parseInt(resolvedParams.id));
                if (blog) {
                    setBlogDetails(blog);
                } else {
                    setError("Blog not found.");
                }
            } catch (err) {
                setError("Failed to load blog details.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [resolvedParams]);

    // Loading state
    if (loading) {
        return <div>Loading...</div>;
    }

    // Error handling
    if (error) {
        return <div>{error}</div>;
    }

    // Render the blog details
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white text-black">
            {/* Blog Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{blogDetails?.title}</h1>
                <div className="text-sm text-gray-600">
                    <span>
                        By <strong>{blogDetails?.author}</strong>
                    </span>{" "}
                    <span className="capitalize">{blogDetails?.category}</span>
                </div>
            </div>

            {/* Blog Image */}
            <div className="mb-6">
                <img
                    src={blogDetails?.imageUrl}
                    alt={blogDetails?.title}
                    className="w-full h-auto rounded-lg shadow-md"
                />
            </div>

            {/* Blog Description */}
            <div>
                <p className="text-lg leading-relaxed">{blogDetails?.description}</p>
            </div>

            {/* share this on social media */}
            <div className="mt-6">
                <p className="text-lg leading-relaxed">Share this on social media</p>
                <div className="flex gap-4">
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500 "
                    >
                        Facebook
                    </a>
                    <a
                        href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500"
                    >
                        Twitter
                    </a>
                    <a
                        href={`https://www.linkedin.com/shareArticle?url=${window.location.href}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-500"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Page;
