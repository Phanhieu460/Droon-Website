import { faChevronDown, faChevronUp, faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Col, Collapse, Divider, FloatButton, Row } from 'antd'
import { useAppDispatch, useAppSelector } from 'app/hook'
import ProductSingle from 'components/product/ProductSingle'
import { GET_PRODUCT_LIST } from 'features/types'
import { Product } from 'models'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Keyboard, Navigation, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

import HomeBlog from 'components/home/HomeBlog'
import HomeGallery from 'components/home/HomeGallery'
import Slider from 'components/slider/Slider'
import HomeMap from 'components/home/HomeMap'
import HomeSlider from 'components/home/HomeSlider'
import HomeFeature from 'components/home/HomeFeature'

const { Meta } = Card

const { Panel } = Collapse

const contentStyle: React.CSSProperties = {
  height: '700px',
  color: '#fff',
  lineHeight: '700px',
  textAlign: 'center'
}

const Home = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()
  const [products, setProducts] = useState<Array<Product>>()
  const { productList, count } = useAppSelector(state => state.product)
  const [view, setView] = useState<string>('grid')

  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  useEffect(() => {
    dispatch({ type: GET_PRODUCT_LIST, pageNumber: 1 })
  }, [])

  useEffect(() => {
    if (productList) setProducts(productList)
  }, [productList])

  const faqItems = [
    {
      question: 'What is a drone?',
      answer:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      question: 'What is the best drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'Is it difficult to fly a drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'How long can drones fly for?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    },
    {
      question: 'Can I put a camera on my drone?',
      answer: 'You can track your order by logging into your account and visiting the Order History page.'
    }
    // Add more FAQ items here...
  ]

  return (
    <>
      <div className="home">
        {/* Carousel */}
        <HomeSlider />
        {/* Feature 1*/}
        <HomeFeature />
        {/* Feature 2*/}
        <div
          style={{
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/1280/1207/files/video-bg333.png?v=1640774424")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <div className="home__feature2">
            <div className="home__feature2__content">
              <h2 style={{ fontSize: '50px', margin: '0 0 21px' }}>Ultra Birght Screen.</h2>
              <p style={{ fontSize: '18px', margin: '0 0 50px' }}>
                A 5.5in 1080p screen integrated with the Phantom 4 Pro + offers 1000 cd/m2 of brightness, more than
                twice as bright as conve ntional smart devices. It makes bright, vivid colors easily visible in direct
                sunlight.
              </p>
              <Divider />
              <div className="feature__item">
                <Row>
                  <Col span={12}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1280/1207/files/battery-charge.png?v=1639385813"
                      alt=""
                    />
                    <div>
                      <h3>30 Mins</h3>
                      <p>Flight time</p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/play-button.png?v=1639385846" alt="" />
                    <div>
                      <h3>4K 65fps</h3>
                      <p>Video resolution</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="feature__item">
                <Row>
                  <Col span={12}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/speedometer.png?v=1639385558" alt="" />
                    <div>
                      <h3>72 KM/H</h3>
                      <p>Speed Meter</p>
                    </div>
                  </Col>

                  <Col span={12}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/sensor.png?v=1639385937" alt="" />
                    <div>
                      <h3>300 Meter</h3>
                      <p>Sensor range</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="feature__item">
                <Row>
                  <Col span={12} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/push.png?v=1639386021" alt="" />
                    <div>
                      <h3>10 KM</h3>
                      <p>Control Range</p>
                    </div>
                  </Col>
                  <Col span={12}>
                    <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/visibility2.png?v=1639386236" alt="" />
                    <div>
                      <h3>5 Direction</h3>
                      <p>Obstacle sensing</p>
                    </div>
                  </Col>
                </Row>
              </div>

              <Button danger shape="round" size={'large'}>
                View more
              </Button>
            </div>
            <div className="home__feature2__img">
              <img
                src="https://cdn.shopify.com/s/files/1/1280/1207/files/ultra2.png?v=1639392824"
                alt=""
                width={'100%'}
              />
            </div>
          </div>
        </div>
        {/* Popular Item 1*/}
        <div className="home__popular1">
          <div className="home__popular1__header">
            <h4>Popular Item</h4>
            <h3>Valueable Features</h3>
          </div>
          <div className="home__popular1__main">
            <div className="home__popular1__main__left">
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_2.png?v=1639369915" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Smart Control</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/wifi.png?v=1639369962" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Wifi Connectivity</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="left__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/database.png?v=1639369992" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Online Storage</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
            </div>
            <div className="home__popular1__main__center">
              <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/hhh.png?v=1639372532" alt="" />
            </div>
            <div className="home__popular1__main__right">
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/connect.png?v=1639369819" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Portable Charge</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/microphone.png?v=1639369860" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Voice Control</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
              <div className="right__item">
                <div className="feature_icon">
                  <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/propeller.png?v=1639369893" alt="" />
                </div>
                <div className="feature_text">
                  <h5>Stainless Blade</h5>
                  <p>This is the perfect place to find a nice and cozy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQ */}
        <div className="home__faq">
          <div className="home__faq__header">
            <h3>FAQ AREA</h3>
            <h4>Common Question</h4>
          </div>
          <div className="home__faq__content">
            <div className="home__faq__content__img">
              <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/fff.png?v=1639368018" alt="" />
            </div>
            <div className="home__faq__content__list">
              <Collapse defaultActiveKey={['1']} onChange={onChange} accordion>
                {faqItems.map((item, index: number) => (
                  <>
                    <Panel header={item.question} key={index}>
                      <p>{item.answer}</p>
                    </Panel>
                  </>
                ))}
              </Collapse>
            </div>
          </div>
        </div>
        {/* Popular Item 2 */}
        <div className="home__popular2">
          <div className="home__popular2__header">
            <h3>POPULAR ITEM</h3>
            <h4>Featured in Drone</h4>
          </div>
          <div className="home__popular2__main">
            <Swiper
              slidesPerView={4}
              slidesPerGroupSkip={4}
              spaceBetween={0}
              navigation={true}
              loop={true}
              modules={[Navigation]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                992: {
                  slidesPerView: 2,
                  slidesPerGroup: 2
                },
                1200: {
                  slidesPerView: 3,
                  slidesPerGroup: 3
                }
              }}
              className="mySwiper"
            >
              {products &&
                products?.map((product: Product) => {
                  return (
                    <SwiperSlide style={{ width: 270 }} key={product._id}>
                      <ProductSingle product={product} view={view} />
                    </SwiperSlide>
                  )
                })}
            </Swiper>
          </div>
        </div>
        {/* Map */}
        <HomeMap />

        {/* Blog */}
        <HomeBlog />
        {/* Gallery */}
        <HomeGallery />
      </div>
    </>
  )
}

export default Home
