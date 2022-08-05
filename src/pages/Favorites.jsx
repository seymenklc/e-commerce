import { Link } from "react-router-dom";
import { useFavoritesStore } from "../store/favorites";
// components
import CarouselCard from "../components/CarouselCard";

export default function Favorites() {
    const favorites = useFavoritesStore(state => state.favorites);

    return (
        <>
            {favorites.length < 1 && (
                <p className="text-center font-bold text-2xl mt-6">
                    No Favorites.. <Link className="underline" to='/'>Want to add one or two?</Link>
                </p>
            )}
            {favorites.length > 0 && (
                <div className="mt-12 mx-auto w-[800px] flex  flex-wrap gap-5">
                    {favorites.map(product => (
                        <div key={product.id} className="w-96">
                            <CarouselCard product={product} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}