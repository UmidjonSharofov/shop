import styled from "styled-components";

export const Content = styled.div`
  max-width: 1440px;
    width: 100%;
    margin: auto;
    padding: 60px 131px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
  }
  span{
    color: rgb(251, 119, 75)
  }
  h1{
    font-size: 2.5rem;

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
    border: 1px solid black;
    color: black;
    font-weight: 700;
  }
`;
