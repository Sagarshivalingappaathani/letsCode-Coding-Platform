// TypingAnimation.tsx

"use client";
import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  speed: number;
  delay: number;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, speed, delay }) => {
  const [typedText, setTypedText] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      if (isTyping) {
        if (typingIndex < text.length) {
          setTypedText((prevText) => prevText + text[typingIndex]);
          setTypingIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setTypedText('');
            setTypingIndex(0); // Reset typing index
          }, delay);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText((prevText) => prevText.slice(0, -1));
        } else {
          setIsTyping(true);
          setTypingIndex(0); // Reset typing index
        }
      }
    };

    const typingInterval = setInterval(typeText, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed, delay, typingIndex, isTyping]);

  return (
    <span className="orange_gradient text-center">{typedText}</span>
  );
};

export default TypingAnimation;
