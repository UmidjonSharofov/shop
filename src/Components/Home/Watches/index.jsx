import React from 'react'
import { UseProductContext } from '../../../context/PraductContext'
import { Contener, Raten, Text, Wrapper } from './styled';
import { Rate } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Watches() {
    const {state ,dispatch} = UseProductContext();

    const navigate=useNavigate()
    return (
        <Contener>
            <Text>
                <h2>Best Watches</h2>
                <p>Here you can check out our new products with fair price on rymo.</p>
            </Text>
            <Wrapper>
                {state.watches.map(v => (
                    <div className='hover' key={v.id}>
                        <img className='img' src={v.featuredImage} alt={v.title} />

                        <Raten>
                            <Rate
                                allowHalf
                                defaultValue={v.rating[0]}
                                onChange={(e) => ({ value: e })}
                            />
                            <h4>{v.title}</h4>
                            <h4>${v.price}.00</h4>
                            <button onClick={()=>(navigate(`/shop/:${v.id}`))}>BUY NOW</button>
                        </Raten>
                    </div>
                ))}
            </Wrapper>
        </Contener>
    )
}
