import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// hooks
import { useLogin } from '../hooks/useLogin';
import { useForm } from "../hooks/useForm";
import { useStore } from '../store/user';
// components & utils
import Errors from '../components/Errors';
import errorHandler from '../utils/errorHandler';

export default function Login() {
    const [isError, setIsError] = useState(false);

    const user = useStore(state => state.user);
    const navigate = useNavigate();

    const [login, isLoading, error] = useLogin();
    const { values, onChange, onSubmit } = useForm(loginUser, {
        email: '',
        password: '',
    });

    const errors = errorHandler(error, values);

    function loginUser() {
        if (!errors === {}) {
            setIsError(true);
            return;
        };
        setIsError(false);
        login(values.email, values.password);
    }

    useEffect(() => {
        if (user) navigate('/');
    }, [user]);

    return (
        <div className="bg-red-400 p-5 w-72 h-96 mx-auto my-12 rounded-lg">
            <div className="bg-zinc-50 p-5 w-72 h-96 rounded-lg drop-shadow-xl">
                <h2 className="font-semibold text-lg text-center mb-2">Login</h2>
                <form onSubmit={onSubmit} autoComplete='off' noValidate className='flex flex-col items-center '>
                    <input
                        className='bg-zinc-100 border p-2 rounded-lg outline-none mb-5 w-full'
                        placeholder='Email'
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                    <input
                        className='bg-zinc-100 border p-2 rounded-lg outline-none mb-5 w-full'
                        placeholder='Password'
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                    <button
                        type='submit'
                        className='bg-red-400 p-3 w-full rounded-lg
                         text-zinc-50 mt-5 font-medium
                         hover:bg-red-500 transition ease-in-out
                         disabled:bg-slate-300'
                        disabled={isLoading}
                    >
                        Login
                    </button>
                </form>
                <h6 className='text-center mt-2'>
                    <small className='text-gray-500'>
                        Don't have an account? {' '}
                        <Link className='hover:text-gray-800' to='/signup'>Signup here</Link>
                    </small>
                </h6>
            </div>
            {!isError && <Errors errors={errors} />}
        </div>
    );
}