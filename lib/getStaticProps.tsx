/**
 * Mengambil data author dari MongoDB. Untuk link urlnya menggunakan vercel dialogika.
 * Menggunakan getStaticProps untuk mendukung ISR (Incremental Static Regeneration).
 */
// lib/getStaticProps.ts
export async function getStaticAuthorsProps() {
  try {
    // Call the API endpoint hosted on Vercel using its absolute URL
    const res = await fetch("https://blog-admin-dialogikas-projects.vercel.app/blog/api/admin/authors/");
    if (!res.ok) {
      throw new Error(`Failed to fetch authors: ${res.statusText}`);
    }
    const authors = await res.json();

    return {
      props: {
        authors, // this is the array of authors
      },
      revalidate: 60, // Enable ISR to revalidate every 60 seconds
    };
  } catch (error) {
    console.error("Error in getStaticAuthorsProps:", error);
    // Optionally, you could return fallback props or rethrow the error
    return {
      props: {
        authors: [],
      },
      revalidate: 60,
    };
  }
}
