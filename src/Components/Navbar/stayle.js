import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0px 131px;
  padding: 0px 131px;

  @media (max-width: 676px) {
    padding: 0px 10px;
  }

  @media (max-width: 884px) {
    padding: 0px 20px;
  }
  @media (max-width: 1339px) {
    padding: 0px 30px;
  }
`;
// props => props.primary ? "black" : "rgb(251, 119, 75)"
Wrapper.NavItmes = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    list-style: none;
    text-decoration: none;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
  }
`;
const NavIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  svg {
    font-size: 22px;
    cursor: pointer;
  }
`;

function name (){

 
}
export const Contener2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;

  .Wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
  }
  .Products {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 16px;
    overflow: auto;
    .NoPr {
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      height: 100%;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 16px;
      color: rgb(29, 29, 29);
      text-transform: capitalize;
      user-select: none;
    }
    .DaPr {
    width: 100%;
      img {
        width: 100%;
      }
      .rasmText{
        width: 100%;
      display: grid;
      grid-template-columns: 70px 1fr 120px 50px;
      column-gap: 20px;
      padding-bottom: 16px;
      border-bottom: 0.3px solid rgb(29, 29, 29);
      .text{
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-left: 10px;
      }
      .p{
        font-size: 12px;
      }
      }
      .quantity {
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        gap: 12px;
        button {
          display: flex;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          width: 33px;
          height: 33px;
          background: rgb(29, 29, 29);
          border-radius: 50%;
          transition: transform 0.2s ease-in-out 0s;
          color: #fff;
          font-size: 18px;
          cursor: pointer;
        }
    
      }
    }
  }
  .Total {
    width: 100%;
    margin-top: 50px;

    .Cart {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 16px;
      color: rgb(29, 29, 29);
      padding-bottom: 11px;
      border-bottom: 0.3px solid rgb(29, 29, 29);
      margin-bottom: 26px;
      user-select: none;
    }
    .Radus {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .Button {
      display: flex;
      width: 100%;
      flex-direction: column;
      margin-top: 20px;
      gap: 20px;
     
      button {
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        gap: 12px;
        height: 40px;
        padding: 0px 18px;
        width: auto;
        outline: none;
        border: none;
        font-family: Nuckle;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        background: rgb(28, 28, 28);
        color: rgb(255, 255, 255);
        transition: transform 0.2s ease-in-out 0s;
        cursor: pointer;
        :active {
          transform: scale(1.02);
        }
      }
    }
  }
`;
export { Wrapper, Container, NavIcons };
