export type Product = {
  id: string;
  name: string;
  image: string;
  price: string;
  originalPrice: string;
  slug: string;
  sku?: string;
  categorySlug?: string;
  categoryName?: string;
  gallery?: string[];
  description?: string;
};

const flashCardsDescription = "Xtragenius Flash Cards help children build speed and confidence in mental arithmetic through quick-recall practice. Used alongside our Abacus programme, they reinforce number sense and make daily practice fun for young learners.";

const abacusToolDescription = "This is the same style of soroban abacus tool used in our Xtragenius Abacus classes — a classical rod-and-bead calculator that helps children visualize numbers and perform calculations mentally. A sturdy, child-friendly frame makes it easy to carry between home and class practice.\n\nWhy an abacus tool: working the beads by hand builds the visualization skills that let children eventually \"see\" the abacus in their mind and calculate without one — the core skill behind Xtragenius Abacus training.";

const franchiseeBookDescription = "An official Xtragenius Abacus workbook used by our franchise centres to guide students level by level, with structured practice sheets matched to the Abacus curriculum for this level.";

const schoolBookDescription = "An official Xtragenius Abacus practice book for this level, with structured exercises designed to build speed and accuracy in mental arithmetic as students progress through the programme.";

const vedicMathsBookDescription = "An official Xtragenius Vedic Maths workbook for this level, teaching fast calculation techniques drawn from ancient Indian sutras — quick multiplication, division and squaring without a calculator.";

const bagDescription = "A durable Xtragenius-branded school bag, sized for carrying practice books, an abacus tool and everyday school essentials to class.";

const tshirtDescription = "An official Xtragenius uniform T-shirt, worn by students at our centres and at national and international competitions.";

export const productsData: Record<string, Product[]> = {
  "flash-cards": [
    {
      id: "fc",
      name: "Flash Cards",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "flash-cards",
      sku: "fc",
      categorySlug: "flash-cards",
      categoryName: "Flash cards",
      gallery: ["/images/products/placeholder.svg"],
      description: flashCardsDescription,
    }
  ],
  "abacus-tool": [
    {
      id: "7rbca",
      name: "7 Rod Brown Colour Abacus Tool",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "7-rod-brown-colour-abacus-tool",
      sku: "7rbca",
      categorySlug: "abacus-tool",
      categoryName: "Abacus tool",
      gallery: ["/images/products/placeholder.svg"],
      description: abacusToolDescription,
    },
    {
      id: "7rma",
      name: "7 Rod Multicolour Abacus Tool",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "7-rod-multicolour-abacus-tool",
      sku: "7rma",
      categorySlug: "abacus-tool",
      categoryName: "Abacus tool",
      gallery: ["/images/products/placeholder.svg"],
      description: abacusToolDescription,
    },
    {
      id: "ea17b",
      name: "Educational Abacus 17 Rod Brown Color Abacus Tool for Kids",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "educational-abacus-17-rod-brown-color-abacus-tool-for-kids",
      sku: "",
      categorySlug: "abacus-tool",
      categoryName: "Abacus tool",
      gallery: [
        "/images/products/placeholder.svg",
        "/images/products/placeholder.svg"
      ],
      description: abacusToolDescription,
    },
    {
      id: "ea17m",
      name: "Educational Abacus 17 Rod Multi Color Abacus Tool for Kids",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "educational-abacus-17-rod-multi-color-abacus-tool-for-kids-copy",
      sku: "",
      categorySlug: "abacus-tool",
      categoryName: "Abacus tool",
      gallery: ["/images/products/placeholder.svg"],
      description: abacusToolDescription,
    },
    {
      id: "ea17y",
      name: "Educational Abacus 17 Rod Yellow Color Abacus Tool for Kids",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "educational-abacus-17-rod-yellow-color-abacus-tool-for-kids",
      sku: "",
      categorySlug: "abacus-tool",
      categoryName: "Abacus tool",
      gallery: ["/images/products/placeholder.svg"],
      description: abacusToolDescription,
    }
  ],
  "franchisee-books": [
    { id: "sb1A", name: "A4 Size Abacus Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-1a", sku: "sb1A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb1B", name: "A4 Size Abacus Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-1b", sku: "sb1B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb2A", name: "A4 Size Abacus Book Level 2A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-2a", sku: "sb2A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb2B", name: "A4 Size Abacus Book Level 2B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-2b", sku: "sb2B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb3A", name: "A4 Size Abacus Book Level 3A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-3a", sku: "sb3A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb3B", name: "A4 Size Abacus Book Level 3B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-3b", sku: "sb3B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb4A", name: "A4 Size Abacus Book Level 4A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-4a", sku: "sb4A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription },
    { id: "sb4B", name: "A4 Size Abacus Book Level 4B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-4b", sku: "sb4B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: franchiseeBookDescription }
  ],
  "school-books": [
    { id: "fb1A", name: "Small Abacus Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-1a", sku: "fb1A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb1B", name: "Small Abacus Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-1b", sku: "fb1B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb2A", name: "Small Abacus Book Level 2A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-2a", sku: "fb2A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb2B", name: "Small Abacus Book Level 2B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-2b", sku: "fb2B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb3A", name: "Small Abacus Book Level 3A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-3a", sku: "fb3A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb3B", name: "Small Abacus Book Level 3B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-3b", sku: "fb3B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb4A", name: "Small Abacus Book Level 4A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-4a", sku: "fb4A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription },
    { id: "fb4B", name: "Small Abacus Book Level 4B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-4b", sku: "fb4B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: schoolBookDescription }
  ],
  "vedic-maths": [
    { id: "vm1A", name: "Vedic Maths Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-1a", sku: "vm1A", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: vedicMathsBookDescription },
    { id: "vm1B", name: "Vedic Maths Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-1b", sku: "vm1B", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: vedicMathsBookDescription },
    { id: "vm2", name: "Vedic Maths Book Level 2", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-2", sku: "vm2", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: vedicMathsBookDescription },
    { id: "vm3", name: "Vedic Maths Book Level 3", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-3", sku: "vm3", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: vedicMathsBookDescription },
    { id: "vm4", name: "Vedic Maths Book Level 4", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-4", sku: "vm4", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: vedicMathsBookDescription }
  ],
  "bag": [
    {
      id: "xb",
      name: "Xtragenius Bag",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "xtragenius-bag-mrp-150-sell-price-120",
      sku: "xb",
      categorySlug: "bag",
      categoryName: "Bag",
      gallery: ["/images/products/placeholder.svg"],
      description: bagDescription,
    }
  ],
  "t-shirt": [
    {
      id: "ts1",
      name: "Tshirt1",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "tshirt1",
      sku: "ts1",
      categorySlug: "t-shirt",
      categoryName: "T shirt",
      gallery: ["/images/products/placeholder.svg"],
      description: tshirtDescription,
    },
    {
      id: "ts2",
      name: "Tshirt2",
      image: "/images/products/placeholder.svg",
      price: "0.00",
      originalPrice: "0.00",
      slug: "tshirt2",
      sku: "ts2",
      categorySlug: "t-shirt",
      categoryName: "T shirt",
      gallery: ["/images/products/placeholder.svg"],
      description: tshirtDescription,
    }
  ]
};

export const getCategoryName = (slug: string) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export const getProductBySlug = (slug: string): Product | undefined => {
  for (const category in productsData) {
    const found = productsData[category].find(p => p.slug === slug);
    if (found) return found;
  }
  return undefined;
};
