import React from 'react'
import './ProductDetailCard.css'

const ProductDetailCard = ({Data}) => {
  return (
    <div className='ProductDetailCard'>
      <div className='ProductDetailCard-Img'>
        <img src={Data.url}/>
      </div>
      <div className='ProductDetailCard-details'>
        <p className='ProductDetailCard-name'>{Data.Product}</p>
        <div className='ratingsAndreviews'>
          <div className='stars'>{Data.rating}</div>
          <p className='ratings'>
            {Data.rating} Ratings & {Data.reviews} Reviews
          </p>
        </div>
        <ul className="ProductDetailCard-Productdetails">
          <li className="ProductDetailCard-detail">{Data.Descripition}</li>
          <li className="ProductDetailCard-detail">{Data.Display}</li>
          <li className="ProductDetailCard-detail">{Data.Camera}</li>
          <li className="ProductDetailCard-detail">{Data.Proccessor}</li>
        </ul>
      </div>
      <div className='ProductDetailCard-PriceandDelivery'>
        <div className='pricecontainer'>
          <p className='ProductDetailsCard-price'>₹{Data.Sellingprice}</p>
        </div>
        <p className="freedel">Free delivery</p>
        <p className="discount">
          Upto <b>₹{Data.Exchange}</b> off on Cash Back, No Cost EMI from ₹{Data.Emi}/month
        </p>
      </div>
    </div>
  )
}

export default ProductDetailCard