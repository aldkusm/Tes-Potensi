const questions = [



{
category:"Deret Angka",
question:"2, 5, 14, 41, 122, ?",
options:["243","365","367","401"],
answer:2,
explanation:"×3-1 berulang"
},

{
category:"Deret Angka",
question:"3, 8, 18, 38, 78, ?",
options:["118","138","158","178"],
answer:2,
explanation:"×2+2"
},

{
category:"Deret Angka",
question:"4, 7, 13, 25, 49, ?",
options:["81","91","97","99"],
answer:2,
explanation:"×2-1"
},

{
category:"Deret Angka",
question:"1, 4, 13, 40, 121, ?",
options:["243","361","364","367"],
answer:2,
explanation:"×3+1"
},

{
category:"Deret Angka",
question:"5, 11, 23, 47, 95, ?",
options:["181","189","191","193"],
answer:2,
explanation:"×2+1"
},

{
category:"Deret Angka",
question:"2, 6, 15, 31, 56, ?",
options:["82","90","92","94"],
answer:2,
explanation:"Selisih kuadrat"
},

{
category:"Deret Angka",
question:"7, 14, 28, 56, 112, ?",
options:["214","224","228","232"],
answer:1,
explanation:"×2"
},

{
category:"Deret Angka",
question:"81, 54, 36, 24, 16, ?",
options:["12","10","8","6"],
answer:1,
explanation:"×2/3"
},

{
category:"Deret Angka",
question:"1, 8, 27, 64, 125, ?",
options:["196","216","225","256"],
answer:1,
explanation:"Kubik"
},

{
category:"Deret Angka",
question:"13, 17, 25, 41, 73, ?",
options:["105","121","137","145"],
answer:2,
explanation:"+4,+8,+16,+32,+64"
},

{
category:"Deret Angka",
question:"100, 95, 85, 70, 50, ?",
options:["20","25","30","35"],
answer:1,
explanation:"-5,-10,-15,-20,-25"
},

{
category:"Matematika Dasar",
question:"Harga Rp1.200.000 didiskon 25% lalu dikenai pajak 11%. Harga akhir adalah...",
options:["Rp999.000","Rp950.000","Rp1.050.000","Rp1.100.000"],
answer:0,
explanation:"1.200.000 × 0,75 × 1,11"
},

{
category:"Matematika Dasar",
question:"30% dari x = 72. Nilai x adalah...",
options:["220","230","240","250"],
answer:2,
explanation:"72÷0,3"
},

{
category:"Matematika Dasar",
question:"Rata-rata 12 siswa adalah 78. Jumlah nilai seluruh siswa adalah...",
options:["916","926","936","946"],
answer:2,
explanation:"78×12"
},

{
category:"Matematika Dasar",
question:"20 pekerja menyelesaikan proyek dalam 18 hari. Jika pekerja menjadi 30 orang, waktu yang dibutuhkan adalah...",
options:["10","12","14","16"],
answer:1,
explanation:"Berbanding terbalik"
},

{
category:"Matematika Dasar",
question:"Sebuah investasi Rp20 juta bertumbuh 10% per tahun selama 2 tahun. Nilai akhir investasi adalah...",
options:["24.000.000","24.100.000","24.200.000","24.500.000"],
answer:2,
explanation:"20jt×1,1²"
},

{
category:"Matematika Dasar",
question:"2/7 dari 350 adalah...",
options:["90","95","100","105"],
answer:2,
explanation:"350×2÷7"
},

{
category:"Matematika Dasar",
question:"Perbandingan A:B = 4:7. Jika jumlahnya 99, nilai A adalah...",
options:["32","36","40","44"],
answer:1,
explanation:"11 bagian"
},

{
category:"Matematika Dasar",
question:"Harga barang naik 20% lalu turun 20%. Jika harga awal Rp500.000 maka harga akhirnya...",
options:["480.000","500.000","520.000","540.000"],
answer:0,
explanation:"500×1,2×0,8"
},

{
category:"Matematika Dasar",
question:"Keliling lingkaran berjari-jari 14 cm adalah...",
options:["88","90","92","94"],
answer:0,
explanation:"2πr"
},

{
category:"Matematika Dasar",
question:"Jika 45% dari suatu angka adalah 90 maka angkanya adalah...",
options:["180","190","200","210"],
answer:2,
explanation:"90÷0,45"
},

{
category:"Matematika Dasar",
question:"Seorang pedagang membeli barang Rp800.000 dan menjualnya Rp920.000. Persentase keuntungan adalah...",
options:["12%","15%","18%","20%"],
answer:1,
explanation:"120÷800"
},

{
category:"Spasial",
question:"Kubus dicat seluruh sisinya lalu dipotong menjadi 27 kubus kecil. Berapa kubus yang memiliki tepat 3 sisi bercat?",
options:["4","6","8","12"],
answer:2,
explanation:"Kubus sudut"
},

{
category:"Spasial",
question:"Kubus dicat seluruh sisinya lalu dipotong menjadi 64 kubus kecil. Berapa kubus yang memiliki tepat 2 sisi bercat?",
options:["12","24","32","36"],
answer:1,
explanation:"12 rusuk × 2"
},

{
category:"Spasial",
question:"Jumlah diagonal ruang pada kubus adalah...",
options:["2","4","6","8"],
answer:1,
explanation:"4 diagonal ruang"
},

{
category:"Spasial",
question:"Balok memiliki berapa rusuk?",
options:["8","10","12","14"],
answer:2,
explanation:"12 rusuk"
},

{
category:"Spasial",
question:"Kubus memiliki berapa bidang diagonal?",
options:["4","6","8","12"],
answer:1,
explanation:"6 bidang diagonal"
},

{
category:"Spasial",
question:"Jika persegi diputar 180°, bentuknya...",
options:["Berubah","Tetap","Miring","Terbalik"],
answer:1,
explanation:"Simetri putar"
},

{
category:"Spasial",
question:"Bangun ruang dengan 6 sisi persegi kongruen adalah...",
options:["Balok","Kubus","Prisma","Limas"],
answer:1,
explanation:"Definisi kubus"
},

{
category:"Spasial",
question:"Jumlah titik sudut balok adalah...",
options:["6","8","10","12"],
answer:1,
explanation:"8 titik sudut"
},

{
category:"Spasial",
question:"Jika sebuah kubus diputar 360°, posisinya...",
options:["Berubah","Tetap","Terbalik","Tidak pasti"],
answer:1,
explanation:"Rotasi penuh"
},

{
category:"Spasial",
question:"Jumlah sisi balok adalah...",
options:["4","5","6","8"],
answer:2,
explanation:"6 sisi"
},

{
category:"Spasial",
question:"Cerminan huruf 'P' pada cermin vertikal akan menghadap...",
options:["Kanan","Kiri","Atas","Bawah"],
answer:1,
explanation:"Refleksi horizontal"
},

{
category:"Sinonim",
question:"Sinonim paling tepat dari kata 'Elusif' adalah...",
options:[
"Mudah Dipahami",
"Sulit Ditangkap",
"Jelas",
"Tegas"
],
answer:1,
explanation:"Elusif berarti sulit dipahami atau ditangkap."
},

{
category:"Sinonim",
question:"Sinonim kata 'Paradigma' adalah...",
options:[
"Kerangka Berpikir",
"Kesalahan",
"Perdebatan",
"Masalah"
],
answer:0,
explanation:"Paradigma = kerangka berpikir."
},

{
category:"Sinonim",
question:"Sinonim kata 'Pragmatis' adalah...",
options:[
"Idealistis",
"Praktis",
"Abstrak",
"Teoretis"
],
answer:1,
explanation:"Pragmatis = berorientasi hasil/praktis."
},

{
category:"Sinonim",
question:"Sinonim kata 'Konvergen' adalah...",
options:[
"Menyatu",
"Memisah",
"Menyebar",
"Bercabang"
],
answer:0,
explanation:"Konvergen = menuju satu titik."
},

{
category:"Sinonim",
question:"Sinonim kata 'Substansial' adalah...",
options:[
"Sepele",
"Penting",
"Kecil",
"Sementara"
],
answer:1,
explanation:"Substansial = penting."
},

{
category:"Sinonim",
question:"Sinonim kata 'Ambigu' adalah...",
options:[
"Tegas",
"Ganda Makna",
"Pasti",
"Jelas"
],
answer:1,
explanation:"Ambigu = memiliki lebih dari satu makna."
},

{
category:"Sinonim",
question:"Sinonim kata 'Anomali' adalah...",
options:[
"Penyimpangan",
"Keteraturan",
"Kesamaan",
"Konsistensi"
],
answer:0,
explanation:"Anomali = penyimpangan."
},

{
category:"Sinonim",
question:"Sinonim kata 'Komprehensif' adalah...",
options:[
"Menyeluruh",
"Sebagian",
"Singkat",
"Terbatas"
],
answer:0,
explanation:"Komprehensif = menyeluruh."
},

{
category:"Sinonim",
question:"Sinonim kata 'Legitimasi' adalah...",
options:[
"Penolakan",
"Pengesahan",
"Larangan",
"Pembatalan"
],
answer:1,
explanation:"Legitimasi = pengesahan."
},

{
category:"Sinonim",
question:"Sinonim kata 'Inovatif' adalah...",
options:[
"Kreatif",
"Kuno",
"Tradisional",
"Pasif"
],
answer:0,
explanation:"Inovatif = kreatif."
},

{
category:"Sinonim",
question:"Sinonim kata 'Resilien' adalah...",
options:[
"Rapuh",
"Tangguh",
"Lemah",
"Kaku"
],
answer:1,
explanation:"Resilien = tangguh."
},

{
category:"Antonim",
question:"Antonim kata 'Paradoks' adalah...",
options:[
"Kontradiksi",
"Konsistensi",
"Ambiguitas",
"Dilema"
],
answer:1,
explanation:"Paradoks berlawanan dengan konsistensi."
},

{
category:"Antonim",
question:"Antonim kata 'Progresif' adalah...",
options:[
"Adaptif",
"Modern",
"Mundur",
"Dinamis"
],
answer:2,
explanation:"Progresif ↔ mundur."
},

{
category:"Antonim",
question:"Antonim kata 'Objektif' adalah...",
options:[
"Netral",
"Subjektif",
"Faktual",
"Rasional"
],
answer:1,
explanation:"Objektif ↔ subjektif."
},

{
category:"Antonim",
question:"Antonim kata 'Stabil' adalah...",
options:[
"Labil",
"Konstan",
"Tetap",
"Konsisten"
],
answer:0,
explanation:"Stabil ↔ labil."
},

{
category:"Antonim",
question:"Antonim kata 'Implisit' adalah...",
options:[
"Tersirat",
"Eksplisit",
"Abstrak",
"Ambigu"
],
answer:1,
explanation:"Implisit ↔ eksplisit."
},

{
category:"Antonim",
question:"Antonim kata 'Defisit' adalah...",
options:[
"Minus",
"Rugi",
"Surplus",
"Kekurangan"
],
answer:2,
explanation:"Defisit ↔ surplus."
},

{
category:"Antonim",
question:"Antonim kata 'Rigid' adalah...",
options:[
"Kaku",
"Fleksibel",
"Tegas",
"Konsisten"
],
answer:1,
explanation:"Rigid ↔ fleksibel."
},

{
category:"Antonim",
question:"Antonim kata 'Optimistis' adalah...",
options:[
"Pesimistis",
"Realistis",
"Objektif",
"Rasional"
],
answer:0,
explanation:"Optimistis ↔ pesimistis."
},

{
category:"Antonim",
question:"Antonim kata 'Dominan' adalah...",
options:[
"Kuat",
"Berpengaruh",
"Subordinat",
"Superior"
],
answer:2,
explanation:"Dominan ↔ subordinat."
},

{
category:"Antonim",
question:"Antonim kata 'Ekspansif' adalah...",
options:[
"Meluas",
"Membesar",
"Menyusut",
"Berkembang"
],
answer:2,
explanation:"Ekspansif ↔ menyusut."
},

{
category:"Antonim",
question:"Antonim kata 'Homogen' adalah...",
options:[
"Seragam",
"Heterogen",
"Sejenis",
"Uniform"
],
answer:1,
explanation:"Homogen ↔ heterogen."
},

{
category:"Analogi",
question:"Guru : Sekolah : Buku = Dokter : Rumah Sakit : ?",
options:[
"Pasien",
"Obat",
"Perawat",
"Jarum Suntik"
],
answer:1,
explanation:"Profesi : Tempat Kerja : Alat Utama"
},

{
category:"Analogi",
question:"Hakim : Pengadilan : Putusan = Dosen : Universitas : ?",
options:[
"Mahasiswa",
"Penelitian",
"Nilai",
"Skripsi"
],
answer:2,
explanation:"Output utama pekerjaan."
},

{
category:"Analogi",
question:"Pilot : Pesawat : Bandara = Nahkoda : Kapal : ?",
options:[
"Pelabuhan",
"Laut",
"Mercusuar",
"Gelombang"
],
answer:0,
explanation:"Tempat operasi utama."
},

{
category:"Analogi",
question:"Jantung : Darah = Paru-paru : ?",
options:[
"Karbon",
"Hidung",
"Oksigen",
"Napas"
],
answer:2,
explanation:"Organ : hasil utama."
},

{
category:"Analogi",
question:"Api : Panas = Es : ?",
options:[
"Air",
"Dingin",
"Beku",
"Salju"
],
answer:1,
explanation:"Penyebab : akibat."
},

{
category:"Analogi",
question:"Konstitusi : Negara = Anggaran Dasar : ?",
options:[
"Perusahaan",
"Organisasi",
"Karyawan",
"Direktur"
],
answer:1,
explanation:"Aturan dasar suatu entitas."
},

{
category:"Analogi",
question:"Mata : Melihat = Telinga : ?",
options:[
"Berbicara",
"Mendengar",
"Merasa",
"Mencium"
],
answer:1,
explanation:"Organ : fungsi."
},

{
category:"Analogi",
question:"Benih : Pohon = Telur : ?",
options:[
"Anak",
"Burung",
"Ayam",
"Makhluk Hidup"
],
answer:2,
explanation:"Bentuk awal menjadi bentuk dewasa."
},

{
category:"Analogi",
question:"Baterai : Energi = Otak : ?",
options:[
"Pikiran",
"Ingatan",
"Informasi",
"Kecerdasan"
],
answer:2,
explanation:"Media penyimpanan utama."
},

{
category:"Analogi",
question:"Inflasi : Harga = Resesi : ?",
options:[
"Pertumbuhan",
"Produksi",
"Ekonomi",
"Kontraksi"
],
answer:3,
explanation:"Fenomena dan dampak dominan."
},

{
category:"Analogi",
question:"Data : Informasi = Informasi : ?",
options:[
"Fakta",
"Pengetahuan",
"Analisis",
"Keputusan"
],
answer:1,
explanation:"Transformasi bertingkat data → informasi → pengetahuan."
},

{
category:"Bahasa Inggris",
question:"The board decided to postpone the merger due to regulatory concerns. The word 'postpone' is closest in meaning to...",
options:["Cancel","Delay","Accelerate","Reject"],
answer:1,
explanation:"Postpone = delay."
},

{
category:"Bahasa Inggris",
question:"If the company had invested earlier, it _____ a larger market share today.",
options:["has","would have","would have had","had"],
answer:2,
explanation:"Third conditional."
},

{
category:"Bahasa Inggris",
question:"The new policy was implemented to _____ operational efficiency.",
options:["enhance","reduce","ignore","complicate"],
answer:0,
explanation:"Enhance = improve."
},

{
category:"Bahasa Inggris",
question:"Choose the word closest in meaning to 'obsolete'.",
options:["Modern","Outdated","Useful","Innovative"],
answer:1,
explanation:"Obsolete = outdated."
},

{
category:"Bahasa Inggris",
question:"Despite facing significant challenges, the team remained _____.",
options:["resilient","obsolete","passive","fragile"],
answer:0,
explanation:"Resilient = tangguh."
},

{
category:"Bahasa Inggris",
question:"The proposal was rejected because it lacked sufficient _____.",
options:["evidence","emotion","opinion","assumption"],
answer:0,
explanation:"Evidence = bukti."
},

{
category:"Bahasa Inggris",
question:"Which sentence is grammatically correct?",
options:[
"Neither the manager nor the employees was informed.",
"Neither the manager nor the employees were informed.",
"Neither the manager nor the employees is informed.",
"Neither manager nor employees has informed."
],
answer:1,
explanation:"Verb mengikuti subject terdekat."
},

{
category:"Bahasa Inggris",
question:"The company's profits have increased _____ 15% this year.",
options:["by","with","from","at"],
answer:0,
explanation:"Increase by."
},

{
category:"Bahasa Inggris",
question:"The term 'feasible' is closest in meaning to...",
options:["Impossible","Practical","Expensive","Complex"],
answer:1,
explanation:"Feasible = practical."
},

{
category:"Bahasa Inggris",
question:"Employees are expected to comply _____ company regulations.",
options:["to","for","with","on"],
answer:2,
explanation:"Comply with."
},

{
category:"Bahasa Inggris",
question:"Had the warning been taken seriously, the crisis _____.",
options:["could avoid","could have been avoided","avoided","would avoid"],
answer:1,
explanation:"Inverted conditional."
},

{
category:"Microsoft Office Literacy",
question:"Data penjualan berada pada A2:D5000. Kolom B berisi nama produk dan kolom D berisi nilai penjualan. Anda ingin menghitung total penjualan untuk produk 'Laptop'. Fungsi yang paling efisien adalah...",
options:[
"COUNTIF",
"SUMIF",
"VLOOKUP",
"AVERAGE"
],
answer:1,
explanation:"SUMIF menjumlahkan berdasarkan kriteria."
},

{
category:"Microsoft Office Literacy",
question:"Seorang HR ingin menentukan status karyawan. Jika nilai evaluasi ≥80 maka 'Promosi', selain itu 'Evaluasi'. Rumus yang paling tepat adalah...",
options:[
"=COUNTIF(A2>=80)",
"=IF(A2>=80,\"Promosi\",\"Evaluasi\")",
"=SUMIF(A2>=80)",
"=VLOOKUP(A2)"
],
answer:1,
explanation:"IF digunakan untuk pengambilan keputusan."
},

{
category:"Microsoft Office Literacy",
question:"Anda memiliki tabel berisi NIK dan Gaji. Untuk mencari gaji berdasarkan NIK tertentu, fungsi yang paling tepat adalah...",
options:[
"SUM",
"COUNTIF",
"VLOOKUP",
"AVERAGE"
],
answer:2,
explanation:"Lookup data berdasarkan key."
},

{
category:"Microsoft Office Literacy",
question:"Perusahaan memiliki 10.000 data transaksi. Anda ingin menghitung jumlah transaksi yang nilainya di atas Rp1.000.000. Fungsi yang paling tepat adalah...",
options:[
"COUNTIF",
"SUMIF",
"IF",
"MAX"
],
answer:0,
explanation:"COUNTIF menghitung jumlah data sesuai kriteria."
},

{
category:"Microsoft Office Literacy",
question:"Dalam Microsoft Word, fitur yang paling tepat untuk membuat daftar isi otomatis adalah...",
options:[
"Track Changes",
"Styles (Heading)",
"Mail Merge",
"Comments"
],
answer:1,
explanation:"Daftar isi otomatis menggunakan Heading."
},

{
category:"Microsoft Office Literacy",
question:"Sebuah perusahaan ingin mengirim 500 surat dengan nama penerima berbeda menggunakan satu template dokumen. Fitur Word yang paling tepat adalah...",
options:[
"Track Changes",
"Mail Merge",
"WordArt",
"AutoCorrect"
],
answer:1,
explanation:"Mail Merge digunakan untuk surat massal."
},

{
category:"Microsoft Office Literacy",
question:"Tim legal sedang meninjau kontrak bersama. Setiap perubahan harus terlihat dan dapat diterima atau ditolak oleh editor utama. Fitur yang paling tepat adalah...",
options:[
"Track Changes",
"Header & Footer",
"Navigation Pane",
"SmartArt"
],
answer:0,
explanation:"Track Changes untuk review dokumen."
},

{
category:"Microsoft Office Literacy",
question:"Shortcut yang paling umum digunakan untuk mencari kata tertentu dalam dokumen Word adalah...",
options:[
"Ctrl + H",
"Ctrl + F",
"Ctrl + G",
"Ctrl + K"
],
answer:1,
explanation:"Find = Ctrl + F."
},

{
category:"Microsoft Office Literacy",
question:"Manajemen meminta perubahan logo perusahaan pada seluruh slide presentasi. Cara paling efisien adalah menggunakan...",
options:[
"Animation Pane",
"Slide Sorter",
"Slide Master",
"Presenter View"
],
answer:2,
explanation:"Slide Master mengubah seluruh slide sekaligus."
},

{
category:"Microsoft Office Literacy",
question:"Tujuan utama menggunakan Slide Master dalam PowerPoint adalah...",
options:[
"Membuat animasi",
"Mengatur desain dan format global presentasi",
"Menggabungkan file",
"Mengunci slide"
],
answer:1,
explanation:"Mengatur template seluruh presentasi."
},

{
category:"Microsoft Office Literacy",
question:"Saat presentasi kepada direksi, Anda ingin melihat catatan pembicara di layar laptop tanpa ditampilkan pada proyektor. Fitur yang digunakan adalah...",
options:[
"Reading View",
"Presenter View",
"Outline View",
"Slide Sorter"
],
answer:1,
explanation:"Presenter View menampilkan catatan hanya ke presenter."
},

{
category:"Logika",
question:"Semua analis adalah karyawan. Sebagian karyawan adalah investor. Tidak ada investor yang menjadi direktur. Kesimpulan yang pasti benar adalah...",
options:[
"Tidak ada analis yang direktur",
"Sebagian analis investor",
"Semua analis karyawan",
"Sebagian direktur investor"
],
answer:2,
explanation:"Hanya itu yang pasti."
},

{
category:"Logika",
question:"Jika semua A adalah B, semua B adalah C, dan tidak ada C yang D, maka...",
options:[
"Tidak ada A yang D",
"Semua D adalah A",
"Sebagian A adalah D",
"Semua A adalah C dan D"
],
answer:0,
explanation:"Transitif."
},

{
category:"Logika",
question:"Jika hujan maka jalan basah. Jalan basah. Maka...",
options:[
"Pasti hujan",
"Mungkin hujan",
"Tidak hujan",
"Pasti tidak hujan"
],
answer:1,
explanation:"Tidak bisa dibalik."
},

{
category:"Logika",
question:"Semua auditor teliti. Sebagian orang teliti kreatif. Kesimpulan yang benar adalah...",
options:[
"Semua auditor kreatif",
"Sebagian auditor kreatif",
"Tidak dapat dipastikan auditor kreatif",
"Tidak ada auditor kreatif"
],
answer:2,
explanation:"Tidak cukup data."
},

{
category:"Logika",
question:"Lima orang duduk berurutan. B di kanan A. C di kiri D. E di ujung kanan. Jika A paling kiri, siapa di posisi ke-4?",
options:["B","C","D","E"],
answer:3,
explanation:"Urutan A-B-C-D-E."
},

{
category:"Logika",
question:"Jika p→q dan q→r. Jika r salah maka...",
options:[
"q benar",
"q salah",
"p salah",
"p dan q salah"
],
answer:2,
explanation:"Modus tollens berantai."
},

{
category:"Logika",
question:"Semua insinyur matematis. Sebagian matematis musisi. Maka...",
options:[
"Semua insinyur musisi",
"Sebagian insinyur musisi",
"Tidak dapat dipastikan",
"Tidak ada insinyur musisi"
],
answer:2,
explanation:"Tidak cukup data."
},

{
category:"Logika",
question:"Dalam sebuah kelompok, setiap anggota yang mengikuti pelatihan lulus ujian. Budi tidak lulus ujian. Maka...",
options:[
"Budi tidak mengikuti pelatihan",
"Budi mengikuti pelatihan",
"Budi pasti gagal karena malas",
"Tidak cukup data"
],
answer:0,
explanation:"Kontraposisi."
},

{
category:"Logika",
question:"Semua X adalah Y. Sebagian Y adalah Z. Maka...",
options:[
"Sebagian X adalah Z",
"Semua Z adalah X",
"Tidak dapat dipastikan hubungan X dan Z",
"Tidak ada X yang Z"
],
answer:2,
explanation:"Informasi tidak cukup."
},

{
category:"Logika",
question:"Jika hari ini Senin, maka 100 hari lagi adalah...",
options:["Selasa","Rabu","Kamis","Jumat"],
answer:1,
explanation:"100 mod 7 = 2."
},

{
category:"Logika",
question:"Empat proyek P,Q,R,S harus selesai berurutan. Q setelah P. R setelah Q. S sebelum R. Urutan yang mungkin adalah...",
options:[
"P-Q-S-R",
"S-P-Q-R",
"P-S-Q-R",
"Q-P-S-R"
],
answer:0,
explanation:"Memenuhi semua syarat."
},

{
category:"Logika",
question:"Semua pegawai menerima email. Sebagian penerima email membaca email. Kesimpulan yang pasti benar adalah...",
options:[
"Semua pegawai membaca email",
"Sebagian pegawai membaca email",
"Tidak dapat dipastikan ada pegawai yang membaca email",
"Tidak ada pegawai membaca email"
],
answer:2,
explanation:"Jebakan silogisme klasik."
}

]