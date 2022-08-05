import { useStore } from '../store/user';
import userIcon from '../assets/user-icon.png';

export default function Profile() {
    const user = useStore(state => state.user);

    return (
        <div className='mx-auto p-3 mt-12 w-96 h-96 flex items-center justify-center rounded-lg border-2 border-red-400 '>
            <div className='flex flex-col items-center mb-12 gap-3'>
                <img
                    src={userIcon}
                    alt="user icon"
                    className='h-32 w-32 border-4 border-red-400 rounded-full p-4'
                />
                <div className='flex flex-col items-center justify-center gap-1'>
                    <span className='text-xl text-gray-700 uppercase font-medium tracking-wide'>
                        {user.displayName}
                    </span>
                    <span className='text-lg text-gray-600 tracking-wide'>{user.email}</span>
                </div>
            </div>
        </div>
    );
}