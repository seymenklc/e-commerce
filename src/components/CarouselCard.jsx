import { Link, useLocation } from 'react-router-dom';
import { CgShoppingCart } from 'react-icons/cg';
import { TbHeartOff } from 'react-icons/tb';
import { useCartStore } from '../store/cart';
import { useFavoritesStore } from '../store/favorites';

export default function CarouselCard({ product }) {
    const addToCart = useCartStore(state => state.addToCart);
    const removeFromFavorites = useFavoritesStore(state => state.removeFromFavorites);
    const location = useLocation();

    return (
        <div className='border border-red-400 h-40 flex items-center w-34 p-5 rounded-sm'>
            <img
                src={product.image}
                alt={product.description}
                className='object-cover p-1 h-32 w-24'
            />
            <Link to={`/product/${product.id}`} className="p-1 w-full">
                <p className="text-sm mx-10 font-semibold">{product.title}</p>
                <p className='ml-10 mt-2 font-medium'>${product.price}</p>
            </Link>
            {location.pathname === '/favorites' && (
                <button
                    onClick={() => removeFromFavorites(product.id)}
                    className='h-full p-2  text-red-400 hover:text-red-500'
                >
                    <TbHeartOff className='h-7 w-7' />
                </button>
            )}
            {location.pathname !== '/favorites' && (
                <button
                    onClick={() => addToCart(product)}
                    className='h-full p-2  text-red-400 hover:text-red-500'
                >
                    <CgShoppingCart className='h-7 w-7' />
                </button>
            )}
        </div>
    );
}