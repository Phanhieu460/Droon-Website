import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Slider from 'components/slider/Slider'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

type Props = {}

const HomeSlider = (props: Props) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/product')
  }
  return (
    <div className="home__carousel">
      <Slider
        slidePerview={1}
        spaceBetween={30}
        keyboardEnable={false}
        loop={true}
        autoPlay={false}
        navigation={false}
        pagination={true}
      >
        <SwiperSlide className="swiper__feature">
          <div
            className="home__carousel--item"
            style={{
              backgroundImage:
                "url('//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_8737877e-52de-4384-b9c7-5ab1521594a6.png?v=1639042929')",
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: '#edfeff',
              backgroundPosition: 'center'
            }}
          >
            <div className="home__carousel--item--content">
              <div className="slider-content ">
                <h1 className="animated">
                  <span>DRONE</span> DIGITAL
                </h1>
                <p className="animated">
                  Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.{' '}
                </p>
                <div className="slider__animated__btn__wrap">
                  <div className="slider-btn ">
                    <a className="animated" onClick={() => handleClick()}>
                      Explore More
                    </a>
                  </div>
                  <div className="slider__animated__btn ">
                    <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                      <FontAwesomeIcon className="btn-play" icon={faPlay} />
                    </a>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__feature">
          <div
            className="home__carousel--item"
            style={{
              backgroundImage: `url("//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_2_7a3d4cb6-4e02-4bdb-ac70-200256f51a5b.png?v=1640513231")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: '#edfeff',
              backgroundPosition: 'center'
            }}
          >
            <div className="home__carousel--item--content">
              <div className="slider-content ">
                <h1 className="animated">
                  <span>DRONE</span> MINIMAL
                </h1>
                <p className="animated">
                  Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.
                </p>
                <div className="slider__animated__btn__wrap">
                  <div className="slider-btn ">
                    <a className="animated" onClick={() => handleClick()}>
                      Explore More
                    </a>
                  </div>
                  <div className="slider__animated__btn ">
                    <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                      <FontAwesomeIcon className="btn-play" icon={faPlay} />
                    </a>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper__feature">
          <div
            className="home__carousel--item"
            style={{
              backgroundImage: `url("//cdn.shopify.com/s/files/1/1280/1207/files/slider_full_3_4fedfad3-59c2-4a0e-922d-92c38cd4bb6c.png?v=1640510457")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundColor: '#edfeff',
              backgroundPosition: 'center'
            }}
          >
            <div className="home__carousel--item--content">
              <div className="slider-content ">
                <h1 className="animated">
                  <span>DRONE</span> CLASSIC
                </h1>
                <p className="animated">
                  Experience the decibels like your ears deserve to. Safe for the ears, very for the heart.
                </p>
                <div className="slider__animated__btn__wrap">
                  <div className="slider-btn ">
                    <a className="animated" onClick={() => handleClick()}>
                      Explore More
                    </a>
                  </div>
                  <div className="slider__animated__btn ">
                    <a className="video-popup magni_video_pop" href="https://www.youtube.com/watch?v=_9VUPq3SxOc">
                      <FontAwesomeIcon className="btn-play" icon={faPlay} />
                    </a>
                    <span>Watch Video</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Slider>
    </div>
  )
}

export default HomeSlider
