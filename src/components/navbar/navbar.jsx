"use client"
import { AiOutlineCloseSquare, AiOutlineQuestionCircle } from 'react-icons/ai';
import './navs.css'
import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/slices/auth.slice';


export default function Navbar(){
    const [menuOpened, setMenuOpened] = useState(false);
    const router= useRouter();
    const auth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logout());
        router.refresh('/');
        router.push('/');
      };


    return (
        <div className='navs'>
            {/* top nav */}

            <div className="container top-nav">
                <div className="left-content">
                    <div className="info">
                        <AiOutlineQuestionCircle/>
                        <span><Link href={'#'}>Have a questions?</Link></span>
                    </div>
                    <div className="info">
                        <BsTelephoneFill/>
                        <span><Link href={'#'}>10 20 123 456</Link></span>
                    </div>
                    <div className="info">
                        <FiMail/>
                        <span><Link href={'#'}>maram.wannous@gmail.com</Link></span>
                    </div>
                </div>
                <div className="right-content">
                    <div className="info">
                        <BsFillShieldLockFill/>
                        {auth? (<span><Link href={'/'} onClick={handleLogout}>Logout</Link></span>)
                        :
                        (<span><Link href={'/login'}>Login</Link></span>)
                        }
                    </div>
                </div>
            </div>

            <div className="line"></div>

            {/* bottom nav */}

            <div className="container bottom-nav">
                <div className="logo">
                    <h1>Learner</h1>
                </div>
                
                <div>
                    <div className={(menuOpened) ? 'containt active' : 'containt'} >
                        <ul className='nav-items'>
                            <li><Link href={"/"} onClick={() => setMenuOpened((prev)=> !prev)}>Home</Link></li>
                            <li><Link href={"/courses"} onClick={() => setMenuOpened((prev)=> !prev)}>Courses</Link></li>
                            <li><Link href={'/teachers'} onClick={() => setMenuOpened((prev)=> !prev)}>Teachers</Link></li> 
                            <li><Link href={'/students'} onClick={() => setMenuOpened((prev)=> !prev)}>Students</Link></li> 
                            <li><button className='hero-btn'>enroll now</button></li>
                        </ul>
                        <div className="close-bar" onClick={() => setMenuOpened((prev)=> !prev)}>
                            <AiOutlineCloseSquare/>
                        </div>
                    </div>
                    <div className="menu-icon" onClick={() => setMenuOpened((prev)=> !prev)}>
                        <FaBars/>
                    </div>
                </div>
            </div>
        </div>
    );
}