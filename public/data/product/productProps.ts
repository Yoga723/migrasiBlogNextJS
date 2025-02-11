// Kita menggunakan Typescript yang sangat ketat sehingga untuk Property opsional, Tambahkan tanya "?". Contoh jumlahStock?: number
export interface BaseProductProps {
  id: string;
  title: string;
  price: number;
  quantity?: number; //Jumlah barang yang di pesan/didalam cart
  createdData: string;
  category: string; // "E-Book" atau "Merchandise" atau "Video"
  deskripsi: string;
  discountValue?: number;
  discountPercentage?: number;
  gambar: { id: number; title: string; src: string }[];
}

export interface EBookProductProps extends BaseProductProps {
  availableFormat: string[]; // ["PDF", ".txt", ".EPUB", dll]
  genre: string[]; // ["fiksi", "Komedi", "Romance"]
  author: string[]; // Contoh authornya ["penulis 1", "penulis 2"]
}
export function isEBook(product: ProductProps): product is EBookProductProps {
  return product.category.toLowerCase() === "e-book";
}

export interface MerchandiseProductProps extends BaseProductProps {
  stock: number; // Jumlah Stock yang tersedia
  sizeOptions?: string[]; // ["S", "M", "L", "XL"]
}
export function isMerchandise(product: ProductProps): product is MerchandiseProductProps {
  return product.category.toLowerCase() === "merchandise";
}

export interface VideoProductProps extends BaseProductProps {
  duration: string; // "2 jam 30 menit" atau "9000 detik"
  resolution: string[]; // ["720p", "1080p"]
}

export function isVideo(product: ProductProps): product is VideoProductProps {
  return product.category.toLowerCase() === "video";
}

// Combine semua extends type props
export type ProductProps = EBookProductProps | MerchandiseProductProps | VideoProductProps;
