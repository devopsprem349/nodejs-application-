const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Node.js Docker App!hello docker ',
    status: 'success'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP'
  });
});

app.get('/api/users', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Jane'
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
