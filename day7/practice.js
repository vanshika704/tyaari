const express = require('express');
const app = express();
const port = 3000;

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Sample data to simulate a database
let items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
  { id: 3, name: 'Item Three' }
];

// **Read (GET) all items**
app.get('/api/items', (req, res) => {
  res.json(items);
});

// **Read (GET) a single item by ID**
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json(item);
});

// **Create (POST) a new item**
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1, // Simple way to generate unique IDs
    name: req.body.name
  };

  items.push(newItem);
  res.status(201).json(newItem); // 201 Created
});

// **Update (PUT) an item by ID**
app.put('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = items.find((i) => i.id === itemId);

  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }

  item.name = req.body.name; // Update the item name
  res.json(item);
});

// **Delete (DELETE) an item by ID**
app.delete('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((i) => i.id === itemId);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  items.splice(itemIndex, 1); // Remove the item from the array
  res.json({ message: 'Item deleted successfully' });
});

// **Start the server**
app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
