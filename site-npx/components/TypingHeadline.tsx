"use client";

import { useEffect, useState } from "react";

export default function TypingHeadline({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const lines = [
    "Systems That Think",
    "Before",
    "They Act",
  ];

  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      onComplete?.();
      return;
    }

    const currentLine = lines[lineIndex];

    // typing characters
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 40); // typing speed

      return () => clearTimeout(timeout);
    }

    // pause after full line typed
    const pause = setTimeout(() => {
      setVisibleLines((prev) => [...prev, currentLine]);
      setCurrentText("");
      setCharIndex(0);
      setLineIndex(lineIndex + 1);
    }, 500); // pause between lines

    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  return (
    <span className="whitespace-pre-line">
      {visibleLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}

      {lineIndex < lines.length && (
        <div>
          {currentText}
          <span className="opacity-60 animate-pulse">|</span>
        </div>
      )}
    </span>
  );
}