const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');
const User = require('./models/user');
const si = require('systeminformation');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Home - list all users
app.get('/', async (req, res) => {
  const users = await User.findAll();
  res.render('index', { users });
});

// Form tambah user
app.get('/add', (req, res) => {
  res.render('form');
});

// Proses tambah user
app.post('/add', async (req, res) => {
  await User.create(req.body);
  res.redirect('/');
});

// Form edit user
app.get('/edit/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.render('edit', { user });
});

// Proses update user
app.post('/edit/:id', async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.redirect('/');
});

// Hapus user
app.get('/delete/:id', async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.redirect('/');
});

// System Monitor Page
app.get('/system', (req, res) => {
  res.render('system');
});

// API System Data
app.get('/api/system', async (req, res) => {
  try {
    const cpuLoad = await si.currentLoad();
    const mem = await si.mem();
    const fsSize = await si.fsSize();
    const osInfo = await si.osInfo();
    
    const disk = fsSize.length > 0 ? fsSize[0] : { use: 0, used: 0, size: 0 };
    
    res.json({
      cpu: cpuLoad.currentLoad.toFixed(1),
      mem: {
        used: (mem.active / (1024 ** 3)).toFixed(2),
        total: (mem.total / (1024 ** 3)).toFixed(2),
        percent: ((mem.active / mem.total) * 100).toFixed(1)
      },
      disk: {
        used: (disk.used / (1024 ** 3)).toFixed(2),
        total: (disk.size / (1024 ** 3)).toFixed(2),
        percent: disk.use.toFixed(1)
      },
      os: `${osInfo.distro} ${osInfo.release}`
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('App running at http://localhost:3000');
  });
});