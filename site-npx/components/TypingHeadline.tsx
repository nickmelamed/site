"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Systems That Think.",
  "Systems That Learn.",
  "Systems That Decide.",
];

export default function TypingHeadline() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (subIndex < phrases[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + phrases[index][subIndex]);
        setSubIndex(subIndex + 1);
      }, 40);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % phrases.length);
      }, 1200);
    }
  }, [subIndex, index]);

  return (
    <span className="text-gradient">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}