import React, { useEffect } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import ProductsOrg from './Pages/ProductsOrg/ProductsOrg'
import ProductsCloths from './Pages/ProductsCloths/ProductsCloths'
import ProductsBeauty from './Pages/ProductsBeauty/ProductsBeauty'
import ProductsToyGif from './Pages/ProductsToyGif/ProductsToyGif'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import { useDispatch} from 'react-redux'
import supabase from './supabase'
import { setUser } from "./slices/userSlice";
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import ProductDetailsOrg from './Pages/ProductDetailsOrg/ProductDetailsOrg'
import ProductDetailsCloths from './Pages/productdetailsCloths/productdetailsCloths'
import ProductDetailsBeauty from './Pages/ProductDetailsBeauty/ProductDetailsBeauty'
import ProductDetailsToyGif from './Pages/ProductDetailsToyGif/ProductDetailsToyGif'

const App = () => {
  const dispatch = useDispatch();

  const getUser = async () => {
    const { data,error } = await supabase.auth.getSession();
    if(data.session)
    dispatch(setUser(data.session.user));
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/productsOrg' element={<ProductsOrg />}/>
        <Route path='/productsCloths' element={<ProductsCloths/>}/>
        <Route path='/productsBeauty' element={<ProductsBeauty/>}/>
        <Route path='/productsToyGif' element={<ProductsToyGif/>}/>
        <Route path='/productdetails/:id' element= { <ProductDetails/>} />
        <Route path='/productdetailsorg/:id' element= { <ProductDetailsOrg/>} />
        <Route path='/productdetailsCloths/:id' element= { <ProductDetailsCloths/>} />
        <Route path='/productdetailsbeauty/:id' element= { <ProductDetailsBeauty/>} />
        <Route path='/productdetailstoygif/:id' element= { <ProductDetailsToyGif/>} />
        <Route path='/cart' element= { <Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App