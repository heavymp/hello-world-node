import { useEffect } from 'react';
import './Spectre.css';

export default function Spectre() {
  return (
    <div className="container">
      <div className="background-animation"></div>
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>
      <h1 className="glowing-text">
        <span>H</span>
        <span>E</span>
        <span>L</span>
        <span>L</span>
        <span>O</span>
        <span>&nbsp;</span>
        <span>M</span>
        <span>A</span>
        <span>R</span>
        <span>I</span>
        <span>O</span>
      </h1>
    </div>
  );
}
