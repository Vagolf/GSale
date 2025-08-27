import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo (left) */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/img/pf.jpg" alt="GSale logo" className="h-8 w-8 rounded-full object-cover" />
                        <span className="font-semibold text-lg">GSale</span>
                    </Link>

                    {/* Desktop links (right) */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
                        <Link to="/shop" className="hover:text-blue-400 transition-colors">Shop</Link>
                        <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
                        <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
                        <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setOpen(!open)}
                            aria-expanded={open}
                            aria-label="Toggle navigation"
                            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {open ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu (right) */}
            {open && (
                <div className="md:hidden">
                    <div className="px-4 pb-4 space-y-2 bg-gray-800 border-t border-gray-700">
                        <Link to="/" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-700">Home</Link>
                        <Link to="/shop" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-700">Shop</Link>
                        <Link to="/blog" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-700">Blog</Link>
                        <Link to="/about" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-700">About</Link>
                        <Link to="/contact" onClick={() => setOpen(false)} className="block px-2 py-2 rounded hover:bg-gray-700">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;