import { useEffect, useState } from 'react';
import './Spectre.css';

const Spectre = () => {
  const [text, setText] = useState('');
  const fullText = 'Hello Mario';

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="spectre-container">
      <div className="spectre-text">{text}</div>
      <div className="cursor"></div>
    </div>
  );
};

export default Spectre;
