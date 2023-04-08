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
Wrapper.NavItmes=styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  `
// ;
Wrapper.NavItmes.NavItm=styled.li`
   font-size: 30px;
   font-weight: 700;
   text-decoration: none;
   list-style: none;
   cursor: pointer;
   a {
     color: ${props => props.primary ? "black" : "rgb(251, 119, 75)"};
     list-style: none;
     text-decoration: none;
   }

`
 const NavIcons=styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 30px;
   svg {
     font-size: 22px;
     cursor: pointer;
   }
 `

export { Wrapper, Container,NavIcons };
