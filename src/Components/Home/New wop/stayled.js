import styled from "styled-components";
import Bgim from '../../../assets/images/2.jpg'

export const Content = styled.div`
    width: 100%;
    background: url(${Bgim}) center center / cover no-repeat fixed;
    height: 60vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  h4 {
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-size: 22px;
  }
  span{
    color: rgb(251, 119, 75)
  }
  h2{
    font-weight: 900;
    font-size: 42px;
    max-width: 450px;
    color: rgb(255, 255, 255);

  }
  p{
    max-width: 400px;
  }
  button{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 12px;
    height: 40px;
    padding: 0px 18px;
    width: 150px;
    outline: none;
    border: none;
    font-family: Nuckle;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    background: rgb(251, 119, 75);
    color: rgb(255, 255, 255);
    transition: transform 0.2s ease-in-out 0s;
    cursor: pointer;
  }
  button:hover{
    background: none;
    border: 2px solid #fff;
    color: black;
    font-weight: 700;
    color: #fff;
  }
`;
export const Wrapper=styled.div`  
    max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 0px 131px;
    display: flex;
    flex-direction: column;
    gap: 10px;
 
`