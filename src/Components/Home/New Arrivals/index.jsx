import React from 'react'
import { Content } from './stayled'
import { useNavigate } from 'react-router-dom'

export const NewArrivals = () => {
  const Navigate=useNavigate()
  return (
    <Content>
      <h4>New Arrivals</h4>
     <h1><span>Best Practice</span> This Year</h1>
     <p>Shoomotic offers your very comfortable time on walking and exercises</p>
     <button onClick={()=>Navigate('/shop')}>ShOP NOW</button>
    </Content>
  )
}
