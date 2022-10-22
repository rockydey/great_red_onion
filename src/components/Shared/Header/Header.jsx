import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../../images/logo2.png';
import Cart from '../../../images/icons/cart.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center my-3'>
            <div className="logo md:ml-10">
                <Link to="/home"><img src={Logo} className="w-40" alt="" /></Link>
            </div>
            <div className="menu md:mr-10">
                <ul className='flex items-center'>
                    <li><Link className='active:bg-white hover:bg-white'><img src={Cart} className="w-7" alt="" /></Link></li>
                    <li><Link to="/login" className='font-semibold active:bg-white hover:bg-white'>Login</Link></li>
                    <li><Link to="/signup" className='signup-btn px-5 py-2 rounded-full text-white font-semibold'>Sign Up</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;