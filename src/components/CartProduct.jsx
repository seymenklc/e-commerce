import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { useFavoritesStore } from '../store/favorites';
import { TbTrash } from 'react-icons/tb';
import { CgHeart } from 'react-icons/cg';
import { IoIosArrowDropup, IoIosArrowDropdown } from 'react-icons/io';
import Button from './Button';

export default function CartProduct({ product }) {
    const increaseQuantity = useCartStore(state => state.increaseQuantity);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const addToFavorites = useFavoritesStore(state => state.addToFavorites);

    return (
        <div className='border border-red-400 h-40 flex items-center w-34 p-5 rounded-md'>
            <img
                src={product.image}
                alt={product.description}
                className='object-cover p-1 h-32 w-24'
            />
            <Link to={`/product/${product.id}`} className="p-1 w-full">
                <p className="text-sm mx-10 font-semibold">{product.title}</p>
                <p className='ml-10 mt-2 font-medium'>${product.price}</p>
            </Link>
            <div className='p-1 flex flex-col items-center justify-center'>
                <Button
                    icon={CgHeart}
                    callback={addToFavorites}
                    value={product}
                    style={'my-2'}
                />
                <div className='flex flex-col items-center'>
                    <Button
                        icon={IoIosArrowDropup}
                        callback={increaseQuantity}
                        value={product.id}
                    />
                    <span>{product.qty}</span>
                    {product.qty > 1 && (
                        <>
                            <Button
                                icon={IoIosArrowDropdown}
                                callback={decreaseQuantity}
                                value={product.id}
                            />
                            <Button
                                icon={TbTrash}
                                callback={removeFromCart}
                                value={product.id}
                                style={'my-2'}
                            />
                        </>
                    )}
                    {product.qty < 2 && (
                        <Button
                            icon={TbTrash}
                            callback={removeFromCart}
                            value={product.id}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}