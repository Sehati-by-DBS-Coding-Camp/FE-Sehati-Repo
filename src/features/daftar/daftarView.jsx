import React from "react";

const daftarView = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Kiri - Ajakan Masuk */}
        <div className="w-full md:w-1/2 bg-gradient-to-b from-accent to-primary text-white p-6 sm:p-8 flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold mb-4">Selamat Datang Kembali!</h2>
          <p className="text-sm mb-6">
            Untuk dapat menggunakan <br className="hidden sm:block" />layanan kami kembali, <br className="hidden sm:block" />silahkan masuk dengan akun anda
          </p>
          <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
            Masuk
          </button>
        </div>

        {/* Kanan - Form Registrasi */}
        <div className="w-full md:w-1/2 bg-[#f0fefb] p-6 sm:p-8 flex flex-col justify-center items-center">
          <img
            src="../../../public/images/SEHATI.png" // Ganti jika perlu
            alt="SEHATI"
            className="w-16 mb-4"
          />
          <h2 className="text-2xl font-bold mb-6 text-center">Daftar</h2>
          <form className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-sm mb-1">Nama Pengguna</label>
              <input
                type="text"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                placeholder="Nama Pengguna"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Kata Sandi</label>
              <input
                type="password"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
                placeholder="Kata Sandi"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Tanggal Lahir</label>
              <input
                type="date"
                className="w-full border-b border-gray-400 bg-transparent outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 font-semibold">Jenis kelamin</label>
              <div className="space-y-1 text-sm pl-2">
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="Laki-laki" />
                  <span>Laki-laki</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="radio" name="gender" value="Perempuan" />
                  <span>Perempuan</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white rounded-full py-2 font-semibold hover:bg-green-800 transition"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>

      {/* Tombol Close */}
      <button className="absolute top-4 right-4 text-green-700 border border-green-700 rounded-full p-1 hover:bg-green-100 transition">
        ✕
      </button>
    </div>
  );
};

export default daftarView;
