export interface BusinessInfo {
  name: string;
  tagline: string;
  category: string;
  address: {
    street: string;
    village: string;
    district: string;
    regency: string;
    province: string;
    postalCode: string;
    full: string;
  };
  phone: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappDefaultMessage: string;
  website: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
  reputation: {
    googleRating: number;
    reviewsCount: number;
    locationLabel: string;
  };
  operatingHours: {
    days: string;
    hours: string;
  };
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "Surya Reklame dan Advertising",
  tagline: "Creating Visual Identity That Stands Out.",
  category: "Toko Reklame / Advertising / Signage",
  address: {
    street: "Jl. Raya Suko No.64",
    village: "Ngemplak, Suko",
    district: "Kec. Sidoarjo",
    regency: "Kabupaten Sidoarjo",
    province: "Jawa Timur",
    postalCode: "61224",
    full: "Jl. Raya Suko No.64, Ngemplak, Suko, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61224",
  },
  phone: "0821-3941-4885",
  whatsapp: "0821-3941-4885",
  whatsappRaw: "6282139414885",
  whatsappDefaultMessage: "Halo Surya Reklame, saya ingin berkonsultasi mengenai kebutuhan reklame.",
  website: "https://suryareklame.gmaps.id",
  googleMapsUrl: "https://maps.app.goo.gl/LN8s6zwae2Xwuziu5",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.402664972778!2d112.684128!3d-7.447551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e10034a74991%3A0xb3047d8487779bc9!2sSurya%20Reklame%20dan%20advertising!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid",
  socials: {
    instagram: "https://www.instagram.com/neonbox_termurah.sidoarjo/",
    facebook: "https://www.facebook.com/share/18mXNRkPLF/",
    tiktok: "https://www.tiktok.com/@neonbox_murah_sidoarjo",
  },
  reputation: {
    googleRating: 5.0,
    reviewsCount: 30,
    locationLabel: "Sidoarjo, Jawa Timur",
  },
  operatingHours: {
    days: "Senin – Sabtu",
    hours: "08.00 – 16.00 WIB",
  },
};

export const getWhatsAppLink = (customText?: string): string => {
  const text = customText || BUSINESS_INFO.whatsappDefaultMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
};
