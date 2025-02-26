import React from 'react'
import './CategoryBanner.css'

const CategoryBanner = ({ImgSrc,Title,Brand}) => {
  return (
    <div className='CategoryBanner-title'>
        <img src= {ImgSrc} alt='' className='CategoryBanner-img' />
        <p className='CategoryBanner-title'>
            {Title.length<25 ? Title : Title.slice(0,36) + '...'}
        </p>
        <p className='CategoryBanner-shopNow'>Shop Now!</p>
        <p className='CategoryBanner-Brands'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner