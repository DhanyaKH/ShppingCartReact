
import './App.css'
import  Header  from './components/Header';
import Products  from './components/Products';
import  Cart  from './components/Cart';
import data from './data.js'
import { useState } from 'react';

function App() {
  const {products}=data
  const [cartItems,setCartItems]=useState([])
const addProducts=(product)=>
{
  const exist=cartItems.find((x)=>x.id===product.id)
  if(exist)
  {
    setCartItems(
      cartItems.map((x)=>(
        x.id===product.id?{...exist,qty:exist.qty+1}:x
      ))
    );
  }
  else{
    setCartItems([...cartItems,{...product,qty:1}])
  }
}

const removeProduts=(product)=>
{
  const exist=cartItems.find((x)=>(x.id===product.id))
  if(exist.qty===1)
  {
    setCartItems(cartItems.filter((x)=>(x.id!==product.id)));
  }
  else{
    setCartItems(
      cartItems.map((x)=>(
        x.id===product.id?{...exist,qty:exist.qty-1}:x
      ))
    );
  }
}

  return (<>
    <div className='App'>
      <Header cartCountItems={cartItems.length}></Header>
      <div className='row'>
    <Products products={products} addProducts={addProducts}></Products>
      
    <Cart cartItems={cartItems} addProducts={addProducts} removeProduts={removeProduts}></Cart>
    </div>
    </div>
    </> 
  
  );
}

export default App;
