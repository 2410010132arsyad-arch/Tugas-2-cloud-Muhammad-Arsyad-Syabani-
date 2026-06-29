const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// API Routes
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Halo dari Docker Container!',
    timestamp: new Date().toISOString(),
    host: process.env.HOSTNAME || 'localhost',
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'Tugas 2 Cloud',
    author: 'Nama Mahasiswa',
    npm: '123456789',
    node_version: process.version,
    platform: process.platform,
    uptime: `${Math.floor(process.uptime())} detik`,
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
