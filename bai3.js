// BÀI 3 : CHỌN SẢN PHẨM VÀ GIỎ HÀNG

import React, { useState } from 'react';

function App() {
  const [products] = useState([
    { id: 1, name: 'Sách', price: 10000 },
    { id: 2, name: 'Bút', price: 5000 },
    { id: 3, name: 'Vở', price: 7000 },
  ]);
  const [item, setItem] = useState([]);

  const addItem = (product) => {
    setItem((a) => [...a, product]);
  };
  const sum = item.reduce((total, product) => total + product.price, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px'}}>
      <h1>Bài 3: Giỏ hàng</h1>
      <div style={{ backgroundColor: '#fff', padding: '20px'}}>
        <h2>Sản phẩm</h2>
        {products.map((product) => (
          <div key={product.id} style={{  marginBottom: '10px', padding: '10px'}}>
            <span>{product.name} - {product.price.toLocaleString()}đ</span>
            <button 
              onClick={() => addItem(product)} 
              style={{ padding: '8px 12px', backgroundColor: 'white', color: 'black' }}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: '#fff', padding: '20px'}}>
        <h2>Giỏ hàng</h2>
        {item.length === 0 ? (
          <p>Tổng tiền 0đ</p>
        ) : (
          <ul >
            {item.map((product, index) => (
              <li key={index} style={{ padding: '10px', marginBottom: '8px'}}>
                {product.name} - {product.price.toLocaleString()} đ
              </li>
            ))}
          </ul>
        )}
        <h3 style={{ paddingTop: '10px', marginTop: '20px' }}>
          Tổng tiền: {sum.toLocaleString()} đ
        </h3>
      </div>
    </div>
  );
}

export default App;


