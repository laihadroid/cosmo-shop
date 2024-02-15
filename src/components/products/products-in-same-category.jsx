"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import ProductItem from './product-item'

const ProductsInSameCategory = ({products}) => {
  return (
    <div>
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {products.map((item)=>(<SwiperSlide key={item.id}>
            <ProductItem {...item}></ProductItem>
        </SwiperSlide>))}
      
      
      
    </Swiper>
    </div>
  )
}

export default ProductsInSameCategory