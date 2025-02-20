import { useEffect, useState } from 'react';
import './Spectre.css';

const Spectre = () => {
  const [text, setText] = useState('');
  const fullText = 'HELLO MARIO';

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
    <div className="container">
      <div className="background-animation"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <h1 className="glowing-text">
        {text.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
    </div>
  );
};

export default Spectre;
