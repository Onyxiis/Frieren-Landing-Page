const gridimages = [
  '04b0d2d86a6ef6cda78864d8343e6194.jpg',
  '08b397c963e3a8e8dc7b1bc7b17931ad.jpg',
  '091472f1ecb725e6ac371faea4ffbebe.jpg',
  '19b72ea30d45419710acbcda837859b9.jpg',
  '24c69f981ddd323fa01ec28a9c087179.jpg',
  '276c2a3a7be20a71315da553323e540d.jpg',
  '29c054c5f4c407769a2017cfddcd8f77.jpg',
  '49e53b186b2d87971d9f8c2d3c2e12a1.jpg',
  '559eff4412cff8d9f2c991ace00ae5d4.jpg',
  '56000c9a4de877988ea1aa07070f99fc.jpg',
  '5b818f4e3af2d9ef54bcd3a29bc88c96.jpg',
  '5c5ed30516d110a41dbb29f709808c27.jpg',
  '682a18b38c41531c339d131bdc07a66e.jpg',
  '6ceec1ec324ccc69d4d12b9709b952c2.jpg',
  '7ed05377f878be6ee63593f5d5e7c565.jpg',
  '8dc2f6fda9f6c1f68fa36671bce31ef6.jpg',
  'a4f602c931c06db0450894706ba19d43.jpg',
  'ade1415852953df7dc3ae8b26e1d26b5.jpg',
  'b2c362af7f9c68c47b8b589db0bf02e7.jpg',
  'c1a9d896e9b39cb6e77322f841941f43.jpg',
  'c75a20d02ab0e34a9bcd5d01fc7eaa24.jpg',
  'cc9633543d19dc6234ec14b02becaba4.jpg',
  'd5d8b90eaff70ac1200dc16e7b5e50af.jpg',
  'd616c6a6004f819c9d0286637338d4f3.jpg',
  'dc3d1544ae7dd28934da2aa6fcb1b7a2.jpg',
  'dc443170bdb08b80667d85485aade862.jpg',
  'ef41e736c2956ad6eb10118971300b29.jpg'
];

const gallery = document.getElementById('grid');

gridimages.forEach(img => {
  const imgEl = document.createElement('img');
  imgEl.src = `imgs/Gallery/${img}`;
  imgEl.alt = 'Frieren gallery image';
  gallery.appendChild(imgEl);
});