import Link from "next/link";
import { HiChevronRight } from "react-icons/hi2";
import { PiAppleLogoFill } from "react-icons/pi";
import Image from "next/image";

const menu = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-6xl px-3 md:px-6 py-2">
      <div className="flex">
        <aside className="hidden md:block w-56 border-r border-zinc-200 pr-6">
        
          <ul className="pt-8 space-y-3">
            {menu.map((item) => (
              <li key={item} className="group flex items-center justify-between cursor-pointer hover:text-teal-700 font-medium text-sm">
                <span>{item}</span>
                {(item === "Woman's Fashion" || item === "Men's Fashion") && (
                  <HiChevronRight className="w-5 h-5 text-gray-500 group-hover:text-teal-500" />
                )}
              </li>
            ))}
          </ul>
        </aside>
        <section className="flex-1 md:pl-8">
          <div className="rounded-xl overflow-hidden bg-black text-white relative shadow-md">
            <div className="flex flex-col md:flex-row items-center h-80 md:h-96">
              <div className="flex-1 py-10 px-8 md:px-14">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center bg-zinc-900 rounded-full p-2">
                    <PiAppleLogoFill className="w-7 h-7" />
                  </span>
                  <span className="text-base md:text-lg font-normal opacity-80">iPhone 14 Series</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
                  Up to 10%<br />off Voucher
                </h1>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-black rounded-3xl px-7 py-2 font-semibold text-base shadow hover:bg-zinc-200 transition"
                >
                  Shop Now
                  <HiChevronRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex-1 relative h-48 md:h-auto">
              <Image 
              alt="iphone" 
              src={"/image/iphone.png"} 
              width={400} 
              height={80} 

              />
                
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {[0, 1, 2, 3, 4].map((dot) => (
                <span
                  key={dot}
                  className={`w-3 h-3 rounded-full border-2 ${
                    dot === 1 ? "bg-red-500 border-white" : "bg-white/50 border-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}