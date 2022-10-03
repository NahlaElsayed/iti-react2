// import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import { Products } from './Products';
import { useState } from 'react';
import { FavoriteItems } from './FavoriteItems';

const App = () => {
  const [products, setProducts] = useState(productList);
  const [favorites,  setFavorites] = useState(favoriteItems);

  const increaseQuantity = productId => {
    const newProducts = [...products];
    newProducts.find(item => item.id === productId).quantity += 1;
    setProducts(newProducts);
  }

  const decreaseQuantity = productId => {
    const newProducts = [...products];
    newProducts.find(item => item.id === productId).quantity -= 1
    setProducts(newProducts);
  }

  const addToFavorites = productId => {
    let newFavorites = [...favorites];
    const favoriteItem = products.find(item => item.id === productId);
    newFavorites = [...newFavorites, favoriteItem];
    setFavorites(newFavorites);
  }

  return (
    <>
      <Navbar />

      <Routes>
          <Route path='/' element={<h1 style={{textAlign: "center", margin:"20px"}}>Home</h1>} />
          <Route path='/about' element={<h1 style={{textAlign: "center", margin:"20px"}}>About</h1>} />
          <Route path='*' element={<h1 style={{textAlign: "center", margin:"20px"}}>ERROR: 404. Page Not Found.</h1>} />
          <Route path='/favorites' element={<FavoriteItems favorites={favorites} />} />
          <Route path='/products'
            element={
              <Products
              products={products}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              addToFavorites={addToFavorites}
          />} />
      </Routes>
    </>
  )
}

const productList = [
  {id: '1', name: 'PlayStation 1', quantity: 0},
  {id: '2', name: 'PlayStation 2', quantity: 0},
  {id: '3', name: 'PlayStation 3', quantity: 0},
  {id: '4', name: 'PlayStation 4', quantity: 0},
  {id: '5', name: 'PlayStation 5', quantity: 0}
]

const favoriteItems = [];

export default App;