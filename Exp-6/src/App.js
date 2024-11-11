import React, { useState } from 'react';
import ItemForm from './ItemForm';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="container">
      <h1>Inventory List</h1>
      <ItemForm onAddItem={handleAddItem} />
      <div className="item-list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-description">{item.description}</div>
              </div>
              <div className="item-quantity">{item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
