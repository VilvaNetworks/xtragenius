"use client";

import { useState } from "react";
import Link from "next/link";
import { type Product } from "@/lib/data/products";

// Inline SVG social icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const TumblrIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.364-4.323 1.406z"/></svg>
);

export default function ProductInfo({ product }: { product: Product }) {
  const [pincode, setPincode] = useState("");
  const [pincodeMessage, setPincodeMessage] = useState("");

  const handlePincodeCheck = () => {
    if (!pincode) {
      setPincodeMessage("This pincode field is required!");
      return;
    }
    
    // Simulate API call for the UI demo
    setPincodeMessage("Checking...");
    setTimeout(() => {
      // Mock success response
      setPincodeMessage(`You'll get your product by 3-5 days !`);
    }, 800);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[600px]">
      <h1 className="text-[32px] md:text-[40px] font-bold text-[#333333] leading-tight">
        {product.name}
      </h1>
      
      <div className="text-[18px]">
        <span className="text-[#666666]">Free! </span>
        <del className="text-[#cccccc]">₹{product.originalPrice}</del>
      </div>

      {/* Pincode Checker */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex max-w-[400px]">
          <input 
            type="text" 
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            className="flex-1 bg-[#f9f9f9] border border-gray-200 px-4 py-3 outline-none focus:border-[#ff6600] transition-colors"
          />
          <button 
            onClick={handlePincodeCheck}
            className="bg-[#ff6600] text-white px-6 font-semibold hover:bg-[#e65c00] transition-colors"
          >
            Check Pincode
          </button>
        </div>
        {pincodeMessage && (
          <div className={`text-sm ${pincodeMessage.includes('required') ? 'text-red-500' : 'text-[#333333]'}`}>
            {pincodeMessage}
          </div>
        )}
      </div>

      <hr className="border-gray-100 my-2" />

      {/* Meta Info */}
      <div className="flex flex-col gap-3 text-[14px]">
        <div className="flex items-center gap-2">
          <h6 className="font-semibold text-[#333333] m-0 min-w-[70px]">Sku:</h6>
          <span className="text-[#666666]">{product.sku || 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2">
          <h6 className="font-semibold text-[#333333] m-0 min-w-[70px]">Category:</h6>
          <Link 
            href={`/product-category/${product.categorySlug}`} 
            className="text-[#666666] hover:text-[#ff6600] transition-colors"
          >
            {product.categoryName}
          </Link>
        </div>
      </div>

      {/* Social Share */}
      <div className="flex items-center gap-2 mt-2">
        <h6 className="font-semibold text-[#333333] m-0 min-w-[70px] text-[14px]">Share:</h6>
        <div className="flex gap-2">
          <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ff6600] transition-colors" title="Facebook">
            <FacebookIcon />
          </a>
          <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ff6600] transition-colors" title="Twitter">
            <TwitterIcon />
          </a>
          <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ff6600] transition-colors" title="LinkedIn">
            <LinkedinIcon />
          </a>
          <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-[#ff6600] transition-colors" title="Tumblr">
            <TumblrIcon />
          </a>
        </div>
      </div>

    </div>
  );
}
