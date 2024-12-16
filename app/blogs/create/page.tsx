"use client";
import React, { useState } from "react";
import { Blogs } from "@/assets/db"; // Assuming the mock DB

interface BlogFormData {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  createdDate: string;
  category: string;
}

const CreateBlog = () => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    description: "",
    imageUrl: "",
    author: "",
    createdDate: new Date().toISOString(),
    category: "technology", // Default category
  });

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.title ||
      !formData.description ||
      !formData.imageUrl ||
      !formData.author
    ) {
      setError("All fields are required.");
      return;
    }

    setError(null); // Clear any previous errors

    // Create new blog entry
    const newBlog = {
      ...formData,
      id: Blogs.length + 1, // New ID based on current blogs length
    };

    // Save to mock DB
    Blogs.push(newBlog);
    setSuccessMessage("Blog created successfully!");

    // Reset form data
    setFormData({
      title: "",
      description: "",
      imageUrl: "",
      author: "",
      createdDate: new Date().toISOString(),
      category: "technology",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white text-black">
      <h1 className="text-3xl font-bold mb-6">Create a New Blog</h1>

      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Success Message */}
      {successMessage && (
        <div className="text-green-500 mb-4">{successMessage}</div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium mb-2"
          >
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog description"
          />
        </div>

        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog image URL"
          />
        </div>

        <div>
          <label htmlFor="author" className="block text-sm font-medium mb-2">
            Author
          </label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter author's name"
          />
        </div>

        {/* <div>
          <label htmlFor="category" className="block text-sm font-medium mb-2">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="technology">Technology</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
          </select>
        </div> */}

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
