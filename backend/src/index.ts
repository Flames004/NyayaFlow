const express = require('express') as typeof import('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// The Test Route
app.get('/', (req: import('express').Request, res: import('express').Response) => {
  res.send('NyayaFlow Backend is LIVE and Type-Safe!');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});