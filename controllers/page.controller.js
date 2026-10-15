const buku = [
  { judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005, kategori: 'Novel' },
  { judul: 'Bumi Manusia', penulis: 'Pramoedya Ananta Toer', tahun: 1980, kategori: 'Novel' },
  { judul: 'Dasar-Dasar Jaringan', penulis: 'A. Kurniawan', tahun: 2020, kategori: 'Teknologi' }
];

exports.getBeranda = (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Beranda',
    userName: 'Pengunjung',
    jumlahBuku: buku.length
  });
};

exports.getTentang = (req, res) => {
  res.render('pages/about', { pageTitle: 'Tentang Kami' });
};

exports.getKatalog = (req, res) => {
  res.render('pages/katalog', { pageTitle: 'Katalog Buku', buku });
};

exports.getTambah = (req, res) => {
  res.render('pages/tambah', { pageTitle: 'Tambah Buku' });
};

exports.postTambah = (req, res) => {
  console.log('\n[BACK-END] Menerima Payload POST:');
  console.log(req.body);

  buku.push({
    judul: req.body.judul,
    penulis: req.body.penulis,
    tahun: Number(req.body.tahun),
    kategori: req.body.kategori
  });

  res.redirect('/katalog'); // PRG
};