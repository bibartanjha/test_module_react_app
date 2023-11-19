// ButtonWithBorder.tsx
import React, { useState } from 'react';


const ButtonWithBorder: React.FC = () => {
  const [borderVisible, setBorderVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('purple');

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
    <div
      style={{ position: 'relative', display: 'inline-block', marginRight: '20px'}}
      onMouseEnter={() => setBorderVisible(true)}
      onMouseLeave={() => setBorderVisible(false)}
    >
    <button id="buttonThatHasBorder" style={{
        border: borderVisible ? `5px solid ${selectedColor}` : 'none',
    }}>Hover me</button>
    </div>
    <select id="colorPicker" onChange={handleColorChange} value={selectedColor}>
      <option value="purple">Purple</option>
      <option value="blue">Blue</option>
      <option value="green">Green</option>
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
      <option value="orange">Orange</option>
    </select>
    </div>
  );
};

export { ButtonWithBorder };
