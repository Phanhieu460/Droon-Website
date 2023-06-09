import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'
import { SwiperModule } from 'swiper/types'

interface ISlider {
  slidePerview: number
  spaceBetween: number
  autoPlay?: boolean
  loop?: boolean
  navigation?: boolean
  pagination?: boolean
  keyboardEnable?: boolean
  children: React.ReactNode
}

const Slider = (props: ISlider) => {
  const { slidePerview, spaceBetween, autoPlay, loop, navigation, pagination, keyboardEnable, children } = props

  return (
    <Swiper
      slidesPerView={slidePerview}
      spaceBetween={spaceBetween}
      autoplay={autoPlay}
      loop={loop}
      navigation={navigation}
      pagination={{
        clickable: pagination
      }}
      keyboard={{
        enabled: keyboardEnable
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  )
}

export default Slider
