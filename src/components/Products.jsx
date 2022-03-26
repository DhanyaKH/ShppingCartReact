import React from 'react'
import ProductList from '../pages/ProductList'

export default function Products (props) {
    const {products,addProducts}=props
  return (
    <>
    <main className='block col-2'>
        <h2>Products</h2>
        <div className='row'>
            {products.map((product)=>(
                <ProductList key={product.id} product={product} addProducts={addProducts}></ProductList>
            ))}
        </div>
    </main>
    </>
  )
}
