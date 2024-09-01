import React, { useEffect, useState } from "react";

// Define a simple utility for conditional class names if needed
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function TypingAnimation({ text, duration = 200, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!isTyping) {
      // When typing is complete, reset to start typing again
      const resetTyping = setTimeout(() => {
        setI(0);
        setDisplayedText("");
        setIsTyping(true);
      }, 1000); // Adjust delay as needed

      return () => clearTimeout(resetTyping);
    }

    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        // Stop typing and prepare for the next loop
        clearInterval(typingEffect);
        setIsTyping(false);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [duration, i, text, isTyping]);

  return (
    <h1
      className={classNames(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}

export default TypingAnimation;
