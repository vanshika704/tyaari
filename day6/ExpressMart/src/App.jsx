import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/fooditems') // API endpoint from your Express server
      .then(response => response.json())
      .then(data => setFoodItems(data))
      .catch(error => console.error('Error fetching food items:', error));
  }, []);

  return (
    <div className="App">
      <h1>Food Items</h1>
      <ul>
        {foodItems.map((item) => (
          <li key={item.id}>
            <h2>{item.productName} {item.image}</h2>
            <p><strong>From:</strong> {item.from}</p>
            <p><strong>Nutrients:</strong> {item.nutrients}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Organic:</strong> {item.organic ? 'Yes' : 'No'}</p>
            <p><strong>Description:</strong> {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
