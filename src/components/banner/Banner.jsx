import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <>
     <div className='container' style={{marginTop:"20px"}}>
     <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide ><img className='img_banner' src="https://ae01.alicdn.com/kf/Sd86af5941ae74ee9b0cfde92909c70e3h/1790x572.png"  alt="" w /></SwiperSlide>
        <SwiperSlide className='banner_swiper'><img className='img_banner' src="https://ae01.alicdn.com/kf/Se9404d078aad4911beb03bccf4eae1248/1790x572.png" alt="" /></SwiperSlide>
        <SwiperSlide className='banner_swiper_two'><img className='img_banner' src="https://ae01.alicdn.com/kf/S5e2a6f0276cb498b93e05bd3d8b598a7o/1790x572.png" alt="" /></SwiperSlide>
      </Swiper>

     </div>
    </>
  )
}

export default Banner