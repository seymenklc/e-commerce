import { Link } from 'react-router-dom';
import { useStore } from '../store/user';
import { useCartStore } from '../store/cart';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgShoppingCart } from 'react-icons/cg';

export default function Navbar() {
    const user = useStore(state => state.user);
    const logout = useStore(state => state.logout);
    const cart = useCartStore(state => state.cart);

    return (
        <nav className="bg-slate-50 drop-shadow-md h-20 w-full">
            <div className='flex mx-16 px-20 py-3 justify-between items-center'>
                <Link to='/' className='flex items-center cursor-pointer'>
                    <RiShoppingCartLine className='h-12 w-12 -skew-y-6' />
                    <span className='mx-2 font-bold text-2xl'>Cartly</span>
                </Link>
                <ul className='w-56 flex gap-2 justify-end items-center'>
                    <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                        <Link to='/'>Home</Link>
                    </li>
                    {!user && (
                        <>
                            <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                                <Link to='/signup'>Signup</Link>
                            </li>
                        </>
                    )}
                    {user && (
                        <>
                            <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                                <Link to='/profile'>Profile</Link>
                            </li>

                            <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                                <Link to='/favorites'>Favorites</Link>
                            </li>
                            <li className='font-medium text-lg hover:text-red-400 transition ease-in-out'>
                                <button onClick={logout}>Logout</button>
                            </li>
                        </>
                    )}
                    {cart.length > 0 && (
                        <li className='ml-5 font-medium text-lg hover:text-red-400 transition ease-in-out'>
                            <Link to='/cart'>
                                <span
                                    className='bg-red-400 text-center p-1 w-5 text-xs 
                                 rounded-full absolute top-2.5 right-[8.4rem] text-zinc-50 '>
                                    {cart.length}
                                </span>
                                <CgShoppingCart className='h-7 w-7' />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}