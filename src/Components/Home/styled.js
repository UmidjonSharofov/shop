import styled from "styled-components";
import BgIMg from "../../assets/images/bg.jpg";

export const Content = styled.div`
  width: 100%;
  background: url(${BgIMg}) center center / cover no-repeat fixed;
  height: calc(100vh - 100px);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
