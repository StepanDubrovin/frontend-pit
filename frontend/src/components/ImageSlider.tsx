import { useState } from 'react';
import './ImageSlider.css';

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
  '/images/image7.jpg',
  '/images/image8.jpg',
];

const ImageSlider = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (i: number) => {
    setIndex(i);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div className="slide fade" key={i}>
            <img src={src} alt={`slide-${i}`} className="slide-image" />
          </div>
        ))}
      </div>

      <button className="nav left" onClick={prevSlide}>❮</button>
      <button className="nav right" onClick={nextSlide}>❯</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
