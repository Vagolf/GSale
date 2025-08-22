import React from 'react';


const About: React.FC = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto', padding: '2rem', background: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '1rem' }}>About GSale</h2>
      <p style={{ color: '#444', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        GSale is your trusted e-commerce platform for finding great products at unbeatable prices. Our mission is to make online shopping easy, secure, and enjoyable for everyone.
      </p>
      <ul style={{ color: '#555', fontSize: '1rem', paddingLeft: '1.2rem' }}>
        <li>Wide selection of products</li>
        <li>Fast and reliable shipping</li>
        <li>Secure payment options</li>
        <li>Friendly customer support</li>
      </ul>
    </div>
  );
};

export default About;
