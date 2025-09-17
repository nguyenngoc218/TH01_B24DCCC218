import React, { useState } from 'react';


function App() {
  const [items, setItems ]= useState([]);
  const [inputValue, setInputValue] = useState("");
  const addValue =() =>{
    if (inputValue.trim() !== "") {
      setItems([...items,{id: Date.now(), text: inputValue}]);
      setInputValue("");
    }
  };
  const deleteValue =(id) =>{
    setItems(items.filter(item => item.id !==id));
  };
  return (
    <div>
      <div>
      <input 
      type ="text"
      value ={inputValue}
      onChange ={(a) => setInputValue(a.target.value)}
      placeholder="Nhập công việc"
      />
      <button onClick={addValue}>Thêm</button>
      </div>
      <ul>
        {items.map((item)=>(
          <li key={item.id}>
            {item.text}
            <button onClick={()=> deleteValue(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>

  );
}

export default App;
