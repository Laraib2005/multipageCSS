import React from 'react'
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'
const Header = () => {
    return (
        <header className='header'>
            <h1 className='logo'>FOOT WEAR</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/shop">ShopNow</Link>
                <Link href="contact">contact</Link>
                <FaShoppingCart/>
            </nav>
        </header>
    )
}
export default Header;
