const express = require('express');
const router = express.Router();
const c = require('../controllers/page.controller');

router.get('/', c.getBeranda);
router.get('/tentang', c.getTentang);
router.get('/katalog', c.getKatalog);
router.get('/tambah', c.getTambah);
router.post('/katalog/tambah', c.postTambah);

module.exports = router;