import { useState } from 'react'

interface ColorPickerProps {
  color : string;
  setColor : React.Dispatch<React.SetStateAction<string>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({color, setColor}) => {

  function handleColorChange(event:React.ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color}}>
        <p>Selected Color: {color}</p>
      </div>
      <label>Select a Color:</label>
      <input type="color" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
