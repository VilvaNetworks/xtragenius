"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/data/products";

// Inline SVG Icons
const SearchIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

const HeartIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const ChartIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/>
  </svg>
);

const BagIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);

interface ActionButtonProps {
  icon: React.ReactNode;
  label: string;
}

const ActionButton = ({ icon, label }: ActionButtonProps) => (
  <div className="relative group/btn flex items-center justify-end">
    {/* Tooltip */}
    <div className="absolute right-full mr-2 whitespace-nowrap bg-[#ff6600] text-white text-xs font-semibold px-3 py-1.5 rounded opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible transition-all duration-300 transform translate-x-2 group-hover/btn:translate-x-0">
      {label}
      {/* Tooltip Arrow */}
      <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-[#ff6600]"></div>
    </div>
    {/* Button */}
    <button className="w-[45px] h-[45px] rounded-full bg-white text-gray-600 flex items-center justify-center shadow-md hover:bg-[#ff6600] hover:text-white transition-colors duration-300">
      {icon}
    </button>
  </div>
);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col">
      {/* Image & Actions Wrapper */}
      <div className="relative w-full aspect-square overflow-hidden bg-[#f9f9f9] rounded mb-4">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        
        {/* Slide-in Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-[150%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out z-10">
          <ActionButton icon={<SearchIcon />} label="Quick view" />
          <ActionButton icon={<BagIcon />} label="Read more" />
          <ActionButton icon={<HeartIcon />} label="Add to wishlist" />
          <ActionButton icon={<ChartIcon />} label="Compare" />
        </div>
      </div>

      {/* Product Details */}
      <div className="text-center px-2">
        <Link href={`/product/${product.slug}`} className="block">
          <h2 className="text-[16px] font-bold text-[#333333] hover:text-[#ff6600] transition-colors mb-2">
            {product.name}
          </h2>
        </Link>
        <div className="text-[#666666] text-[14px]">
          <span>Free! </span>
          <del className="text-gray-400">₹{product.originalPrice}</del>
        </div>
      </div>
    </div>
  );
}
