import React, { useState } from 'react';

// EyeDropper API の型を宣言
declare global {
  interface Window {
    EyeDropper: any;
  }
}

const Eyedropper: React.FC = () => {
  const [color, setColor] = useState<string | null>(null);

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
    <div>
      <button onClick={handlePickColor}>Pick Color</button>
      {color && (
        <div>
          <p>Selected Color: {color}</p>
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: color,
              border: '1px solid #000',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Eyedropper;

