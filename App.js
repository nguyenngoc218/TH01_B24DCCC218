import React, { useState } from 'react';
import ColorBox from './ColorBox'; 

function App() {
  const [mau, setMau] = useState("white");

  return (
    <div style={{ fontFamily: 'Arial, sans-serif'}}>
      <div>
        <ColorBox
          label="Đỏ"
          onClick={() => setMau("red")}
        />
        <ColorBox
          label="Xanh"
          onClick={() => setMau("green")}
        />
        <ColorBox
          label="Vàng"
          onClick={() => setMau("yellow")}
        />
      </div>
      <div 
        style={{
          width: "100px",
          height: "100px",
          border: "2px solid #000",
          backgroundColor: mau,
        }}
      ></div>
    </div>
  );
}

export default App;