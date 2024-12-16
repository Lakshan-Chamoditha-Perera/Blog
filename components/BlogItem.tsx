"use client";
import Link from "next/link";
import React from "react";

interface BlogItemProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  category: string; // Added category
}

const BlogItem: React.FC<BlogItemProps> = ({
  id,
  imageUrl,
  title,
  description,
  category,
}) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border hover:shadow-lg transition duration-300 ease-in-out rounded-lg">
      <div key={id} className="p-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 object-cover rounded-lg"
        />
        <div className="mt-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-xs text-blue-500 mt-1 uppercase">
            {category}
          </p>{" "}
          {/* Display category */}
        </div>
      </div>
      <Link
        href={`/blogs/${id}`}
        className="px-4 underline text-blue-500 cursor-pointer hover:text-blue-700 pb-4">
        read more
      </Link>
    </div>
  );
};

export default BlogItem;
