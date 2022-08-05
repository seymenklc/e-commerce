import { useStore } from '../store/user';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
    const user = useStore(state => state.user);

    return <>{user ? <Outlet /> : <Navigate to='/login' />}</>;
}