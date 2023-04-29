import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { UseProductContext } from '../../context/PraductContext';
import { Button, Content, Raslm, Select, Text, Wrapper } from './styled';
import { Rate } from 'antd';
import { FcLike, } from 'react-icons/fc'
import { FaRegHeart } from 'react-icons/fa'
import { ACTION_TYPES } from '../../context/PraductContext/reduser';



const Praduct = () => {
  const param = useParams()
  const param_Id = param.id.replace(':', '')
  const [singleProducts, setSingle] = useState({})
  const {state ,dispatch} =UseProductContext()

  useEffect(() => {
    const res = state?.products?.filter((v) => v.id === param_Id)
    setSingle(...res)
  }, [state.products, param_Id,])
  const [imge, setImage] = useState(false)
  const Res = (e) => {
    setImage(e)
  }
  return (
    <Content>
      <Wrapper>
        {
          imge ? <img className='image' src={imge} alt='q' /> : <img className='image' src={singleProducts.featuredImage} alt='shoes' />
        }
        <Raslm>
          {
            singleProducts.images?.map((v, i) => (
              < div key={i}>
                <img onClick={() => Res(v)} src={v} alt='shoes' />
              </div>
            ))
          }
        </Raslm>
      </Wrapper>
      <Text>
        <h4 className='h4'>Home / {singleProducts.category}</h4>
        <h3>{singleProducts.title}</h3>
        <h3>$ {singleProducts.price}.00</h3>
        <Rate allowHalf defaultValue={3.5}
          onChange={(e) => ({ v: e })}
        />
        <Select>
          <select defaultValue={' Select Size'}  >
            <option value="select"> Select Size</option>
            {
              singleProducts.sizes?.map((v, i) => (
                <option key={i} value={v}>{v}</option>
              ))
            }
          </select>
          <select>
            <option value="select"> Select Color</option>
            {
              singleProducts.colors?.map((v, i) => (
                <option key={i} value={v}>{v}</option>
              ))
            }
          </select>
        </Select>
        <Button>
          <button onClick={()=> dispatch({type:ACTION_TYPES.ADD_TO_CART, payload:{praduct:singleProducts}})} >ADD TO CART</button>
          <div className='icon'>
            {
              
              state.wishlist.liked  ? <FcLike /> : <FaRegHeart onClick={()=> dispatch({type:ACTION_TYPES.LIKED, payload:{praduct:singleProducts}})} />
            }
            {console.log(state.wishlist)}
          </div>
        </Button>
        <Text>
          <h4 className='Product'>Product Details</h4>
          <p>{singleProducts.description}</p>
        </Text>
      </Text>
    </Content>
  )
}
export default Praduct