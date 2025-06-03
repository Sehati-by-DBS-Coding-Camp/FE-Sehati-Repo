import React from "react";

const beritaView = () => {
  // Dummy data untuk sementara (nanti bisa diganti dari Model/Presenter)
  const beritaList = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    title: "Lorem Ipsum",
    author: "Unknown",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod elit luctus tempor feugiat. Curabitur felis risus, aliquet in luctus nec, lacinia eget metus.",
  }));

  return (
    <main className="px-4 py-6 max-w-screen-xl mx-auto">
      {/* Judul */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Berita</h1>

      {/* Garis Lurus */}
      <hr className="border-t border-gray-300 my-6" />

      {/* Grid Berita */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beritaList.map((berita) => (
          <article
            key={berita.id}
            className="bg-white border border-accent border-t-5 rounded-lg shadow-sm p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-1">{berita.title}</h2>
              <p className="text-sm text-gray-500 mb-2">A. {berita.author}</p>
              <p className="text-sm text-gray-700">{berita.description}</p>
            </div>
            <div className="mt-4">
              <button className="bg-accent text-white text-sm py-2 px-4 rounded-full hover:bg-green-600 transition">
                Selengkapnya →
              </button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default beritaView;
