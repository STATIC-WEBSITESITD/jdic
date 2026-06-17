import { useEffect, useState } from 'react';

export default function useTypewriter(phrases, { typeSpeed = 60, deleteSpeed = 30, pause = 2000 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!phrases.length) return undefined;

    let phraseIndex = 0;
    let charIndex = 0;
    let isAdding = true;
    let timerId;

    const tick = () => {
      const current = phrases[phraseIndex];
      setText(current.slice(0, charIndex));

      if (isAdding) {
        if (charIndex >= current.length) {
          isAdding = false;
          timerId = setTimeout(tick, pause);
          return;
        }
        charIndex += 1;
        timerId = setTimeout(tick, typeSpeed);
        return;
      }

      if (charIndex === 0) {
        isAdding = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        timerId = setTimeout(tick, typeSpeed);
        return;
      }

      charIndex -= 1;
      timerId = setTimeout(tick, deleteSpeed);
    };

    tick();
    return () => clearTimeout(timerId);
  }, [phrases, typeSpeed, deleteSpeed, pause]);

  return text;
}
