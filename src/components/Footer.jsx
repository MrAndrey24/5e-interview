import React, { useEffect, useState } from 'react';
import '../Styles/Footer.css';

export default function Footer() {
    const [index, setIndex] = useState();
    
    const words = [
        "The members-only top-tier music supervision platform",
        "Coming soon",
        "A hyper-curated sync marketplace with the best labels"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer>
            <div className='carousel-container'>
                <p>
                    {words.map((word, index) => (
                        <span key={index}>
                            {word}
                        </span>
                    ))}
                </p>
            </div>
        </footer>
    );
}
