let keranjang = ["Buku", "Pensil", "Penghapus"];
console.log("Awal:", keranjang);

keranjang.push("Penggaris");
console.log("Setelah push:", keranjang);

keranjang.unshift("Bolpoin");
console.log("Setelah unshift:", keranjang);

keranjang.pop();
console.log("Setelah pop:", keranjang);

keranjang.shift();
console.log("Setelah shift:", keranjang);

console.log("Isi keranjang:");
for (let i = 0; i < keranjang.length; i++) {
  console.log(`${i + 1}. ${keranjang[i]}`);
}


const produk = [
  { nama: "Beras", harga: 50000 },
  { nama: "Minyak", harga: 20000 }
];

produk.push({ nama: "Gula", harga: 15000 });
console.log("Setelah push produk:");
console.table(produk);

produk.pop();
console.log("Setelah pop produk:");
console.table(produk);

function tambahProduk(nama, harga) {
  produk.push({ nama, harga });
  console.log(`Produk ${nama} ditambahkan.`);
}

function hitungTotal() {
  let total = 0;
  for (let item of produk) {
    total += item.harga;
  }
  return total;
}

tambahProduk("Kopi", 30000);
tambahProduk("Teh", 10000);
console.table(produk);
console.log("Total harga semua produk:", hitungTotal());


if (produk.length > 0) {
  console.log("Produk tersedia");
} else {
  console.log("Produk kosong");
}

let angkaHari = new Date().getDay(); // 0 = Minggu, 1 = Senin, dst.
let namaHari;

switch (angkaHari) {
  case 0: namaHari = "Minggu"; break;
  case 1: namaHari = "Senin"; break;
  case 2: namaHari = "Selasa"; break;
  case 3: namaHari = "Rabu"; break;
  case 4: namaHari = "Kamis"; break;
  case 5: namaHari = "Jumat"; break;
  case 6: namaHari = "Sabtu"; break;
  default: namaHari = "Tidak diketahui";
}

console.log("Hari ini:", namaHari);
