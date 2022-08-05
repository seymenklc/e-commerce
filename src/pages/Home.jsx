import { useState } from "react";
// components
import Hero from "../components/Hero";
import CardCarousel from "../components/CardCarousel";
import Categories from "../components/Categories";
import Products from "../components/Products";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className='mx-auto max-w-7xl'>
            <Hero />
            <CardCarousel />
            <Categories setSelectedCategory={setSelectedCategory} />
            <Products selectedCategory={selectedCategory} />
        </div>
    );
}
