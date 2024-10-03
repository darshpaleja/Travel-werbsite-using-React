import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="back-to-top" onClick={scrollToTop}>
      <FaArrowUp size={30} color="#fff" />
    </div>
  );
};

export default BackToTopButton;
