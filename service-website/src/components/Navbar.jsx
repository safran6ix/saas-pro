import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-indigo-600">ServicePro</span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
                        <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
                        <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
                        <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white px-2 pt-2 pb-3 space-y-1">
                    <a href="#home" className="block px-3 py-2 text-gray-700">Home</a>
                    <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
                    <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
                    <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
                </div>
            )}
        </nav>
    );
}