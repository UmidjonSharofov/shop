import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  background-color: #212121;
`

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 60px 131px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  grid-gap: 30px;

`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Logo = styled.img`
  width: 50%;
`

const Title = styled.h4`
  color: #fff;
`

const Subtitle = styled.h5`
  color: #fff;
`

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Li = styled.li`
  list-style-type: none;
`

const Text = styled.p`
  color: #616365;
`

const InstagramImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

InstagramImages.Image = styled.img`
  max-width: 100px;
  width: 100%;
`

const Reserved = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 60px 131px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const Payment = styled.img``


export { Container, Wrapper,Payment, Reserved, Column, Logo, Text, Title, Ul, Li, Subtitle, InstagramImages }