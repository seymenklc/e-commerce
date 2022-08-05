import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import { CgHeart, CgShoppingCart } from 'react-icons/cg';
import { TbHeartOff } from 'react-icons/tb';
import { useCartStore } from '../store/cart';
import { useFavoritesStore } from '../store/favorites';
import Button from '../components/Button';

export default function ProductDetails() {
    const { id } = useParams();
    const { data: product, isLoading, error } = useFetchProducts(null, null, id);

    const addToCart = useCartStore(state => state.addToCart);
    const addToFavorites = useFavoritesStore(state => state.addToFavorites);
    const removeFromFavorites = useFavoritesStore(state => state.removeFromFavorites);
    const favorites = useFavoritesStore(state => state.favorites);

    const favorited = favorites?.find(p => p.id === product?.id);

    return (
        <>
            {isLoading && <p className='text-center'>Loading...</p>}
            {product && (
                <div className='bg-zinc-50 shadow-2xl p-6 mt-5 
                mx-auto max-w-[1000px] max-h-[700px] flex gap-5 
                items-start justify-center'
                >
                    <div className='flex flex-col w-[900px]'>
                        <img
                            src={product.image}
                            alt={product.title}
                            className='object-fit h-96 w-full'
                        />
                        <div className='w-full flex justify-between gap-5 mt-10'>
                            <div className='flex flex-col text-lg'>
                                <label>Rate</label>
                                <label>Count</label>
                                <label>Category</label>
                            </div>
                            <div className='flex flex-col items-end text-lg'>
                                <span>{product.rating.rate}</span>
                                <span>{product.rating.count}</span>
                                <span>{product.category}</span>
                            </div>
                        </div>
                    </div>
                    <div className='h-[495px] p-5 flex flex-col justify-between items-center'>
                        <div className='flex flex-col gap-5'>
                            <h4 className='text-2xl font-medium'>{product.title}</h4>
                            <h5 className='text-lg'>{product.description}</h5>
                            <h6 className='text-3xl font-semibold'>${product.price}</h6>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            {favorited ? (
                                <Button
                                    icon={TbHeartOff}
                                    callback={removeFromFavorites}
                                    value={product.id}
                                    style={'p-3 bg-red-400 text-zinc-50 rounded-md hover:bg-red-500'}
                                />
                            ) : (
                                <Button
                                    icon={CgHeart}
                                    callback={addToFavorites}
                                    value={product}
                                    style={'p-3 bg-red-400 text-zinc-50 rounded-md hover:bg-red-500'}
                                />
                            )}
                            <div
                                className='flex items-center gap-2 hover:bg-red-500
                                p-3 cursor-pointer bg-red-400 rounded-md'
                                onClick={() => addToCart(product)}
                            >
                                <Button
                                    icon={CgShoppingCart}
                                    callback={addToCart}
                                    value={product}
                                    style={'text-zinc-50'}
                                />
                                <span className='text-lg text-zinc-50 font-medium'>
                                    Add To Cart
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}