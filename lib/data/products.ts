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

const defaultDescription = "Xtragenius presents a range of exciting toys for the young and budding minds. This toy/toy set sparks up the creativity in children and indulges them in hours of non-stop fun and learning experience. They are designed to be loveable by kids and at the same time embrace and enjoyable method to teach something new.\n\nPROFESSIONAL RELIABILITY GOES BACK CENTURIES: This digit standard abacus/ soroban calculator is the abacus in classical form, featuring the system used before modern numerals that are still used in parts of the world by merchants, traders, and clerks.\n\nA GREAT EDUCATIONAL TOOL: When learning on the abacus, math practice can be more effective because you may remember more. This makes using an abacus for kids math a great way to teach them how to count and equate and is widely used this way.\n\nSOLID PLASTIC FRAME: Quality design has been taken to the next level with this digit standard soroban abacus with a plastic frame, making it a decorative piece that’s home friendly.";

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
      description: defaultDescription,
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
      description: defaultDescription,
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
      description: defaultDescription,
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
      description: defaultDescription,
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
      description: defaultDescription,
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
      description: defaultDescription,
    }
  ],
  "franchisee-books": [
    { id: "sb1A", name: "A4 Size Abacus Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-1a", sku: "sb1A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb1B", name: "A4 Size Abacus Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-1b", sku: "sb1B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb2A", name: "A4 Size Abacus Book Level 2A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-2a", sku: "sb2A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb2B", name: "A4 Size Abacus Book Level 2B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-2b", sku: "sb2B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb3A", name: "A4 Size Abacus Book Level 3A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-3a", sku: "sb3A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb3B", name: "A4 Size Abacus Book Level 3B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-3b", sku: "sb3B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb4A", name: "A4 Size Abacus Book Level 4A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-4a", sku: "sb4A", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "sb4B", name: "A4 Size Abacus Book Level 4B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "a4-size-abacus-book-level-4b", sku: "sb4B", categorySlug: "franchisee-books", categoryName: "Franchisee books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription }
  ],
  "school-books": [
    { id: "fb1A", name: "Small Abacus Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-1a", sku: "fb1A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb1B", name: "Small Abacus Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-1b", sku: "fb1B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb2A", name: "Small Abacus Book Level 2A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-2a", sku: "fb2A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb2B", name: "Small Abacus Book Level 2B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-2b", sku: "fb2B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb3A", name: "Small Abacus Book Level 3A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-3a", sku: "fb3A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb3B", name: "Small Abacus Book Level 3B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-3b", sku: "fb3B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb4A", name: "Small Abacus Book Level 4A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-4a", sku: "fb4A", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "fb4B", name: "Small Abacus Book Level 4B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "small-abacus-book-level-4b", sku: "fb4B", categorySlug: "school-books", categoryName: "School books", gallery: ["/images/products/placeholder.svg"], description: defaultDescription }
  ],
  "vedic-maths": [
    { id: "vm1A", name: "Vedic Maths Book Level 1A", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-1a", sku: "vm1A", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "vm1B", name: "Vedic Maths Book Level 1B", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-1b", sku: "vm1B", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "vm2", name: "Vedic Maths Book Level 2", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-2", sku: "vm2", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "vm3", name: "Vedic Maths Book Level 3", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-3", sku: "vm3", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: defaultDescription },
    { id: "vm4", name: "Vedic Maths Book Level 4", image: "/images/products/placeholder.svg", price: "0.00", originalPrice: "0.00", slug: "vedic-maths-book-level-4", sku: "vm4", categorySlug: "vedic-maths", categoryName: "Vedic maths", gallery: ["/images/products/placeholder.svg"], description: defaultDescription }
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
      description: defaultDescription,
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
      description: defaultDescription,
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
      description: defaultDescription,
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
