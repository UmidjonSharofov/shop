import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 60px 131px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img{
    width: 100%;
  }
  button{
    display: none;
  }
  .hover{
    height: 500px;
    width: 100%;
  }
  .hover:hover{
    img{
    opacity: 0.7;
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
    width: auto;
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
  }

  @media (max-width: 1339px) {
    padding: 50px 30px;
  }

  @media (max-width: 884px) {
    padding: 40px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }

  @media (max-width: 676px) {
    padding: 30px 20px;
  }
`

const Title = styled.h2`
  text-align: left;
  font-weight: 700;
`

const Description = styled.p`
  text-align: left;
`

const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin-top: 10px;

  @media (max-width: 884px) {
    grid-template-columns: repeat(3, 1fr);

  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
`
 const Raten = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
`;

export { Container, Wrapper, Title, Description,Products,Raten}