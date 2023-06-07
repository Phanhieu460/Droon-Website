import React, { useState } from 'react'
import mapData from '../../data/HomeMap.json'
import { Avatar, Button, Card } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Meta from 'antd/es/card/Meta'

type Props = {}

const HomeMap = (props: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const onClickMap = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }
  return (
    <div className="home__map">
      <img src="https://cdn.shopify.com/s/files/1/1280/1207/files/lookboo4.png?v=1640767015" alt="" />
      {mapData.map((item: any, index: number) => (
        <div key={index} className={`home__map__item item${index + 1} ${activeIndex === index ? 'active' : ''}`}>
          <Button shape="circle" icon={<FontAwesomeIcon icon={faPlus} />} onClick={() => onClickMap(index)} />
          <div className={`card ${activeIndex === index ? 'active' : ''}`}>
            <Card style={{ width: 300, marginTop: 16 }}>
              <Meta avatar={<Avatar src={item.img} />} title={item.title} description={item.price} />
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HomeMap
