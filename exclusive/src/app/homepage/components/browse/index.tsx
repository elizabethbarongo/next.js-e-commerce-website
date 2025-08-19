'use client';

import { useRef } from 'react';
import {
  MdPhoneIphone, MdComputer, MdWatch, MdCameraAlt, MdHeadphones, MdSportsEsports, MdTablet, MdTv, MdSpeaker,
} from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const categoryList = [
  { label: 'Phones', Icon: MdPhoneIphone },
  { label: 'Computers', Icon: MdComputer },
  { label: 'SmartWatch', Icon: MdWatch },
  { label: 'Camera', Icon: MdCameraAlt, isActive: true },
  { label: 'HeadPhones', Icon: MdHeadphones },
  { label: 'Gaming', Icon: MdSportsEsports },
  { label: 'Tablet', Icon: MdTablet },
  { label: 'TV', Icon: MdTv },
  { label: 'Speakers', Icon: MdSpeaker },
  { label: 'Phones', Icon: MdPhoneIphone },
  { label: 'Computers', Icon: MdComputer },
  { label: 'SmartWatch', Icon: MdWatch },
  { label: 'Camera', Icon: MdCameraAlt },
];

export default function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = 600;

  const handleScrollLeft = () => {
    containerRef.current?.scrollBy({ left: -scrollByAmount, behavior: 'smooth' });
  };

  const handleScrollRight = () => {
    containerRef.current?.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-7 lg:px-10 py-9 border-b border-gray-300">
      <div className="flex items-center space-x-3 mb-5">
        <span className="w-6 h-11 rounded-md bg-[#DB4444]" />
        <span className="font-semibold text-lg text-[#DB4444]">Categories</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 mb-5">
        <h2 className="text-4xl font-semibold text-black tracking-tight">Browse By Category</h2>
        <div className="flex space-x-5">
          <button
            onClick={handleScrollLeft}
            aria-label="Scroll Left"
            className="p-2 rounded-full bg-white shadow-md text-black w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            onClick={handleScrollRight}
            aria-label="Scroll Right"
            className="p-2 rounded-full bg-white shadow-md text-black w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-7 sm:gap-9 md:gap-11 lg:gap-14 overflow-x-auto scroll-smooth hide-scrollbar pb-2"
      >
        {categoryList.map(({ label, Icon, isActive }, index) => (
          <div
            key={`${label}-${index}`}
            className={`flex-shrink-0 w-40 sm:w-44 md:w-48 lg:w-52 h-40 sm:h-44 md:h-48 lg:h-52 flex flex-col items-center justify-center bg-[#FAFAFA] rounded-lg shadow border transition-colors duration-300 cursor-pointer ${
              isActive
                ? 'border-[#DB4444] text-[#DB4444] font-semibold'
                : 'border-gray-300 text-gray-700 hover:border-[#DB4444] hover:text-[#DB4444]'
            }`}
          >
            <Icon
              className={`mb-3 ${
                isActive ? 'text-[#DB4444]' : 'text-gray-700 group-hover:text-[#DB4444]'
              }`}
              size={26}
            />
            <span className="text-base font-medium text-center">{label}</span>
          </div>
        ))}
        <div className="w-7 flex-shrink-0" />
      </div>
    </section>
  );
}
