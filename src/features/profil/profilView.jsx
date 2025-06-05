import { FaCamera, FaChevronDown } from "react-icons/fa";

export default function ProfileView() {
  const hasPhoto = true; // ubah ke true kalau sudah ada foto

  return (
    <section className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md bg-secondary p-6 rounded-xl shadow-md my-3">
        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24">
            {hasPhoto ? (
              <div className="relative w-24 h-24 rounded-full overflow-hidden">
                <img
                  src="/src/assets/avatar_profile1.png"
                  alt="Profile"
                  className="absolute inset-0 w-24 h-24 object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-full rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-gray-500 text-xs px-3 text-center leading-tight">
                Belum ada foto
              </div>
            )}
            <button className="absolute bottom-0 right-0 bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center">
              <FaCamera size={16} />
            </button>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4 text-sm md:text-base text-black">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Nama Pengguna
            </label>
            <input
              type="text"
              placeholder="Masukkan nama pengguna"
              defaultValue=""
              className="w-full text-black bg-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-4">
            <div className="flex-1 mb-4 sm:mb-0">
              <label className="block mb-1 font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukkan email"
                defaultValue=""
                className="w-full text-black bg-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2 placeholder:text-gray-400"
              />
            </div>

            <div className="flex-1">
              <label className="block mb-1 font-semibold text-gray-700">
                Nomor Telepon
              </label>
              <input
                type="tel"
                placeholder="Masukkan No. telepon"
                defaultValue=""
                className="w-full text-gray-400 bg-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2 placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Tanggal Lahir
            </label>
            <input
              type="date"
              defaultValue=""
              className="w-full text-black bg-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Jenis Kelamin
            </label>
            <div className="relative">
              <select
                defaultValue=""
                className="w-full text-black bg-white border border-accent focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-2 appearance-none"
                style={{ color: "black" }}
              >
                <option value="" disabled hidden style={{ color: "gray" }}>
                  Pilih jenis kelamin
                </option>
                <option style={{ color: "black" }}>Perempuan</option>
                <option style={{ color: "black" }}>Laki-laki</option>
              </select>
              <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10 justify-end">
            <button
              type="button"
              className="bg-white text-accent border border-accent px-4 py-2 rounded-md hover:bg-accent hover:text-white transition-colors"
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-md border border-accent hover:bg-green-800 hover:text-white transition-colors"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
