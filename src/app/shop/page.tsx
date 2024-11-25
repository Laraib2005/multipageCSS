import React from 'react'

const ShopNow= () => {

const shoesData = [
   {id:1,name:"Sneakers",price:6000,image:'/pic1.png'} ,
   {id:2,name:"Sports",price:2000,image:'/pic2.png'} ,
   {id:3,name:"Jogging",price:4000,image:'/pic3.png'} ,
   {id:4,name:"Flats",price:9000,image:'/pic4.png'} ,
   {id:5,name:"Huaraches",price:8000,image:'/pic5.png'} ,
   {id:6,name:"Athletic",price:3000,image:'/pic6.png'} ,
]

return (
<div>
<div className='shoes'>
        {shoesData.map((shoes) => (
<div key={shoes.id}className='shoes-card'>
        <img src={shoes.image}alt={shoes.name}/>
        <h3>{shoes.name}</h3>
        <div className='price'>${shoes.price}</div>
        <button>Add to Cart</button>
</div>
        ))}
</div>
        </div>
)
}
export default ShopNow;