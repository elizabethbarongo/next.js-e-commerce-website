"use client";
import FlashSales from "./components/flashSales";
import HeroSection from "./components/homepage";
import Browse from "./components/browse";
import Footer from "@/components/Footer";
import BestSelling from "./components/bestselling";
import Category from "./components/category";
import Explore from "./components/explore";
import NewArrival from "./components/newarrival";

export default function HomeSection(){
    return(
        <div>
            
            <HeroSection/>
            <FlashSales/>
            <Browse/>
            <BestSelling/>
            <Category/>
            <Explore/>
            <NewArrival/>
            <Footer/>
      

        </div>
    );
}