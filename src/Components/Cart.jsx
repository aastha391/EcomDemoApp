export default function Cart({cart,totalAmount,removeFromCart}){
    return (
        <>
        <h2>
            Your cart:</h2>
            {cart.map((item,index)=>(
                <div>
                 <img 
            src={item.image} 
            alt={item.name} 
            width="100"
          />
                <p>{item.name} - {item.price}</p>
                <button onClick={()=>removeFromCart(index)}>Delete</button>
            </div>
            ))}
        <h3>Total Amount:{totalAmount}</h3>
        </>
    )
}