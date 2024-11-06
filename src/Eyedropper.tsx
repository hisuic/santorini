import React, { useState } from 'react';
import ColorPicker from './ColorPicker.tsx';

// EyeDropper API の型を宣言
declare global {
  interface Window {
    EyeDropper: any;
  }
}

const Eyedropper: React.FC = () => {
  const [color, setColor] = useState<string>("#FFFFFF");

  const handlePickColor = async () => {
    if (!('EyeDropper' in window)) {
      alert('EyeDropper API is not supported in this browser.');
      return;
    }

    const eyeDropper = new window.EyeDropper();
    try {
      const result = await eyeDropper.open();
      setColor(result.sRGBHex);
    } catch (error) {
      console.error('Color selection was canceled.', error);
    }
  };

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <button onClick={handlePickColor}>Pick Color</button>
    </div>
  );
};

export default Eyedropper;

