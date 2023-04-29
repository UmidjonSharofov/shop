import React from 'react'
import { UseProductContext } from '../../../context/PraductContext'
import { Contener } from './stayle'

export default function Icon() {
  const {state ,dispatch} = UseProductContext();

  return (
    <Contener >
        {state.icon?.map(v=>(
            <div key={v.id}>
                <img className='img' src={v.images} alt="icon"/>
            </div>
        ))}
    </Contener>

  )
}
