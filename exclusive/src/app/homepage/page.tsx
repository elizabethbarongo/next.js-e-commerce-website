"use client";
import FlashSales from "./components/flashSales";
import HeroSection from "./components/homepage";
import Browse from "./components/browse"
import Footer from "@/components/Footer";
import BestSelling from "./components/bestselling";
export default function HomeSection(){
    return(
        <div>
            
            <HeroSection/>
            <FlashSales/>
            <Browse/>
            <BestSelling/>
            <Footer/>
        </div>
    );
}