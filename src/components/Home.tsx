import React from 'react';


const Home: React.FC = () => {
  return (
    <div style={{ maxWidth: '900px', margin: '2rem auto', padding: '2rem', background: '#f8f9fa', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <h2 style={{ color: '#2d2d2d', fontSize: '2.2rem', marginBottom: '1rem' }}>Welcome to GSale!</h2>
      <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '2rem' }}>
        Discover amazing deals and shop the latest products in our e-commerce store.
      </p>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 4px rgba(0,0,0,0.07)', padding: '1rem', width: '220px', textAlign: 'center' }}>
          <img src="https://via.placeholder.com/150" alt="Product" style={{ width: '100%', borderRadius: '6px' }} />
          <h3 style={{ margin: '1rem 0 0.5rem', fontSize: '1.1rem' }}>Product Name</h3>
          <p style={{ color: '#888', marginBottom: '0.5rem' }}>$29.99</p>
          <button style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '0.5rem 1rem', cursor: 'pointer' }}>Add to Cart</button>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

export default Home;
