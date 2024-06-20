import React, { useEffect, useRef } from "react";
import "../assets/css/textCarousel.css";

interface Props {
  text: string;
}

const TextCarousel: React.FC<Props> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollText = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const animationDuration = (containerWidth + textWidth) / 50; // Adjust speed here

        textRef.current.style.animation = `scroll ${animationDuration}s linear infinite`;
      }
    };

    scrollText();
    window.addEventListener("resize", scrollText);

    return () => window.removeEventListener("resize", scrollText);
  }, [text]);

  const words = text.split(" ").map((word, index) => (
    <span key={index} className="scrolling-word">
      {word}
    </span>
  ));

  return (
    <div className="scrolling-container" ref={containerRef}>
      <div className="scrolling-text" ref={textRef}>
        {words}
        {words} {/* Duplicate for seamless scrolling */}
      </div>
    </div>
  );
};

export default TextCarousel;
