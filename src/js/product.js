const datas = [
  {
    id: 0,
    title_product: 'ROG Ally',
    price: 200,
    img_product: './src/assets/img/allProduct/b5.jpg',
    desc_product: 'ROG Ally adalah konsol game mutakhir yang menggabungkan desain ergonomis dengan performa tinggi,',
    kategori: 'TNLG',
  },
  {
    id: 1,
    title_product: 'Console PS 5',
    price: 200,
    img_product: './src/assets/img/allProduct/b3.jpg',
    desc_product: 'Console PS 5 adalah Stik PS 5 terbaru yang sudah support dengan penggunaan pada kabel Wireless dan dapat menggunakan DVD Player.',
    kategori: 'TNLG',
  },
  {
    id: 2,
    title_product: 'Zenith Wear',
    price: 95,
    img_product: './src/assets/img/allProduct/p7.jpg',
    desc_product: 'ZenithApparel menghadirkan koleksi pakaian dengan fokus pada kualitas dan gaya yang dapat disesuaikan dengan berbagai kesempatan.',
    kategori: 'PKN',
  },
  {
    id: 3,
    title_product: 'ByteSync',
    price: 45,
    img_product: './src/assets/img/allProduct/t1.jpg',
    desc_product: 'Sinkronisasi data dengan mudah dan cepat. Solusi hemat waktu untuk memenuhi kebutuhan penyimpanan dan transfer data Anda..',
    kategori: 'TNLG',
  },
  {
    id: 4,
    title_product: 'SonicSurge',
    price: 210,
    img_product: './src/assets/img/allProduct/t5.jpg',
    desc_product: 'Kualitas audio premium dan desain ergonomis, sempurna untuk gaya hidup aktif Anda.',
    kategori: 'TNLG',
  },
  {
    id: 5,
    title_product: 'PulseWave',
    price: 35,
    img_product: './src/assets/img/allProduct/t2.jpg',
    desc_product: 'Desain ergonomis dengan performa audio tinggi untuk momen mendengarkan yang memikat.',
    kategori: 'TNLG',
  },
  {
    id: 6,
    title_product: 'Tetris',
    price: 283,
    img_product: './src/assets/img/allProduct/t7.jpg',
    desc_product: 'Tetris adalah salah satu alat langka yang bertujuan untuk berkomunikasi antar sesama manusia.',
    kategori: 'BA',
  },
  {
    id: 7,
    title_product: 'Diary Book',
    price: 32,
    img_product: './src/assets/img/allProduct/ps8.jpg',
    desc_product: 'Diary Book adalah alat penting untuk merekam momen harian dan merenungkan pengalaman hidup.',
    kategori: 'PS',
  },
  {
    id: 8,
    title_product: 'Cartier ',
    price: 885,
    img_product: './src/assets/img/allProduct/pp3.jpg',
    desc_product: 'Merek yang legendaris dalam dunia perhiasan, cincin Cartier menonjolkan keanggunan dan keindahan abadi dengan desain yang ikonik dan detail yang sempurna.',
    kategori: 'PHN',
  },
  {
    id: 9,
    title_product: 'Tiffany & Co',
    price: 980,
    img_product: './src/assets/img/allProduct/pp1.jpg',
    desc_product: 'Keharmonisan sempurna antara keanggunan klasik dan inovasi modern, cincin Tiffany & Co. menawarkan kemewahan yang abadi dengan kehalusan tangan terampil.',
    kategori: 'PHN',
  },
  {
    id: 10,
    title_product: 'Bvlgari',
    price: 1300,
    img_product: './src/assets/img/allProduct/pp5.jpg',
    desc_product: 'Dengan desain yang unik dan sentuhan Italia yang khas, cincin Bvlgari mencerminkan keberanian dan keindahan dari tradisi perhiasan mewah.',
    kategori: 'PHN',
  },
  {
    id: 11,
    title_product: 'Valentino',
    price: 240,
    img_product: './src/assets/img/allProduct/p13.jpg',
    desc_product: 'koleksi baju wanita Valentino memancarkan romantisme dan kemewahan, sempurna untuk momen-momen istimewa.',
    kategori: 'PKN',
  },
  {
    id: 12,
    title_product: 'Burberry',
    price: 178,
    img_product: './src/assets/img/allProduct/p10.jpg',
    desc_product: 'Sweater wanita Burberry menampilkan pola tartan ikonik yang memberikan sentuhan klasik pada gaya kasual Anda. Kombinasi sempurna keanggunan Inggris dan kualitas premium.',
    kategori: 'PKN',
  },
  {
    id: 13,
    title_product: 'Balenciaga',
    price: 178,
    img_product: './src/assets/img/allProduct/p12.jpg',
    desc_product: 'Sweater wanita Balenciaga dengan siluet oversized dan desain modern menawarkan gaya urban yang edgy dan trendi. Cocok bagi mereka yang ingin tampil beda dan kontemporer.',
    kategori: 'PKN',
  },
  {
    id: 14,
    title_product: 'Hydro Flask',
    price: 93,
    img_product: './src/assets/img/allProduct/ps2.jpg',
    desc_product: 'Hydro Flask botol minum hadir dengan desain modern dan isolasi ganda yang menjaga minuman Anda tetap dingin atau panas lebih lama. Cocok untuk gaya hidup aktif dan penuh petualangan.',
    kategori: 'PS',
  },
  {
    id: 15,
    title_product: 'Ralph Lauren',
    price: 238,
    img_product: './src/assets/img/allProduct/p9.jpg',
    desc_product: 'Menampilkan desain klasik dan kain mewah, mereka menawarkan gaya halus untuk setiap kesempatan.',
    kategori: 'PKN',
  },
  {
    id: 16,
    title_product: 'Omega',
    price: 118,
    img_product: './src/assets/img/allProduct/t6.jpg',
    desc_product: 'Jam tangan wanita Omega adalah lambang inovasi dan keanggunan, menampilkan desain ramping dan keahlian unggul. Ideal untuk wanita modern yang menghargai gaya dan performa.',
    kategori: 'PS',
  },
  {
    id: 17,
    title_product: 'Apple AirPods Pro',
    price: 550,
    img_product: './src/assets/img/allProduct/t3.jpg',
    desc_product: 'Apple AirPods Pro menawarkan kualitas audio nirkabel superior dengan noise cancellation aktif dan kenyamanan maksimal, ideal bagi pengguna Apple yang menghargai inovasi.',
    kategori: 'TNLG',
  },
  {
    id: 18,
    title_product: 'Herschel ',
    price: 320,
    img_product: './src/assets/img/allProduct/ps3.jpg',
    desc_product: 'Herschel menggabungkan gaya klasik dengan fungsionalitas modern, ideal bagi mereka yang mencari kombinasi yang sempurna antara desain yang ikonik dan daya tahan yang handal.',
    kategori: 'PS',
  },
  {
    id: 19,
    title_product: "S'well ",
    price: 140,
    img_product: './src/assets/img/allProduct/ps7.jpg',
    desc_product: "S'well botol minum menggabungkan keindahan dan teknologi insulasi inovatif untuk minuman ideal dalam desain elegan yang mendukung gaya hidup berkelanjutan.",
    kategori: 'PS',
  },
  {
    id: 20,
    title_product: 'ASOS ',
    price: 320,
    img_product: './src/assets/img/allProduct/p5.jpg',
    desc_product: 'ASOS menawarkan dress wanita dengan gaya trendi dan variasi yang luas, cocok untuk setiap kesempatan dan selera fashion Anda.',
    kategori: 'PKN',
  },
  {
    id: 21,
    title_product: 'Forever 21 ',
    price: 420,
    img_product: './src/assets/img/allProduct/p11.jpg',
    desc_product: 'Forever 21 menampilkan dress wanita dengan desain terkini yang trendy dan aksesibel, memadukan gaya casual dan chic untuk tampilan sehari-hari yang stylish.',
    kategori: 'PKN',
  },
  {
    id: 22,
    title_product: 'Van Cleef & Arpels',
    price: 995,
    img_product: './src/assets/img/allProduct/pp2.jpg',
    desc_product: 'Kreativitas dan kehalusan dalam setiap detail, cincin Van Cleef & Arpels menggambarkan keanggunan dan keindahan dalam harmoni sempurna.',
    kategori: 'PHN',
  },
  {
    id: 23,
    title_product: 'Seiko ',
    price: 225,
    img_product: './src/assets/img/allProduct/t8.jpg',
    desc_product: 'Seiko merupakan product yang menyediakan jam tangan yang dapat tahan di dalam air.',
    kategori: 'PS',
  },
  {
    id: 24,
    title_product: 'Nikon',
    price: 5950,
    img_product: './src/assets/img/allProduct/b2.jpg',
    desc_product: 'Kamera Nikon terkenal dengan optik dan presisi unggulnya, menghadirkan gambar tajam dan detail yang memukau dengan kombinasi warisan teknologi kamera yang panjang dan inovasi fitur canggih.',
    kategori: 'BA',
  },
  {
    id: 25,
    title_product: 'Canon',
    price: 6750,
    img_product: './src/assets/img/allProduct/ba6.jpg',
    desc_product: 'Kamera Canon menggabungkan keandalan teknologi dan inovasi, menawarkan kualitas gambar luar biasa dan kemudahan penggunaan yang memukau untuk semua level fotografer, dari pemula hingga profesional.',
    kategori: 'BA',
  },
  {
    id: 26,
    title_product: 'V-neck',
    price: 12,
    img_product: './src/assets/img/allProduct/p14.jpg',
    desc_product: 'V-neck merupakan salah satu brand lokal yang menyediakan pakaian seperti sweater dll.',
    kategori: 'PKN',
  },
  {
    id: 27,
    title_product: 'Kotak Pensil',
    price: 23,
    img_product: './src/assets/img/allProduct/ps6.jpg',
    desc_product: 'Kota pensil, tempat di mana seni dan kreativitas bertemu dalam jajaran toko seni dan galeri yang berwarna-warni.',
    kategori: 'PS',
  },
  {
    id: 28,
    title_product: 'Fujifilm',
    price: 4600,
    img_product: './src/assets/img/allProduct/b4.jpg',
    desc_product: 'Kamera Fujifilm memadukan estetika retro dengan teknologi modern, menciptakan karakter unik dalam setiap bidikan dari digital hingga instan, ideal untuk mengekspresikan kreativitas fotografer dengan gaya yang khas.',
    kategori: 'BA',
  },
  {
    id: 29,
    title_product: 'JanSport',
    price: 180,
    img_product: './src/assets/img/allProduct/ps1.jpg',
    desc_product: 'JanSport, ikon tas sekolah dengan desain ergonomis, ketahanan luar biasa, dan garansi seumur hidup, ideal untuk siswa aktif yang mencari keandalan.',
    kategori: 'PS',
  },
  {
    id: 30,
    title_product: 'Brooks Brothers',
    price: 175,
    img_product: './src/assets/img/allProduct/p4.jpg',
    desc_product: 'Kemeja pria Brooks Brothers: warisan dan keahlian dalam pola ikonik dan bahan unggul, cocok untuk gaya tradisional dan kualitas abadi.',
    kategori: 'PKN',
  },
  {
    id: 31,
    title_product: 'Chopard',
    price: 2050,
    img_product: './src/assets/img/allProduct/pp7.jpg',
    desc_product: 'Merek yang terkenal dengan perhiasan mewah dan jam tangan mewah.',
    kategori: 'PHN',
  },
  {
    id: 32,
    title_product: 'Ralph Lauren',
    price: 385,
    img_product: './src/assets/img/allProduct/p3.jpg',
    desc_product: 'Ralph Lauren Menggabungkan gaya klasik Amerika dengan sentuhan modern, terkenal dengan kualitas premium dan desain timeless.',
    kategori: 'PKN',
  },
  {
    id: 33,
    title_product: 'Hugo Boss',
    price: 263,
    img_product: './src/assets/img/allProduct/p8.jpg',
    desc_product: 'Hugo Boss Mewah dan sophisticated, menghadirkan kemeja dengan potongan yang rapi dan bahan berkualitas tinggi untuk tampilan yang elegan.',
    kategori: 'PKN',
  },
  {
    id: 34,
    title_product: 'Armani',
    price: 442,
    img_product: './src/assets/img/allProduct/p1.jpg',
    desc_product: 'Armani Mewakili gaya Italia yang elegan dan modern, kemeja Armani dirancang dengan perhatian terhadap detail dan kualitas superior.',
    kategori: 'PKN',
  },
  {
    id: 35,
    title_product: 'Herschel',
    price: 176,
    img_product: './src/assets/img/allProduct/ps5.jpg',
    desc_product: 'Herschel Menggabungkan gaya vintage dengan fungsi modern, Herschel menyediakan tas sekolah dengan desain stylish dan bahan berkualitas tinggi.',
    kategori: 'PS',
  },
  {
    id: 36,
    title_product: 'Uniqlo',
    price: 223,
    img_product: './src/assets/img/allProduct/p6.jpg',
    desc_product: 'Uniqlo Mengutamakan kenyamanan dan fungsionalitas dengan desain yang simpel dan bahan yang berkualitas, ideal untuk penggunaan sehari-hari.',
    kategori: 'PKN',
  },
  {
    id: 37,
    title_product: 'Tommy Hilfiger',
    price: 393,
    img_product: './src/assets/img/allProduct/p2.jpg',
    desc_product: 'Tommy Hilfiger Terkenal dengan gaya preppy dan warna-warni ikoniknya, menghadirkan kemeja yang penuh energi dan semangat muda.',
    kategori: 'PKN',
  },
];

