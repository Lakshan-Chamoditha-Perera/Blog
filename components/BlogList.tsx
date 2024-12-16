
"use client";

import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
    const [allItems] = useState([
        {
            id: 1,
            title: "Understanding React Props",
            description:
                "Learn how to use props in React to make your components dynamic and reusable.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "John Doe",
            createdDate: "2024-01-10",
            category: "technology",
        },
        {
            id: 2,
            title: "Mastering Tailwind CSS",
            description:
                "A guide to designing responsive and modern UI using Tailwind CSS.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "Jane Smith",
            createdDate: "2024-02-15",
            category: "technology",
        },
        {
            id: 3,
            title: "Next.js for Beginners",
            description:
                "Get started with Next.js, the React framework for production.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "Alice Johnson",
            createdDate: "2024-03-20",
            category: "technology",
        },
        {
            id: 4,
            title: "JavaScript ES6 Features",
            description:
                "A deep dive into the modern features introduced in ES6 like arrow functions, promises, and destructuring.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "Bob Williams",
            createdDate: "2024-04-05",
            category: "technology",
        },
        {
            id: 5,
            title: "Exploring Bali: A Traveler's Guide",
            description:
                "Discover the beauty of Bali with tips and tricks for the best travel experience.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "Emma Brown",
            createdDate: "2024-05-12",
            category: "travel",
        },
        {
            id: 6,
            title: "10 Must-Try Dishes in Italy",
            description:
                "A food lover's journey through the most delicious dishes Italy has to offer.",
            imageUrl: "https://via.placeholder.com/400x200",
            author: "Liam Davis",
            createdDate: "2024-06-18",
            category: "food",
        },
    ]);

    const [filteredItems, setFilteredItems] = useState(allItems);
    const [activeCategory, setActiveCategory] = useState("all");

    const handleMenuFilter = (category: string) => {
        setActiveCategory(category);
        if (category === "all") {
            setFilteredItems(allItems);
        } else {
            setFilteredItems(allItems.filter((item) => item.category === category));
        }
    };

    return (
        <div className="lg:px-28">

            <div className="flex justify-center gap-6 my-10">
                {["all", "technology", "travel", "food"].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleMenuFilter(category)}
                        className={`py-1 px-4 rounded ${activeCategory === category
                            ? "bg-black text-white"
                            : "bg-gray-200 text-black"
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>

            {/* Blog Items */}
            <div className="flex flex-wrap justify-around gap-y-10 gap-x-2 mb-16">
                {filteredItems.map((item) => (
                    <BlogItem  key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
