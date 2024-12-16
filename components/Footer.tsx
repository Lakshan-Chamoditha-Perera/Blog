import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-6 border-t border-gray-300">
            <div className="container flex flex-row justify-between mx-auto px-4">
                {/* Branding */}
                <div
                    className="flex flex-col border-gray-200 pb-4 mb-4"
                >
                    <h2 className="text-xl font-bold">My Blog</h2>
                    <p className="text-sm text-gray-600">
                        Sharing knowledge, one post at a time.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="/about"
                        className="text-gray-600 hover:text-black transition duration-200"
                    >
                        About
                    </a>
                    <a
                        href="/contact"
                        className="text-gray-600 hover:text-black transition duration-200"
                    >
                        Contact
                    </a>
                    <a
                        href="/privacy"
                        className="text-gray-600 hover:text-black transition duration-200"
                    >
                        Privacy Policy
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center text-sm text-gray-600">
                    <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
