import { MerchandiseProductProps } from "./productProps";

// Kategori Merchandise
const MerchandiseProducts: MerchandiseProductProps[] = [
  // Merchandise Baju Dialogika
  {
    id: "Baju-Dialogika-2024",
    title: "Baju Dialogika 2024",
    price: 180000,
    createdData: "2024-12-11",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: undefined,
    discountPercentage: undefined,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    stock: 10,
  },

  // Merchandise Motivational Sticker
  {
    id: "Motivational-Sticker-set-1",
    title: "Motivational Sticker Pack 1",
    price: 20000,
    createdData: "2024-12-12",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: undefined,
    discountPercentage: undefined,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/e67195118033063.60978aafcabcf.png",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    stock: 6,
  },
  // Merchandise Sepatu
  {
    id: "Sepatu-model-1",
    title: "Sepatu",
    price: 180000,
    createdData: "2024-12-14",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: undefined,
    discountPercentage: undefined,
    gambar: [
      {
        id: 0,
        title: "Book Cover",
        src: "https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg",
      },
      {
        id: 1,
        title: "Book Cover 2",
        src: "https://images.pexels.com/photos/29575458/pexels-photo-29575458/free-photo-of-autumn-forest-reflection-in-bolu-turkiye.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    stock: 6,
  },
  // Merchandise Pins
  {
    id: "Pins-paket-1",
    title: "Pins paket 1",
    price: 48000,
    createdData: "2024-12-14",
    category: "Merchandise",
    deskripsi: `<p>lorem ipsum dolor sit amet</p>`,
    discountValue: undefined,
    discountPercentage: undefined,
    gambar: [
      {
        id: 0,
        title: "Pins Placeholder 1",
        src: "https://i.etsystatic.com/5912695/r/il/bbbde0/1852514490/il_794xN.1852514490_naww.jpg",
      },
      {
        id: 1,
        title: "Pins Placeholder 2",
        src: "https://i.etsystatic.com/10658618/r/il/a94569/1509731011/il_794xN.1509731011_pvvg.jpg",
      },
    ],
    stock: 6,
  },
];

export default MerchandiseProducts;
