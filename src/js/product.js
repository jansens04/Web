const datas = [
  {
    id: 0,
    title_product: 'ROG Ally',
    price: 200,
    img_product: './src/assets/img/allProduct/b5.jpg',
    desc_product: 'ROG Ally adalah konsol game mutakhir yang menggabungkan desain ergonomis dengan performa tinggi,',
  },
  {
    id: 1,
    title_product: 'Console PS 5',
    price: 200,
    img_product: './src/assets/img/allProduct/b3.jpg',
    desc_product: 'Console PS 5 adalah Stik PS 5 terbaru yang sudah support penggunaan Wirelless,',
  },
  {
    id: 2,
    title_product: 'Zenith Wear',
    price: 95,
    img_product: './src/assets/img/allProduct/p7.jpg',
    desc_product: 'ZenithApparel menghadirkan koleksi pakaian dengan fokus pada kualitas dan gaya yang dapat disesuaikan dengan berbagai kesempatan.',
  },
  {
    id: 3,
    title_product: 'ByteSync',
    price: 45,
    img_product: './src/assets/img/allProduct/t1.jpg',
    desc_product: 'Sinkronisasi data dengan mudah dan cepat. Solusi hemat waktu untuk memenuhi kebutuhan penyimpanan dan transfer data Anda..',
  },
  {
    id: 4,
    title_product: 'SonicSurge',
    price: 210,
    img_product: './src/assets/img/allProduct/t5.jpg',
    desc_product: 'Kualitas audio premium dan desain ergonomis, sempurna untuk gaya hidup aktif Anda.',
  },
  {
    id: 5,
    title_product: 'PulseWave',
    price: 35,
    img_product: './src/assets/img/allProduct/t2.jpg',
    desc_product: 'Desain ergonomis dengan performa audio tinggi untuk momen mendengarkan yang memikat.',
  },
  {
    id: 6,
    title_product: 'Tetris',
    price: 283,
    img_product: './src/assets/img/allProduct/t7.jpg',
    desc_product: 'Tetris adalah salah satu alat langka yang bertujuan untuk berkomunikasi antar sesama manusia.',
  },
  {
    id: 7,
    title_product: 'Diary Book',
    price: 32,
    img_product: './src/assets/img/allProduct/ps8.jpg',
    desc_product: 'Diary Book adalah alat penting untuk merekam momen harian dan merenungkan pengalaman hidup.',
  },
  {
    id: 8,
    title_product: 'Cartier ',
    price: 885,
    img_product: './src/assets/img/allProduct/pp3.jpg',
    desc_product: 'Merek yang legendaris dalam dunia perhiasan, cincin Cartier menonjolkan keanggunan dan keindahan abadi dengan desain yang ikonik dan detail yang sempurna.',
  },
  {
    id: 9,
    title_product: 'Tiffany & Co',
    price: 980,
    img_product: './src/assets/img/allProduct/pp1.jpg',
    desc_product: 'Keharmonisan sempurna antara keanggunan klasik dan inovasi modern, cincin Tiffany & Co. menawarkan kemewahan yang abadi dengan kehalusan tangan terampil.',
  },
  {
    id: 10,
    title_product: 'Bvlgari',
    price: 1300,
    img_product: './src/assets/img/allProduct/pp5.jpg',
    desc_product: 'Dengan desain yang unik dan sentuhan Italia yang khas, cincin Bvlgari mencerminkan keberanian dan keindahan dari tradisi perhiasan mewah.',
  },
  {
    id: 11,
    title_product: 'Valentino',
    price: 240,
    img_product: './src/assets/img/allProduct/p13.jpg',
    desc_product: 'koleksi baju wanita Valentino memancarkan romantisme dan kemewahan, sempurna untuk momen-momen istimewa.',
  },
  {
    id: 12,
    title_product: 'Burberry',
    price: 178,
    img_product: './src/assets/img/allProduct/p10.jpg',
    desc_product: 'Sweater wanita Burberry menampilkan pola tartan ikonik yang memberikan sentuhan klasik pada gaya kasual Anda. Kombinasi sempurna keanggunan Inggris dan kualitas premium.',
  },
  {
    id: 13,
    title_product: 'Balenciaga',
    price: 178,
    img_product: './src/assets/img/allProduct/p12.jpg',
    desc_product: 'Sweater wanita Balenciaga dengan siluet oversized dan desain modern menawarkan gaya urban yang edgy dan trendi. Cocok bagi mereka yang ingin tampil beda dan kontemporer.',
  },
  {
    id: 14,
    title_product: 'Hydro Flask',
    price: 93,
    img_product: './src/assets/img/allProduct/ps2.jpg',
    desc_product: 'Hydro Flask botol minum hadir dengan desain modern dan isolasi ganda yang menjaga minuman Anda tetap dingin atau panas lebih lama. Cocok untuk gaya hidup aktif dan penuh petualangan.',
  },
  {
    id: 15,
    title_product: 'Ralph Lauren',
    price: 238,
    img_product: './src/assets/img/allProduct/p9.jpg',
    desc_product: 'Menampilkan desain klasik dan kain mewah, mereka menawarkan gaya halus untuk setiap kesempatan.',
  },
  {
    id: 14,
    title_product: 'Omega',
    price: 118,
    img_product: './src/assets/img/allProduct/t6.jpg',
    desc_product: 'Jam tangan wanita Omega adalah lambang inovasi dan keanggunan, menampilkan desain ramping dan keahlian unggul. Ideal untuk wanita modern yang menghargai gaya dan performa.',
  },
  {
    id: 15,
    title_product: 'Apple AirPods Pro',
    price: 550,
    img_product: './src/assets/img/allProduct/t3.jpg',
    desc_product: 'Apple AirPods Pro menawarkan kualitas audio nirkabel superior dengan noise cancellation aktif dan kenyamanan maksimal, ideal bagi pengguna Apple yang menghargai inovasi.',
  },
  {
    id: 16,
    title_product: 'Herschel ',
    price: 320,
    img_product: './src/assets/img/allProduct/ps3.jpg',
    desc_product: 'Herschel menggabungkan gaya klasik dengan fungsionalitas modern, ideal bagi mereka yang mencari kombinasi yang sempurna antara desain yang ikonik dan daya tahan yang handal.',
  },
  {
    id: 17,
    title_product: "S'well ",
    price: 140,
    img_product: './src/assets/img/allProduct/ps7.jpg',
    desc_product: "S'well botol minum menggabungkan keindahan dan teknologi insulasi inovatif untuk minuman ideal dalam desain elegan yang mendukung gaya hidup berkelanjutan.",
  },
  {
    id: 16,
    title_product: 'ASOS ',
    price: 320,
    img_product: './src/assets/img/allProduct/p5.jpg',
    desc_product: 'ASOS menawarkan dress wanita dengan gaya trendi dan variasi yang luas, cocok untuk setiap kesempatan dan selera fashion Anda.',
  },
  {
    id: 17,
    title_product: 'Forever 21 ',
    price: 420,
    img_product: './src/assets/img/allProduct/p11.jpg',
    desc_product: 'Forever 21 menampilkan dress wanita dengan desain terkini yang trendy dan aksesibel, memadukan gaya casual dan chic untuk tampilan sehari-hari yang stylish.',
  },
  {
    id: 18,
    title_product: 'Van Cleef & Arpels',
    price: 995,
    img_product: './src/assets/img/allProduct/pp2.jpg',
    desc_product: 'Kreativitas dan kehalusan dalam setiap detail, cincin Van Cleef & Arpels menggambarkan keanggunan dan keindahan dalam harmoni sempurna.',
  },
  {
    id: 19,
    title_product: 'Seiko ',
    price: 225,
    img_product: './src/assets/img/allProduct/t8.jpg',
    desc_product: 'Seiko merupakan product yang menyediakan jam tangan yang dapat tahan di dalam air."',
  },
  {
    id: 20,
    title_product: 'Nikon',
    price: 5950,
    img_product: './src/assets/img/allProduct/b2.jpg',
    desc_product: 'Kamera Nikon terkenal dengan optik dan presisi unggulnya, menghadirkan gambar tajam dan detail yang memukau dengan kombinasi warisan teknologi kamera yang panjang dan inovasi fitur canggih.',
  },
  {
    id: 21,
    title_product: 'Canon',
    price: 6750,
    img_product: './src/assets/img/allProduct/ba6.jpg',
    desc_product: 'Kamera Canon menggabungkan keandalan teknologi dan inovasi, menawarkan kualitas gambar luar biasa dan kemudahan penggunaan yang memukau untuk semua level fotografer, dari pemula hingga profesional.',
  },
  {
    id: 22,
    title_product: 'V-neck',
    price: 12,
    img_product: './src/assets/img/allProduct/p14.jpg',
    desc_product: 'V-neck merupakan salah satu brand lokal yang menyediakan pakaian seperti sweater dll.',
  },
  {
    id: 23,
    title_product: 'Kotak Pensil',
    price: 23,
    img_product: './src/assets/img/allProduct/ps6.jpg',
    desc_product: 'Kota pensil, tempat di mana seni dan kreativitas bertemu dalam jajaran toko seni dan galeri yang berwarna-warni.',
  },
  {
    id: 24,
    title_product: 'Fujifilm',
    price: 4600,
    img_product: './src/assets/img/allProduct/b4.jpg',
    desc_product: 'Kamera Fujifilm memadukan estetika retro dengan teknologi modern, menciptakan karakter unik dalam setiap bidikan dari digital hingga instan, ideal untuk mengekspresikan kreativitas fotografer dengan gaya yang khas.',
  },
  {
    id: 25,
    title_product: 'JanSport',
    price: 180,
    img_product: './src/assets/img/allProduct/ps1.jpg',
    desc_product: 'JanSport, ikon tas sekolah dengan desain ergonomis, ketahanan luar biasa, dan garansi seumur hidup, ideal untuk siswa aktif yang mencari keandalan.',
  },
  {
    id: 26,
    title_product: 'Brooks Brothers',
    price: 175,
    img_product: './src/assets/img/allProduct/p4.jpg',
    desc_product: 'Kemeja pria Brooks Brothers: warisan dan keahlian dalam pola ikonik dan bahan unggul, cocok untuk gaya tradisional dan kualitas abadi.',
  },
  {
    id: 27,
    title_product: 'Chopard',
    price: 2050,
    img_product: './src/assets/img/allProduct/pp7.jpg',
    desc_product: 'Merek yang terkenal dengan perhiasan mewah dan jam tangan mewah.',
  },
];

const allProduct = document.querySelector('.allProduct');

const setUIProduct = () => {
  let card = '';

  datas.map((product) => {
    card += `
            <a href="#" class="group block">
        <img
          src="${product.img_product}"
          alt=""
          class="h-[300px] w-full object-cover sm:h-[300px]"
        />

        <div class="mt-3 flex justify-between text-sm">
          <div>
            <h3 class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
              ${product.title_product}
            </h3>

            <p class="mt-1.5 text-pretty text-xs text-gray-500">
              ${product.desc_product}
            </p>
          </div>

          <p class="text-gray-900">${product.price}</p>
        </div>
      </a>
    `;
    allProduct.innerHTML += card;
  });
};

setUIProduct();
