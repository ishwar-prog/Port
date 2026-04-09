import React, { useEffect, useState, useRef } from "react";

const ScrambleText = ({ texts, className }) => {
  const [displayText, setDisplayText] = useState(texts[0]);
  const currentIndexRef = useRef(0);

  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZあいうえおアイウエオカキクケコ的中文字符०१२३४५६७८९अआइईउ";

  useEffect(() => {
    const scrambleText = (targetText) => {
      let iteration = 0;
      const maxIterations = targetText.length * 3;

      const interval = setInterval(() => {
        setDisplayText(() => {
          const result = targetText
            .split("")
            .map((char, index) => {
              if (index < iteration / 3) {
                return targetText[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          return result;
        });

        iteration++;

        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(targetText);
        }
      }, 40);

      return interval;
    };

    const cycleTexts = () => {
      currentIndexRef.current = (currentIndexRef.current + 1) % texts.length;
      scrambleText(texts[currentIndexRef.current]);
    };

    const cycleInterval = setInterval(cycleTexts, 3000);

    return () => {
      clearInterval(cycleInterval);
    };
  }, [texts]);

  return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
