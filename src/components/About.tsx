import React from 'react';

const About: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-extrabold text-indigo-600 mb-4">About GSale</h2>
      <p className="text-gray-700 text-lg mb-6">
        GSale is your trusted e-commerce platform for finding great products at unbeatable prices.
        Our mission is to make online shopping easy, secure, and enjoyable for everyone.
      </p>

      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Wide selection of products</li>
        <li>Fast and reliable shipping</li>
        <li>Secure payment options</li>
        <li>Friendly customer support</li>
      </ul>
    </section>
  );
};

export default About;