const btnLoadMore = document.querySelector('.btnLoadMore');
const allProduct = document.querySelector('.allProduct');
const txtPagnation = document.querySelector('.btnShowMore .txtPagnation');

// Ketika browser pertama kali reload
let countProduct = 12;
let maxLengthProduct = datas.length;

document.addEventListener('DOMContentLoaded', () => {
  setUiProduct();
});

btnLoadMore.onclick = () => {
  nextPage();
};

const nextPage = () => {
  countProduct += 13;
  setUiProduct();
  if (countProduct == maxLengthProduct) {
    btnLoadMore.style.display = 'none';
  }
};

const setUiProduct = () => {
  let card = '';
  datas.forEach((product, id) => {
    if (id < countProduct) {
      card += `
                <div class="group block overflow-hidden w-[200px] sm:w-[230px]   ">
         <img src="${product.img_product}" alt="" class="h-[300px] cursor-pointer w-full object-cover sm:h-[300px] duration-500 hover:scale-110" />

         <div class="relative bg-white pt-3">
           <div class="flex justify-between items-center">
             <a href="#" class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
               ${product.title_product}
             </a>
             <p class="text-indigo-400 font-medium ">${product.price}K</p>
           </div>

           <p class="mt-1.5 text-pretty text-xs text-gray-500 w-full">${product.desc_product}</p>
         </div>
         </div>
        `;
      allProduct.innerHTML = card;
    }
  });
};

