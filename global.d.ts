// Bagian ini sudah tidak dipakai lagi. Safe to delete
import mongoose from "mongoose";
declare namespace JSX {
  interface IntrinsicElements {
    "main-header": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    "main-footer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: { conn: mongoose.Connection | null; promise: Promise<mongoose.Connection> | null };
}
