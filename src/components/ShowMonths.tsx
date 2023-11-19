import React, { useState } from 'react';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const ShowMonths: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const nextStep = () => {
    setCurrentMonth((prev) => Math.min(prev + 1, months.length - 1));
  };

  const prevStep = () => {
    setCurrentMonth((prev) => Math.max(prev - 1, 0));
  };

  const startTheYearOver = () => {
    setCurrentMonth((prev) => 0);
  };

  return (
    <div>

      <button onClick={prevStep} disabled={currentMonth === 0}>Previous</button>
      <button onClick={nextStep} disabled={currentMonth === months.length - 1}>Next</button>
      {currentMonth === months.length - 1 &&
        <button onClick={startTheYearOver}>Start the Year Over</button>
      }
      <div style={{display: 'inline-block', marginLeft: '10px'}}>Current Month: {months[currentMonth]}</div>
    </div>
  );
};

export { ShowMonths };
