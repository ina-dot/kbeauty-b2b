export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number; // EUR
  stock: number;
  image: string;
  tags?: string[];
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo?: string;
  productCount: number;
}

export const brands: Brand[] = [
  { id: "1", name: "COSRX", slug: "cosrx", description: "Effective skincare solutions with minimal ingredients", productCount: 0 },
  { id: "2", name: "Klairs", slug: "klairs", description: "Simple but enough skincare for sensitive skin", productCount: 0 },
  { id: "3", name: "SOME BY MI", slug: "some-by-mi", description: "Natural ingredients for problem skin", productCount: 0 },
  { id: "4", name: "PURITO", slug: "purito", description: "Safe and effective skincare", productCount: 0 },
  { id: "5", name: "Beauty of Joseon", slug: "beauty-of-joseon", description: "Traditional Korean beauty secrets", productCount: 0 },
  { id: "6", name: "numbuzin", slug: "numbuzin", description: "Number-based skincare solutions", productCount: 0 },
  { id: "7", name: "I'm from", slug: "im-from", description: "Pure natural ingredients from Korea", productCount: 0 },
  { id: "8", name: "rom&nd", slug: "romand", description: "Trendy K-Beauty makeup", productCount: 0 },
  { id: "9", name: "SKIN1004", slug: "skin1004", description: "Madagascar Centella skincare specialists", productCount: 0 },
  { id: "10", name: "One-day's you", slug: "one-days-you", description: "Daily skincare essentials", productCount: 0 },
  { id: "11", name: "OOTD", slug: "ootd", description: "Trendy K-Beauty masks and serums", productCount: 0 },
  { id: "12", name: "Axis-Y", slug: "axis-y", description: "Clean beauty with natural ingredients", productCount: 0 },
  { id: "13", name: "Arencia", slug: "arencia", description: "Natural rice-based cleansers and serums", productCount: 0 },
  { id: "14", name: "By Wishtrend", slug: "by-wishtrend", description: "Innovative skincare solutions", productCount: 0 },
];

