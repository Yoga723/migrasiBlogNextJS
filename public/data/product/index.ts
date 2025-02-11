import MerchandiseProducts from "./merchandise";
import EbookProducts from "./e-books";
import { ProductProps } from "./productProps";

// Spread semua isi dari array dan memasukkannya ke AllProducts
const AllProducts: ProductProps[] = [...EbookProducts, ...MerchandiseProducts];

export default AllProducts;
