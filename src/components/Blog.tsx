import React, { useState } from 'react';
import { newsPosts } from './News';

const Blog: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const handleReadMore = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section>
            <h2>Blog News</h2>
            <ul>
                {newsPosts.map(post => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <small>{post.date}</small>
                        <p>{post.summary}</p>
                        <button onClick={() => handleReadMore(post.id)}>
                            {openId === post.id ? 'Hide details' : 'Read more'}
                        </button>
                        {openId === post.id && (
                            <div>
                                <p>{post.details}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Blog;