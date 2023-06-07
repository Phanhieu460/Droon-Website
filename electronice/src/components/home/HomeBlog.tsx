import { Button, Card, Divider } from 'antd'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Keyboard, Mousewheel, Navigation } from 'swiper'

const data = [
  {
    id: 1,
    image: 'https://cdn.shopify.com/s/files/1/1280/1207/articles/7_600x400_crop_center.jpg?v=1640517551',
    title: 'Drone Photography Tips',
    createAt: '01 Febuary, 2023  0 comments',
    description: 'The summer holidays are wonderful. Dressing for them can be signicantly less so: Packing light...'
  },
  {
    id: 2,
    image: 'https://cdn.shopify.com/s/files/1/1280/1207/articles/5_600x400_crop_center.jpg?v=1640516849',
    title: 'Drone Photography Tips',
    createAt: '01 Febuary, 2023  0 comments',
    description: 'The summer holidays are wonderful. Dressing for them can be signicantly less so: Packing light...'
  },
  {
    id: 3,
    image: 'https://cdn.shopify.com/s/files/1/1280/1207/articles/6_600x400_crop_center.jpg?v=1640516876',
    title: 'Drone Photography Tips',
    createAt: '01 Febuary, 2023  0 comments',
    description: 'The summer holidays are wonderful. Dressing for them can be signicantly less so: Packing light...'
  }
]
const HomeBlog = () => {
  return (
    <div className="home__blog">
      <div className="home__blog__header">
        <h3>MAIN BLOG</h3>
        <h4>Latest Blog</h4>
      </div>
      <div className="home__blog__main">
        <Swiper
          slidesPerView={3}
          slidesPerGroupSkip={3}
          spaceBetween={15}
          navigation={true}
          loop={true}
          keyboard={{
            enabled: true
          }}
          modules={[Keyboard, Navigation, Mousewheel]}
          breakpoints={{
            575: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
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
          {data.map((item: any) => {
            return (
              <div className="home__blog__main__post" key={item.id}>
                <SwiperSlide key={item.id}>
                  <Card hoverable style={{ width: '100%' }} cover={<img alt="example" src={item.image} />}>
                    <h4>{item.title}</h4>
                    <Divider />
                    <p>{item.createAt}</p>
                    <p>{item.description}</p>
                    <Button danger>View more</Button>
                  </Card>
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default HomeBlog
