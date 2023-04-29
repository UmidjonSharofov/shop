import React from 'react'
import { Content, Wrapper } from './stayled'
import { useNavigate } from 'react-router-dom'

export const Newshop = () => {
  const Navigate = useNavigate()
  return (
    <Content>
      <Wrapper>
        <h4>New Arrivals</h4>
        <h2>Autumn Collection UP TO 20% OFF</h2>
        <button onClick={() => Navigate('/shop')}>ShOP NOW</button>
      </Wrapper>
    </Content>
  )
}
