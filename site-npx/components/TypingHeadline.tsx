"use client";

import { useEffect, useState } from "react";

export default function TypingHeadline({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const fullText = "Systems That Think";
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(interval);
        setDone(true);

        setTimeout(() => {
          onComplete?.();
        }, 400);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-gradient">
      {text}
      {!done && <span className="opacity-60 animate-pulse">|</span>}
    </span>
  );
}