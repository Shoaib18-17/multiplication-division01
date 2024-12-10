// Import the Express package
const express = require('express');

// Create a new Express app
const app = express();

// Define a route for multiplication
app.get('/multiply', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide two numbers.');
  } else {
    const result = num1 * num2;
    res.send(`The result of multiplying ${num1} and ${num2} is ${result}.`);
  }
});

// Define a route for division
app.get('/divide', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid input. Please provide two numbers.');
  } else if (num2 === 0) {
    res.status(400).send('Cannot divide by zero.');
  } else {
    const result = num1 / num2;
    res.send(`The result of dividing ${num1} by ${num2} is ${result}.`);
  }
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});