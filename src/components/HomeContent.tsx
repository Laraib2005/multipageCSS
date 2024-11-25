import React from "react";
import Link from 'next/link'

const HomeContent = () => {
    return (
        <div>
            <section className="hero" style={{backgroundImage:"url(background.jpg)"}}>
<div>
    <h1 className="fade-in">Welcome to Shoes World</h1>
    <p>Step into style and comfort with our vast collection of shoes</p>
    <Link href='/shop'><button>Shop Now</button></Link>
</div>
            </section>
        </div>
    )
}
export default HomeContent