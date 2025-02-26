import React from 'react'
import './ProductsOrg.css'
import ProductDetailCard from '../../Components/ProductDetailCard/ProductDetailCard';
import { Link } from 'react-router-dom';
import { ProductsDataOrg } from '../../ProductsDataOrg';


const ProductsOrg = () => {
    return (
      <div className='Products'>
        <div className='Products-Filters'>
          <p className='filter-head'>Filters</p>
          <div className='Category'>
            <p className='filter-categoryHead'>Categories</p>
            <div className='filter-category'>Organic Products</div>
          </div>
          <div className='Price'>
            <p className='priceHead'>Price</p>
            <input type='range' name='' id='' className='pricerange'/>
            <div className='price-input'>
              <input value={0} className='pricebox'/> <p>to</p>
              <input value={100000} className='pricebox'/>
            </div>
          </div>
          <div className='brand'>
            <p>Brand:</p>
            <h5>Eco World</h5>
          </div>
          <div className='sortby'>
            <p>Sort By</p>
            <ul className='soeritems'>
              <li className='sortitem'>Relevance</li>
              <li className='sortitem'>Popularity</li>
              <li className='sortitem'>Price-Low to High</li>
              <li className='sortitem'>Price-High to Low</li>
              <li className='sortitem'>Newest First</li>
            </ul>
          
          </div>
        </div>
        <div className='Products-items'>
          <p className='totalresults'>
            Showing 1-{ProductsDataOrg.length} of {ProductsDataOrg.length} results
          </p>
        <div>
          {ProductsDataOrg.map((item,index)=> (
            <Link key={index} to={`/productdetailsOrg/${item.id}`}>
              <ProductDetailCard Data={item}/>
            </Link>
          ))}
        </div>
      </div>
      </div>
    )
  }

export default ProductsOrg