"use client"
import { useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '@/store/actions/auth.action';
import { useRouter } from 'next/navigation';
export default function Login() {

    const[name, setName] = useState('');
    const[password, setPassword] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();
    const loading = useSelector((state) => state.auth.isLoading);
    const user = useSelector((state) => state.auth.user);
    const [error, setErr] = useState("");

   

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = [
            {
                name: name,
                password: password,
            },
        ];
       dispatch(login())
       .then(res => {
            if (res.payload[0].naim === formData[0].name && res.payload[0].password === formData[0].password) {
                router.refresh('/');
                router.push('/');
            }else {
                setErr("wrong name or password");
            }
        });
      };

    return (
        <div className="log-overlay">
        <form className="login" onSubmit={handleSubmit}>
            <h1>Log in to be able access crud process</h1>
            <div className='login-faild'>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} id="1" placeholder="Enter your name..." />
            </div>
            <div className='login-faild'>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} id="2" placeholder="Enter your name..." />
            </div>
            <div className='login-faild'>
                <button type='submit' className='btn'>
                    {loading? 'loading...' : 'Login'}
                </button>
            </div>
            {error !== "" && <span className="error">{error}</span>}
        </form>
        </div>
    )
}