"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ gallery, altText }: { gallery: string[], altText: string }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // If there are no images, show a placeholder or nothing
  if (!gallery || gallery.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Main Image Container */}
      <div 
        className="relative w-full aspect-square bg-[#f9f9f9] border border-gray-100 cursor-zoom-in overflow-hidden"
        onClick={() => setIsLightboxOpen(true)}
      >
        <Image 
          src={gallery[activeImageIndex]} 
          alt={`${altText} main image`} 
          fill 
          className="object-contain p-4"
          priority
        />
      </div>

      {/* Thumbnails (only show if more than 1 image) */}
      {gallery.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {gallery.map((imgUrl, index) => (
            <div 
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`relative w-[100px] h-[80px] flex-shrink-0 cursor-pointer border-2 transition-colors ${
                activeImageIndex === index ? 'border-[#ff6600]' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image 
                src={imgUrl} 
                alt={`${altText} thumbnail ${index + 1}`} 
                fill 
                className="object-contain p-1"
              />
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-95 flex flex-col items-center justify-center">
          
          {/* Top Toolbar */}
          <div className="absolute top-0 right-0 w-full flex justify-end p-4 text-white gap-6">
            <div className="mr-auto pl-4 flex items-center text-sm font-semibold text-gray-300">
              {activeImageIndex + 1} / {gallery.length}
            </div>
            
            <a 
              href={gallery[activeImageIndex]} 
              download 
              target="_blank" 
              className="opacity-70 hover:opacity-100 transition-opacity"
              title="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            </a>

            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="opacity-70 hover:opacity-100 transition-opacity"
              title="Close (Esc)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>
            </button>
          </div>

          {/* Main Lightbox Image */}
          <div className="relative w-full max-w-[80vw] h-[80vh] flex items-center justify-center">
            <Image 
              src={gallery[activeImageIndex]} 
              alt={`${altText} lightbox image`} 
              fill 
              className="object-contain"
              unoptimized // sometimes helps with external high-res images in lightboxes
            />
          </div>

          {/* Navigation Arrows */}
          {gallery.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-8 top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100 bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
              </button>
              
              <button 
                onClick={handleNext}
                className="absolute right-8 top-1/2 -translate-y-1/2 text-white opacity-50 hover:opacity-100 bg-black/50 hover:bg-black/80 rounded-full p-4 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </button>
            </>
          )}
          
          {/* Lightbox Title/Subtitle */}
          <div className="absolute bottom-8 text-white font-semibold text-lg drop-shadow-md">
            {altText}
          </div>

        </div>
      )}
    </div>
  );
}
