import React, { useEffect, useState } from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper } from 'swiper/react'

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

  let modules: any = []

  useEffect(() => {
    if (navigation) {
      modules.push(Navigation)
    }
    if (pagination) {
      modules.push(Pagination)
    }
  }, [navigation, pagination])
  console.log(modules)
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
      modules={modules}
    >
      {children}
    </Swiper>
  )
}

export default Slider
