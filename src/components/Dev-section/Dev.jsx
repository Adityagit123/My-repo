import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slides, setSlides] = useState([
    {
      image: "https://picsum.photos/200/300",
      title: "Be a Confident Speaker",
      content: "Never Hesitate again before Speaking in English",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Learn & Master English Speaking with us",
      content: "Never worry again about Incorrect Grammar, Pronounciation, Sentence Structure or Word Recall",
    },
    {
      image: "https://picsum.photos/200/300",
      title: "Embrace the best version of your personality with us",
      content: "Never allow English to Limit You from Expression your True Personality & Assert Your Talents",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlideIndex + 1) % slides.length;
      setCurrentSlideIndex(nextSlideIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides, currentSlideIndex]);

  const handlePreviousSlide = () => {
    setCurrentSlideIndex((currentSlideIndex - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((currentSlideIndex + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${index === currentSlideIndex ? "active" : ""}`}>
            <img src={slide.image} alt={slide.title} />
            <h2>{slide.title}</h2>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      {/* <div className="carousel-controls">
        <button onClick={handlePreviousSlide}>Previous</button>
        <button onClick={handleNextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default Carousel;

