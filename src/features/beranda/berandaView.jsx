import React from "react";
import heroImage from "../../../public/images/Ilustrasi.png";

const berandaView = () => {
  return (
    <main className="flex flex-col items-center gap-8 px-4 py-6 sm:px-6 md:px-10 max-w-screen-lg mx-auto">

      {/* Hero Section */}
      <section className="bg-secondary w-full p-6 rounded-xl shadow-md flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between md:items-center">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl sm:text-4xl font-bold mb-2">
            Ketahui <span className="text-green-600">kondisi <br className="hidden sm:block" />mental Anda</span> saat ini <br className="hidden sm:block" />dengan Tes SEHATI
          </h1>
          <p className="text-gray-700 mb-4">
            Cek kesehatan mental Anda dengan cepat dan aman. Jawab 21 pertanyaan dan temukan tingkat stres, kecemasan, serta depresi – lengkap dengan hasil instan sebagai panduan pertolakan diri.
          </p>
          <button className="bg-accent text-white py-2 px-4 rounded-xl hover:bg-green-700 transition">
            Mulai Evaluasi Diri
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img src={heroImage} alt="Mental Health Hero" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>
      </section>

      {/* Apa yang Perlu Diketahui */}
      <section className="w-full text-center">
        <h2 className="text-xl sm:text-3xl font-semibold mb-4">
          Apa yang Perlu Anda Ketahui Sebelum Tes?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* Tentang Penilaian */}
          <div className="bg-background p-4 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="../../../public/images/LogoBeranda/Penilaian.png" // ganti dengan path gambar kamu
                alt="Tentang Penilaian"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <h3 className="font-semibold">Tentang Penilaian</h3>
            </div>
            <p className="text-sm text-gray-600">
              SEHATI menggunakan DASS-21 untuk mengukur tingkat stres, kecemasan, dan depresi melalui 21 pertanyaan pada skala 0–3.
            </p>
          </div>

          {/* Peringatan Medis */}
          <div className="bg-background p-4 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="../../../public/images/LogoBeranda/Peringatan.png"
                alt="Peringatan Medis"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <h3 className="font-semibold">Peringatan Medis</h3>
            </div>
            <p className="text-sm text-gray-600">
              Hasil evaluasi ini bukan diagnosis medis. Jika Anda mengalami gangguan mental serius, hubungi tenaga profesional.
            </p>
          </div>

          {/* Privasi */}
          <div className="bg-background p-4 rounded-lg shadow">
            <div className="flex items-center gap-2 mb-2">
              <img
                src="../../../public/images/LogoBeranda/Privasi.png"
                alt="Privasi"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              />
              <h3 className="font-semibold">Privasi</h3>
            </div>
            <p className="text-sm text-gray-600">
              Data Anda bersifat anonim dan tidak disimpan. Digunakan hanya untuk hasil evaluasi secara lokal.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary rounded-xl px-6 py-8 mt-10 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Manfaat SEHATI</h2>
        <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
          Empat manfaat utama dari tes SEHATI untuk menjaga kesehatan mental Anda.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img src="../../../public/images/LogoManfaat/Otak.png" alt="Ikon" className="w-12 h-12 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Kenali Kondisi Mental</h3>
            <p className="text-sm text-gray-600">Tes ini membantu ukur stres, kecemasan, dan depresi.</p>
          </div>

          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img src="../../../public/images/LogoManfaat/Hati.png" alt="Ikon" className="w-12 h-12 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Lebih Memahami Diri</h3>
            <p className="text-sm text-gray-600">Pahami emosi dan hal yang memicunya.</p>
          </div>

          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img src="../../../public/images/LogoManfaat/Statistik.png" alt="Ikon" className="w-12 h-12 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Ambil Tindakan</h3>
            <p className="text-sm text-gray-600">Panduan langkah untuk perubahan positif. Mulai perbaikan dari sini.</p>
          </div>

          {/* Item 4 */}
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center text-center">
            <img src="../../../public/images/LogoManfaat/Privasi.png" alt="Ikon" className="w-12 h-12 mb-3" />
            <h3 className="font-semibold text-lg mb-1">Privasi Terjaga</h3>
            <p className="text-sm text-gray-600">Jawaban dan hasil tes ini bersifat pribadi.</p>
          </div>
        </div>
      </section>



      {/* Evaluasi Machine Learning */}
      <section className="text-center w-full mt-6">
        <div className="flex items-start gap-4">
          {/* Gambar kiri */}
          <img
            src="../../../public/images/LogoBeranda/Lup.png" // ganti dengan path gambar kamu
            alt="Ikon Evaluasi"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain"
          />

          {/* Teks kanan */}
          <h2 className="text-lg sm:text-3xl font-semibold text-gray-800">
            Evaluasi <span className="text-green-600">Kesehatan Mental</span> berbasis <span className="text-green-400">Machine Learning</span>
          </h2>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Tingkatkan kesadaran dan perhatian pada kesehatan mental <br className="hidden sm:block" />kapan saja, di mana saja.
        </p>
        <button className="bg-accent text-white py-2 px-4 rounded-xl hover:bg-green-700 transition">
          Mulai Evaluasi Diri Sekarang
        </button>
        <p className="text-xs text-gray-500 mt-2">Gratis, rahasia, dan hasil langsung keluar!</p>
      </section>
      
    </main>
  );
};

export default berandaView;
