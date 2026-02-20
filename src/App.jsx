import { useState } from "react";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import ProductCart from "./Components/ProductCart";
import ProductList from "./Components/ProductList";

export default function App(){
    const[cart,setCart]=useState([]);
    const[totalAmt,setAmt]=useState(0);
    const products=[{
        id:1,
        name:"Laptop",
        price:50000,
        image:"https://tse1.mm.bing.net/th/id/OIP.tRyIFcoT8ZwtWKd6EVTUrgHaE8?pid=Api&P=0&h=180"
    },{
        id:2,
        name:"Mobile",
        price:30000,
        image:"https://tse3.mm.bing.net/th/id/OIP.ly_HCwk6Vr8tqZzXjy-hgAHaHa?pid=Api&P=0&h=180"

    },
    {
        id:3,
        name:"Charger",
        price:1000,
        image:"https://tse3.mm.bing.net/th/id/OIP.avCBK2xr5-CxPXNtQkuoqwHaHa?pid=Api&P=0&h=180"

    }
    ];

    function addToCart(product){
    setCart([...cart,product])
    setAmt(totalAmt+product.price)
  }

  function removeFromCart(index){
    const updatecart=cart.filter((_,i)=>i!=index);
    setCart(updatecart);
  }

  const totalAmount=cart.reduce((total,index)=>total+index.price,0)
    return(
        <>
        <Header cartCount={cart.length}/>
        <ProductCart  product={products[0]} 
   addToCart={addToCart} />
        <ProductList products={products} addToCart={addToCart}/>
        <Cart cart={cart} totalAmount={totalAmt} removeFromCart={removeFromCart}/>
        </>
    )
}