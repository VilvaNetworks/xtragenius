"use client";

import { useState } from "react";

export default function ProductTabs({ description, productName }: { description?: string, productName: string }) {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">("description");

  return (
    <div className="w-full mt-20 border-t border-gray-100 pt-10">
      
      {/* Tab Headers */}
      <div className="flex justify-center gap-8 mb-10">
        <button 
          onClick={() => setActiveTab("description")}
          className={`text-[20px] font-bold pb-2 transition-colors relative ${
            activeTab === "description" ? "text-[#333333]" : "text-gray-400 hover:text-[#333333]"
          }`}
        >
          Description
          {activeTab === "description" && (
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#333333]"></span>
          )}
        </button>

        <button 
          onClick={() => setActiveTab("reviews")}
          className={`text-[20px] font-bold pb-2 transition-colors relative ${
            activeTab === "reviews" ? "text-[#333333]" : "text-gray-400 hover:text-[#333333]"
          }`}
        >
          Reviews (0)
          {activeTab === "reviews" && (
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#333333]"></span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="max-w-[900px] mx-auto text-[#666666] text-[15px] leading-relaxed">
        
        {activeTab === "description" && (
          <div className="flex flex-col gap-6 whitespace-pre-line">
            {description}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="flex flex-col gap-6">
            <h2 className="text-[24px] font-bold text-[#333333]">Reviews</h2>
            <p>There are no reviews yet.</p>

            <div className="mt-8">
              <span className="block text-[18px] font-bold text-[#333333] mb-4">
                Be the first to review "{productName}"
              </span>
              <p className="text-[14px] mb-6">
                Your email address will not be published. Required fields are marked *
              </p>

              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-[#333333]">Your rating: *</label>
                  <div className="flex gap-1 text-gray-300">
                    {/* Dummy stars for UI */}
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 cursor-pointer hover:text-[#ff6600]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Name *" className="w-full bg-[#f9f9f9] border border-gray-200 px-4 py-3 outline-none focus:border-[#ff6600]" />
                  <input type="email" placeholder="Email *" className="w-full bg-[#f9f9f9] border border-gray-200 px-4 py-3 outline-none focus:border-[#ff6600]" />
                </div>
                
                <textarea placeholder="Your review *" rows={6} className="w-full bg-[#f9f9f9] border border-gray-200 px-4 py-3 outline-none focus:border-[#ff6600]"></textarea>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="save-info" className="w-4 h-4" />
                  <label htmlFor="save-info" className="text-[14px]">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>

                <button type="submit" className="bg-[#333333] text-white px-8 py-3 font-semibold hover:bg-[#ff6600] transition-colors self-start">
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
