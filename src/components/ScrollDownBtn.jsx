import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export default function ScrollDownButton() {
  const [isJumping, setIsJumping] = useState(false);

  const handleScroll = () => {
    const projectsSection = document.getElementById('projects');

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const startJumpAnimation = () => {
    setIsJumping(true);

    // Stop the animation after a short delay
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  return (
    <div
      onClick={() => {
        handleScroll();
        startJumpAnimation();
      }}
      className={`jump-icon ${isJumping ? 'animate__animated animate__bounce' : ''}`}
    >
      <FontAwesomeIcon icon={faAnglesDown} size="2xl" />
    </div>
  );
};