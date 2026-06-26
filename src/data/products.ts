import { Product } from "@/store/cartSlice";

export interface ExtendedProduct extends Product {
  sizes: string[];
  colors: { name: string; hex: string }[];
}

const products: ExtendedProduct[] = [
  {
    id: 1,
    name: "AeroSwift Running Shoe",
    price: 120,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600",
    description: "Engineered for maximum speed and durability, featuring a breathable mesh upper and responsive lightweight cushioning.",
    category: "Running",
    stock: 15,
    sizes: ["8", "9", "10", "11", "12"],
    colors: [
      { name: "Crimson Red", hex: "#dc2626" },
      { name: "Ink Black", hex: "#0f172a" },
    ],
  },
  {
    id: 2,
    name: "Apex Court Basketball Shoe",
    price: 150,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=600",
    description: "Dominate the court with superior ankle support, high-traction rubber soles, and energy-returning midsole tech.",
    category: "Basketball",
    stock: 8,
    sizes: ["9", "10", "11", "12"],
    colors: [
      { name: "Volt Green", hex: "#84cc16" },
      { name: "Electric Blue", hex: "#2563eb" },
    ],
  },
  {
    id: 3,
    name: "Classic Retro Sneaker",
    price: 95,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=600",
    description: "A timeless silhouette hand-crafted from premium full-grain leather, perfect for everyday casual elegance.",
    category: "Casual",
    stock: 22,
    sizes: ["7", "8", "9", "10", "11"],
    colors: [
      { name: "Tan Brown", hex: "#b45309" },
      { name: "Off White", hex: "#f1f5f9" },
    ],
  },
  {
    id: 4,
    name: "Court Glide Tennis Shoe",
    price: 110,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600",
    description: "Designed for rapid lateral movements on court, offering reinforced toe caps and lateral stability wrap systems.",
    category: "Tennis",
    stock: 12,
    sizes: ["8", "9", "10", "11"],
    colors: [
      { name: "Cyber Purple", hex: "#c084fc" },
      { name: "Cloud White", hex: "#ffffff" },
    ],
  },
];

export default products;
