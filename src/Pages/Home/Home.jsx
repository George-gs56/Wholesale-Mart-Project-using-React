import React from 'react'
import './Home.css'
import { CategoryBarData,CarouselData,BestOf } from "../../data";
import CategoryBar from '../../Components/CategoryBar/CategoryBar';
import BannerCarousel from '../../Components/BannerCarousel/BannerCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel';
import ProductCarouselOrg from '../../Components/ProductCarouselOrg/ProductCarouselOrg';
import ClothsProductCarousel from "../../Components/ClothsProductCarousel/ClothsProductCarousel";
import BeautyProductCarousel from '../../Components/BeautyProductCarousel/BeautyProductCarousel'
import ToyGifProductCarousel from '../../Components/ToyGifProductCarousel/ToyGifProductCarousel'

const Home = () => {
  return (
    <div className="Home">
      <div className="Home-CategoryContainer">
        <div className="Home-CategoryBar">
          {CategoryBarData.map((item, index) => (
            <CategoryBar
              key={index}
              Imgsrc={item.imageSrc}
              CategoryName={item.category}
            />
          ))}
         </div>
       </div>
       <div className='Home-Container'>
        <div className='Home-Carousel'>
          <BannerCarousel data={CarouselData} />
        </div>
        <div className='Home-ProductCarousel'>
          <ProductCarouselOrg
           BgImg="data:image/jpeg;base64,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"
           Title="Organic items"
          Data={BestOf.Organic}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Electronics"
            Data={BestOf.Electronics}
          />
           <ClothsProductCarousel
            BgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI53ekTl1-wIOqNNTAtZ83MsdFZVOynqIRmQ&s"
            Title="Clothes"
            Data={BestOf.Clothes}
          />
          <BeautyProductCarousel
            BgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYtgSUGgRLtmjALm1kXkAh0oxSH06UQDPUTA&s"
            Title="Beauty Products"
            Data={BestOf.BeautyProducts}
          />
          <ToyGifProductCarousel
            BgImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNksolsOA70HlE9lPdlbeFR78lZBlT0Nhrlw&s"
            Title="Toys & Gifting Specials"
            Data={BestOf.ToysAndGifts}
          />
        </div>
       </div>
      </div>
  )
}

export default Home