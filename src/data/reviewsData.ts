export interface ReviewItem {
  id: string;
  quote: string;
  source: string;
  rating: number;
  highlightTag?: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "review-1",
    quote: "Gak nyangka neon box parkir hasilnya sebagus ini awet juga.",
    source: "Pelanggan Google Maps Sidoarjo",
    rating: 5,
    highlightTag: "Neon Box & Signage Parkir",
  },
  {
    id: "review-2",
    quote: "Pelayanan bagus dan cepat, hasil memuaskan.",
    source: "Pelanggan Google Maps Sidoarjo",
    rating: 5,
    highlightTag: "Pelayanan & Ketepatan Waktu",
  },
  {
    id: "review-3",
    quote: "Produk sesuai dengan ekspektasi.",
    source: "Pelanggan Google Maps Sidoarjo",
    rating: 5,
    highlightTag: "Kualitas Presisi",
  },
  {
    id: "review-4",
    quote: "Hasil stiker bagus, warnanya cerah dan kertasnya tebel. Harganya masuk untuk dijual lagi.",
    source: "Pelanggan Google Maps Sidoarjo",
    rating: 5,
    highlightTag: "Stiker & Media Promosi",
  },
];
