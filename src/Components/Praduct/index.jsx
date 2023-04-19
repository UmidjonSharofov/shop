import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ConTextProducts } from '../../ConText/ProductsContext';
import { Content, Raslm, Text, Wrapper } from './stayled';
import { Rate } from 'antd';

export default function Praduct() {
  const param = useParams()
  const param_Id = param.id.replace(':', '')
  const { products } = ConTextProducts()
  const [singleProducts, setSingle] = useState({})

  useEffect(() => {
    const res = products.filter((v) => v.id === param_Id)
    setSingle(...res)
  }, [products, param_Id])
  return (
    <Content>
      <Wrapper>
        <img className='image' src={singleProducts.featuredImage} alt='shoes' />
        <Raslm>

          {
            singleProducts.images?.map((v, i) => (
              < div key={i}>
                <img src={v} alt='shoes' />
              </div>
            ))
          }
        </Raslm>

      </Wrapper>
      <Text>
        <h3>Home/ {singleProducts.category}</h3>
        <h3>{singleProducts.title}</h3>
        <h3>$ {singleProducts.price}.00</h3>
        <Rate
                allowHalf
                defaultValue={singleProducts.rating[1]}
                onChange={(e) => ({ value: e })}
              />
        {singleProducts.price}
        {singleProducts.liked}

      </Text>
    </Content>
  )
}
