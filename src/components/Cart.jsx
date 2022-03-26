import React from 'react'

export default function Cart(props) {
    const { cartItems, addProducts, removeProduts } = props
    const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty + a, 0)
    const tax = itemPrice * 0.10;
    const shipping = cartItems.price > 1000 ? 0 : 50
    const totalPrice = itemPrice + tax + shipping;
    return (
        <>
            <aside className='block col-1'>
                <h2>My Cart</h2>
                <div>
                    {cartItems.length === 0 && <div>Cart is Empty</div>}
                </div>
                {cartItems.map(
                    (item) =>
                    (
                        <div key={item.id} className='row'>
                            <div className='col-2'>{item.name}</div>
                            <div className='col-2'><button onClick={() => addProducts(item)} className='add'>+</button></div>
                            <div className='col-2'><button onClick={() => removeProduts(item)} className='remove'>-</button></div>
                            <div className='col-2 text-right'>{item.qty}*${item.price.toFixed(2)}</div>
                        </div>
                    )
                )}
                {cartItems.length > 0 && (
                    <>
                        <hr></hr>
                        <div className='row'>
                            <div className='col-2'>Cart Item Prices</div>
                            <div className='col-1 text-right'>{itemPrice.toFixed(2)}</div>
                            <div>{tax}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Tax</div>
                            <div className='col-1 text-right'>{tax.toFixed(2)}</div>
                            <div>{tax}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Shipping</div>
                            <div className='col-1 text-right'>{shipping.toFixed(2)}</div>
                            <div>{tax}</div>
                        </div>
                        <div className='row'>
                            <div className='col-2'>Total Prices</div>
                            <div className='col-1 text-right'><strong>{totalPrice.toFixed(2)}</strong></div>
                            <div>{tax}</div>
                        </div>
                    </>
                )}
            </aside>
        </>
    )
}
