import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useStore } from "../store/user";

export const useForm = (callback, initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const user = useStore(state => state.user);
    const navigate = useNavigate();

    const onChange = (e) => {
        setValues(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (!user) navigate('/');
        callback();

        // set values 
        setValues(initialState);
    };

    return { values, onChange, onSubmit };
};