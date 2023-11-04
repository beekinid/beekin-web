import React from 'react';

const ScrollView = ({ children }) => {
  return (
    <div
      style={{
        overflowY: 'auto', 
        height: 'auto', 
        border: '1px solid #ccc', 
      }}
    >
      {children}
    </div>
  );
};

export default ScrollView;