// Filtering Kategori Produk
const selectKategoriProduk = document.querySelector('#HeadlineAct');
const optionProduk = document.querySelectorAll('#HeadlineAct option');
selectKategoriProduk.addEventListener('change', () => {
  optionProduk.forEach((option) => {
    if (option.selected) {
      setUIFilteringProduct(option.value);
    }
  });
});

const setUIFilteringProduct = (categoryProduct) => {
  const productFilter = datas.filter((product) => product.kategori == categoryProduct);
  if (categoryProduct == 'ALL') {
    if (countProduct <= maxLengthProduct) {
      btnLoadMore.style.display = 'flex';
      setUiProduct();
    }
    if (countProduct == maxLengthProduct) {
      btnLoadMore.style.display = 'none';
    }
  } else {
    btnLoadMore.style.display = 'none';
    let card = '';
    productFilter.forEach((product, id) => {
      if (id < countProduct) {
        card += `
                <div class="group block overflow-hidden w-[200px] sm:w-[230px]  ">
         <img src="${product.img_product}" alt="" class="h-[300px] cursor-pointer w-full object-cover sm:h-[300px] duration-500 hover:scale-110" />

         <div class="relative bg-white pt-3">
           <div class="flex justify-between items-center">
             <a href="#" class="text-gray-900 group-hover:underline group-hover:underline-offset-4">
               ${product.title_product}
             </a>
             <p class="text-fuchsia-700 font-medium ">${product.price}K</p>
           </div>

           <p class="mt-1.5 text-pretty text-xs text-gray-500 w-full">${product.desc_product}</p>
         </div>
         </div>
        `;
        allProduct.innerHTML = card;
      }
    });
  }
};
