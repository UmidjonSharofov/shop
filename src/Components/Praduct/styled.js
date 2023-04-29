import styled from "styled-components";

export const Content = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
  .image {
    width: 100%;
  }
`;
export const Raslm = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  img {
    width: 100%;
    cursor: pointer;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .h4 {
    text-align: left;
    font-weight: 700;
    color: rgb(51, 51, 51);
    opacity: 0.6;
    font-size: 22px;
  }
  h3 {
    text-align: left;
    font-weight: 800;
    font-size: 21px;
  }
  .Product{
    font-size: 21px;
    
  }
`;
export const Select = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
  select {
    position: relative;
    max-width: 180px;
    width: 100%;
    height: 40px;
    padding: 0px 10px;
    outline: none;
    border: 1px solid rgb(29, 29, 29);
    display: block;
    text-transform: capitalize;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  button{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 12px;
    height: 40px;
    padding: 0px 18px;
    width: 200px;
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
  .icon {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 38px;
    height: 38px;
    border: 1px solid rgb(29, 29, 29);
    border-radius: 5px;
    svg {
      width: 25px;
      height: 22px;
    }
  }
`;
