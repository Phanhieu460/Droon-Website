import { Button, Divider } from 'antd'
import React from 'react'

type Props = {}

const HomeFeature = (props: Props) => {
  return (
    <div className="home__feature">
      <div className="home__feature__img">
        <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/about3.png?v=1640757951" alt="" width={'100%'} />
      </div>
      <div className="home__feature__content">
        <h3 className="home__feature__content--title">Feature about</h3>
        <h2 style={{ fontSize: '45px', margin: '0.5rem 0' }}>Specializing in Drone.</h2>
        <div style={{ width: 70, height: 4, background: '#d72323', margin: '30px 0px' }}></div>
        <div className="home__feature__content--item">
          <div className="home__feature__content--item--img">
            <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone.png?v=1639306097" alt="" />
          </div>
          <div className="home__feature__content--item--content">
            <h4>Mobile Device Supported</h4>
            <p>When an unknown printer took a galley of type and scrambled it to make.</p>
          </div>
        </div>
        <div className="home__feature__content--item">
          <div className="home__feature__content--item--img">
            <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/smart-farm.png?v=1639306118" alt="" />
          </div>
          <div className="home__feature__content--item--content">
            <h4>Easy integrative control</h4>
            <p>When an unknown printer took a galley of type and scrambled it to make.</p>
          </div>
        </div>
        <div className="home__feature__content--item">
          <div className="home__feature__content--item--img">
            <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/drone_1.png?v=1639306189" alt="" />
          </div>
          <div className="home__feature__content--item--content">
            <h4>Customized Commands</h4>

            <p>When an unknown printer took a galley of type and scrambled it to make.</p>
          </div>
        </div>
        <Button
          style={{
            background: '#d72323',
            borderRadius: '50px',
            color: '#fff',
            fontWeight: 600
          }}
          shape="round"
          size={'large'}
        >
          Explore more
        </Button>
      </div>
    </div>
  )
}

export default HomeFeature
