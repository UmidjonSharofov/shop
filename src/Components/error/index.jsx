import React from 'react'
import Errorimg from './bb9vPrqDW-lEDyxm7IwTW7mqY1QgCvzeN0J-Nv0jbyq6IPFHXvUP2L-jOqixRdr1lXdFsur6Gy5qrrqQEJ_LAVAZ.jpg'
import { ErrorDiv } from './styled'

function Errors() {
  return (
    <ErrorDiv>
      <img src={Errorimg} alt='Eror 404'/>
    </ErrorDiv>
  )
}

export default Errors