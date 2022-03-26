import React from 'react'

export default function ProductList(props) {
    const {product,addProducts}=props
  return (
    <div>
        <img src={product.image} alt={product.name} className="small"></img>
        <h3>{product.name}</h3>
        <div>${product.price}</div>
        <div>
            <button onClick={()=>(addProducts(product))}>Add to Cart</button>
        </div>
    </div>
  )
}
