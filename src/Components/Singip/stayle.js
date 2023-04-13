import styled from "styled-components";

export const Contener = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 150px;
`;
export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: auto;
  padding-top: 25px;
  input {
    font-family: Nuckle;
    font-style: normal;
    font-weight: 539;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    color: rgb(51, 51, 51);
    background: rgb(255, 255, 255);
    border: 1px solid rgb(228, 231, 238);
    border-radius: 8px;
    padding-left: 18px;
    outline: none;
    height: 46px;
    width: 100%;
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
    width: 100%;
    outline: none;
    border: none;
    font-family: Nuckle;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    background: rgb(28, 28, 28);
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: transform 0.2s ease-in-out 0s;
  }
  span {
    font-size: 20px;
    cursor: pointer;
  }
`;
