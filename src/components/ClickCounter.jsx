import React from 'react';

const ClickCounter = ({ value, isOpen, updateClicks, updateIsOpen }) => {
  return (
    <div>
      <button onClick={updateClicks}>Current: {value}</button>
      <button onClick={updateIsOpen}>{isOpen ? 'Hide' : 'Open'}</button>
    </div>
  );
};

export default ClickCounter;
