import styled from "styled-components";

export const Contener = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 80px 131px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Text = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 10px;
  .img {
    width: 100%;
  }
  button {
    display: none;
  }
  .hover {
    height: 500px;
    width: 100%;
  }
  .hover:hover {
    img {
      opacity: 0.7;
    }
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
      background: rgb(251, 119, 75);
      color: rgb(255, 255, 255);
      transition: transform 0.2s ease-in-out 0s;
      cursor: pointer;
    }
  }
`;
export const Raten = styled.div`
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  gap: 8px;
`;
