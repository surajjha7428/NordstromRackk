import React, { useState, useEffect } from 'react';
import "../components/SliderOne.css";

function SliderOne() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      "https://n.nordstrommedia.com/it/2af10d39-f430-4755-afa3-0ea4ffb5b2af.gif?h=720&w=1608",
      "https://n.nordstrommedia.com/it/30d45e52-8f77-4059-b4fa-a9375c353774.jpeg?h=720&w=1608",
      "https://n.nordstrommedia.com/it/13bde6b9-d86d-4c15-a971-5e30bbc9ad1b.jpeg?h=720&w=1608",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); 

        return () => clearInterval(interval); 
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="sliderOne">
            <button onClick={prevSlide}>&#10094;</button>
            <img src={images[currentIndex]} alt={`slider-img-${currentIndex + 1}`} />
            <button onClick={nextSlide}>&#10095;</button>
        </div>
    );
}

export default SliderOne;