// European Stock Products
export const products: Product[] = [
  // OOTD
  { id: "ootd-1", name: "Dark Circle Eye Serum (30g)", brand: "OOTD", category: "Serum", price: 4.61, stock: 60, image: "" },
  { id: "ootd-2", name: "Collagen Supreme Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 4.96, stock: 800, image: "" },
  { id: "ootd-3", name: "Ceramide Care Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 4.96, stock: 200, image: "" },
  { id: "ootd-4", name: "Cica Soothing Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 4.96, stock: 200, image: "" },
  { id: "ootd-5", name: "Triple Hyaluron Serum Glowing Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 4.96, stock: 200, image: "" },
  { id: "ootd-6", name: "Retinol Serum Plumping Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 4.96, stock: 120, image: "" },
  { id: "ootd-7", name: "Dark Spot Vitamin C Serum Mask (25ml*10ea)", brand: "OOTD", category: "Mask", price: 5.05, stock: 200, image: "" },
  { id: "ootd-8", name: "Hydrating Serum Sheet Mask (25ml*5ea)", brand: "OOTD", category: "Mask", price: 3.59, stock: 150, image: "" },
  { id: "ootd-9", name: "Collagen Lifting Hydrogel Mask (25ml*5ea)", brand: "OOTD", category: "Mask", price: 9.37, stock: 240, image: "" },

  // Axis-Y
  { id: "axis-1", name: "Daily Purifying Toner (200ml)", brand: "Axis-Y", category: "Toner", price: 8.50, stock: 60, image: "" },
  { id: "axis-2", name: "Daily Purifying Toner (80ml)", brand: "Axis-Y", category: "Toner", price: 4.86, stock: 200, image: "" },
  { id: "axis-3", name: "Dark Spot Correcting Glow Serum (50ml)", brand: "Axis-Y", category: "Serum", price: 7.61, stock: 500, image: "" },
  { id: "axis-4", name: "Vegan Collagen Eye Serum (10ml)", brand: "Axis-Y", category: "Serum", price: 8.53, stock: 600, image: "" },
  { id: "axis-5", name: "Complete No-Stress Physical Sunscreen SPF 50+ PA++++ (50ml)", brand: "Axis-Y", category: "Sunscreen", price: 8.08, stock: 100, image: "" },
  { id: "axis-6", name: "Sunday Morning Refreshing Cleansing Foam (120ml)", brand: "Axis-Y", category: "Cleanser", price: 5.70, stock: 72, image: "" },
  { id: "axis-7", name: "New Skin Resolution Gel Mask (100ml)", brand: "Axis-Y", category: "Mask", price: 8.43, stock: 144, image: "" },
  { id: "axis-8", name: "Heartleaf My Type Calming Cream (60ml)", brand: "Axis-Y", category: "Cream", price: 7.15, stock: 288, image: "" },
  { id: "axis-9", name: "Spot The Difference Blemish (15ml)", brand: "Axis-Y", category: "Treatment", price: 6.23, stock: 200, image: "" },
  { id: "axis-10", name: "PHA Resurfacing Glow Peel (50ml)", brand: "Axis-Y", category: "Exfoliator", price: 7.15, stock: 80, image: "" },
  { id: "axis-11", name: "Mugwort Green Vital Energy Complex Sheet Mask (27ml)", brand: "Axis-Y", category: "Mask", price: 1.38, stock: 300, image: "" },
  { id: "axis-12", name: "Dark Spot Correcting Glow Cream (50ml)", brand: "Axis-Y", category: "Cream", price: 8.08, stock: 144, image: "" },
  { id: "axis-13", name: "Dark Spot Correcting Glow Toner (200ml)", brand: "Axis-Y", category: "Toner", price: 8.43, stock: 225, image: "" },

  // SKIN1004
  { id: "skin-1", name: "Madagascar Centella Wateregel Sheet Ampoule Mask (25ml)", brand: "SKIN1004", category: "Mask", price: 1.00, stock: 300, image: "" },
  { id: "skin-2", name: "Madagascar Centella Toning Toner (200ml)", brand: "SKIN1004", category: "Toner", price: 13.67, stock: 25, image: "" },
  { id: "skin-3", name: "Madagascar Centella Toning Toner (30ml)", brand: "SKIN1004", category: "Toner", price: 3.65, stock: 200, image: "" },
  { id: "skin-4", name: "Madagascar Centella Poremizing Light Gel Cream (75ml)", brand: "SKIN1004", category: "Cream", price: 8.71, stock: 40, image: "" },
  { id: "skin-5", name: "Madagascar Centella Hyalu-Cica Silky-Fit Sun Stick (20g)", brand: "SKIN1004", category: "Sunscreen", price: 11.46, stock: 160, image: "" },
  { id: "skin-6", name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum (15ml)", brand: "SKIN1004", category: "Sunscreen", price: 20.31, stock: 117, image: "" },
  { id: "skin-7", name: "Madagascar Centella Light Cleansing Oil (200ml)", brand: "SKIN1004", category: "Cleanser", price: 10.32, stock: 120, image: "" },
  { id: "skin-8", name: "Madagascar Centella Ampoule (55ml)", brand: "SKIN1004", category: "Ampoule", price: 7.58, stock: 100, image: "" },
  { id: "skin-9", name: "Madagascar Centella Hyalu-Cica Water-Fit Sun Serum (100ml)", brand: "SKIN1004", category: "Sunscreen", price: 19.38, stock: 50, image: "" },
  { id: "skin-10", name: "Madagascar Centella Tone Brightening Capsule Ampoule", brand: "SKIN1004", category: "Ampoule", price: 8.50, stock: 50, image: "" },
  { id: "skin-11", name: "Madagascar Centella Ampoule (100ml)", brand: "SKIN1004", category: "Ampoule", price: 11.23, stock: 50, image: "" },
  { id: "skin-12", name: "Madagascar Centella Air-Fit Suncream Plus (50ml)", brand: "SKIN1004", category: "Sunscreen", price: 9.10, stock: 100, image: "" },
  { id: "skin-13", name: "Madagascar Centella Ampoule Foam (125ml)", brand: "SKIN1004", category: "Cleanser", price: 7.29, stock: 200, image: "" },
  { id: "skin-14", name: "Madagascar Centella Toning Toner (210ml)", brand: "SKIN1004", category: "Toner", price: 8.96, stock: 40, image: "" },
  { id: "skin-15", name: "Madagascar Centella Cream (75ml)", brand: "SKIN1004", category: "Cream", price: 11.08, stock: 104, image: "" },
  { id: "skin-16", name: "Madagascar Centella Air-Fit Suncream Light (50ml)", brand: "SKIN1004", category: "Sunscreen", price: 10.47, stock: 100, image: "" },
  { id: "skin-17", name: "Madagascar Centella Travel Kit", brand: "SKIN1004", category: "Set", price: 15.68, stock: 40, image: "" },
  { id: "skin-18", name: "Madagascar Centella Tone Brightening Capsule Ampoule (Large)", brand: "SKIN1004", category: "Ampoule", price: 12.15, stock: 50, image: "" },
  { id: "skin-19", name: "Madagascar Centella Poremizing Quick Clay Stick Mask", brand: "SKIN1004", category: "Mask", price: 9.42, stock: 80, image: "" },

  // Arencia
  { id: "aren-1", name: "Fresh Rosehip Rice Mochi Cleanser (120g)", brand: "Arencia", category: "Cleanser", price: 8.11, stock: 180, image: "" },
  { id: "aren-2", name: "Calendula Rice Mochi Cleanser (120g)", brand: "Arencia", category: "Cleanser", price: 8.11, stock: 180, image: "" },
  { id: "aren-3", name: "Holy Hyssop Serum 12 (30ml)", brand: "Arencia", category: "Serum", price: 8.02, stock: 196, image: "" },
  { id: "aren-4", name: "Red Smoothie Serum 8 (30ml)", brand: "Arencia", category: "Serum", price: 8.02, stock: 196, image: "" },
  { id: "aren-5", name: "Fresh Cloud Body & Scalp Scrub Geranium & Primrose (260g)", brand: "Arencia", category: "Body Care", price: 9.00, stock: 120, image: "" },
  { id: "aren-6", name: "Fresh Cloud Body & Scalp Scrub Lavender & Pear (260g)", brand: "Arencia", category: "Body Care", price: 9.00, stock: 120, image: "" },
  { id: "aren-7", name: "Fresh Cloud Body & Scalp Scrub White Tea & Neroli (260g)", brand: "Arencia", category: "Body Care", price: 9.00, stock: 120, image: "" },
  { id: "aren-8", name: "Fresh Cloud Body & Scalp Scrub French Mint & Lily (260g)", brand: "Arencia", category: "Body Care", price: 9.00, stock: 120, image: "" },
  { id: "aren-9", name: "Hyssop Fume Balm (30g)", brand: "Arencia", category: "Balm", price: 6.67, stock: 180, image: "" },

  // I'm from
  { id: "imfrom-1", name: "Honey Mask (120g)", brand: "I'm from", category: "Mask", price: 13.83, stock: 40, image: "" },
  { id: "imfrom-2", name: "Honey Serum (30ml)", brand: "I'm from", category: "Serum", price: 10.19, stock: 48, image: "" },
  { id: "imfrom-3", name: "Honey Glow Cream (50g)", brand: "I'm from", category: "Cream", price: 11.65, stock: 32, image: "" },
  { id: "imfrom-4", name: "Vitamin Tree Sheet Mask (22ml)", brand: "I'm from", category: "Mask", price: 1.43, stock: 320, image: "" },
  { id: "imfrom-5", name: "Rice Whip Facial Cleanser (150ml)", brand: "I'm from", category: "Cleanser", price: 7.45, stock: 80, image: "" },
  { id: "imfrom-6", name: "Rice Glow Peel Off Mask (70g)", brand: "I'm from", category: "Mask", price: 13.96, stock: 70, image: "" },
  { id: "imfrom-7", name: "Rice Sheet Mask (20ml)", brand: "I'm from", category: "Mask", price: 1.43, stock: 320, image: "" },
  { id: "imfrom-8", name: "Rice Sheet Mask (20mL*5ea)", brand: "I'm from", category: "Mask", price: 7.21, stock: 60, image: "" },
  { id: "imfrom-9", name: "Rice Toner Pad (140mL)", brand: "I'm from", category: "Toner", price: 12.96, stock: 45, image: "" },
  { id: "imfrom-10", name: "Rice Serum (30ml)", brand: "I'm from", category: "Serum", price: 9.83, stock: 72, image: "" },
  { id: "imfrom-11", name: "Rice Sunscreen (50ml)", brand: "I'm from", category: "Sunscreen", price: 9.83, stock: 140, image: "" },
  { id: "imfrom-12", name: "Mugwort Mask (110g)", brand: "I'm from", category: "Mask", price: 12.75, stock: 40, image: "" },
  { id: "imfrom-13", name: "Mugwort Sheet Mask (23ml)", brand: "I'm from", category: "Mask", price: 1.43, stock: 320, image: "" },
  { id: "imfrom-14", name: "Mugwort Sheet Mask (23mL*5ea)", brand: "I'm from", category: "Mask", price: 7.21, stock: 60, image: "" },
  { id: "imfrom-15", name: "Mugwort Gel Cleanser (150ml)", brand: "I'm from", category: "Cleanser", price: 6.55, stock: 80, image: "" },
  { id: "imfrom-16", name: "Mugwort Serum (30ml)", brand: "I'm from", category: "Serum", price: 11.56, stock: 56, image: "" },
  { id: "imfrom-17", name: "Mugwort Cream (50g)", brand: "I'm from", category: "Cream", price: 11.65, stock: 60, image: "" },
  { id: "imfrom-18", name: "Licorice Soothing Ampoule (30ml)", brand: "I'm from", category: "Ampoule", price: 10.93, stock: 48, image: "" },
  { id: "imfrom-19", name: "Licorice Calming Cream (50ml)", brand: "I'm from", category: "Cream", price: 10.19, stock: 72, image: "" },
  { id: "imfrom-20", name: "Honey Mask (30g)", brand: "I'm from", category: "Mask", price: 2.96, stock: 160, image: "" },
  { id: "imfrom-21", name: "Beet Purifying Mask (110g)", brand: "I'm from", category: "Mask", price: 9.27, stock: 45, image: "" },
  { id: "imfrom-22", name: "Rice Toner Pad (140mL) - New", brand: "I'm from", category: "Toner", price: 11.04, stock: 50, image: "" },

  // Klairs
  { id: "klairs-1", name: "Midnight Blue Clearing Water Cream (Sample)", brand: "Klairs", category: "Sample", price: 0.29, stock: 2000, image: "" },
  { id: "klairs-2", name: "Midnight Blue Calming Cream (Sample)", brand: "Klairs", category: "Sample", price: 0.29, stock: 1500, image: "" },
  { id: "klairs-3", name: "Freshly Juiced Vitamin Mask Cleanser", brand: "Klairs", category: "Cleanser", price: 4.46, stock: 24, image: "" },
  { id: "klairs-4", name: "Gentle Black Deep Cleansing (Sample)", brand: "Klairs", category: "Sample", price: 0.29, stock: 1000, image: "" },
  { id: "klairs-5", name: "Supple Preparation Unscented Toner", brand: "Klairs", category: "Toner", price: 6.18, stock: 30, image: "" },
  { id: "klairs-6", name: "Supple Preparation Facial Toner", brand: "Klairs", category: "Toner", price: 5.91, stock: 25, image: "" },
  { id: "klairs-7", name: "All-Day Airy Mineral Sunscreen SPF50+", brand: "Klairs", category: "Sunscreen", price: 10.20, stock: 25, image: "" },
  { id: "klairs-8", name: "Illuminating Supple Blemish Cream", brand: "Klairs", category: "Cream", price: 7.33, stock: 25, image: "" },
  { id: "klairs-9", name: "Midnight Blue Clearing Water Cream", brand: "Klairs", category: "Cream", price: 11.52, stock: 25, image: "" },
  { id: "klairs-10", name: "Freshly Juiced Vitamin Drop", brand: "Klairs", category: "Serum", price: 6.48, stock: 45, image: "" },
  { id: "klairs-11", name: "Fundamental Ampule Mist", brand: "Klairs", category: "Mist", price: 8.74, stock: 25, image: "" },
  { id: "klairs-12", name: "Rich Moist Foaming Cleanser", brand: "Klairs", category: "Cleanser", price: 5.32, stock: 25, image: "" },
  { id: "klairs-13", name: "Freshly Juiced Vitamin E Mask", brand: "Klairs", category: "Mask", price: 3.59, stock: 100, image: "" },
  { id: "klairs-14", name: "Gentle Black Facial Cleanser", brand: "Klairs", category: "Cleanser", price: 5.76, stock: 25, image: "" },
  { id: "klairs-15", name: "Rich Moist Soothing Tencel Sheet Mask", brand: "Klairs", category: "Mask", price: 0.97, stock: 210, image: "" },
  { id: "klairs-16", name: "Freshly Juiced Vitamin Essence Toner", brand: "Klairs", category: "Toner", price: 7.50, stock: 25, image: "" },

  // By Wishtrend
  { id: "wish-1", name: "Pore Smoothing Bakuchiol Sun Stick SP", brand: "By Wishtrend", category: "Sunscreen", price: 7.72, stock: 50, image: "" },
  { id: "wish-2", name: "Mandelic Acid Gentle Exfoliating Toner", brand: "By Wishtrend", category: "Toner", price: 7.55, stock: 30, image: "" },
];

export function getProductsByBrand(brandSlug: string): Product[] {
  const brand = brands.find(b => b.slug === brandSlug);
  if (!brand) return [];
  return products.filter(p => p.brand === brand.name);
}

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find(b => b.slug === slug);
}

// Initialize product counts
brands.forEach(brand => {
  brand.productCount = products.filter(p => p.brand === brand.name).length;
});
