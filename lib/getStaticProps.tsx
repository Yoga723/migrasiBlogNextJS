import Authors from "./mongodb/models/Authors";
import dbConnect from "./mongodb/mongodb";

/**
 * Mengambil data author dari MongoDB secara statis.
 * Menggunakan getStaticProps untuk mendukung ISR (Incremental Static Regeneration).
 */
export async function getStaticProps() {
  // Hubungkan ke MongoDB
  await dbConnect();
  // Ambil data author dan gunakan .lean() untuk mengubah ke plain JS object
  const authors = await Authors.find().lean();
  
  return {
    props: {
      // Konversi object ke JSON untuk menghindari error serialisasi
      authors: JSON.parse(JSON.stringify(authors)),
    },
    // Mengaktifkan ISR dengan revalidate setiap 60 detik
    revalidate: 60,
  };
}
