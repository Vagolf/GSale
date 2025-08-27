import React from 'react';

const Contact: React.FC = () => {
    return (
        <section className="max-w-xl mx-auto my-8 p-8 border border-gray-200 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-100 shadow-lg">
            <h2 className="text-center text-blue-500 mb-6 font-semibold font-sans tracking-wide text-2xl">
                Contact Us
            </h2>
            <form>
                <div className="mb-5">
                    <label htmlFor="name" className="font-medium text-gray-700">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full mt-1 p-3 rounded-lg border border-slate-300 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="font-medium text-gray-700">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full mt-1 p-3 rounded-lg border border-slate-300 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="message" className="font-medium text-gray-700">Message:</label><br />
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full mt-1 p-3 rounded-lg border border-slate-300 text-base bg-white resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                </div>
                <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold text-base shadow-md hover:from-blue-600 hover:to-indigo-600 transition"
                >
                    Send
                </button>
            </form>
        </section>
    );
};

export default Contact;
