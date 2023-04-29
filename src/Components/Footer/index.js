import React from 'react'
import { Column, Container, InstagramImages, Li, Logo, Payment, Reserved, Subtitle, Text, Title, Ul, Wrapper } from './styled'
import logo from '../../assets/images/insta/Shop.png'
import ins1 from '../../assets/images/insta/1.jpg'
import ins2 from '../../assets/images/insta/2.jpg'
import ins3 from '../../assets/images/insta/3.jpg'
import ins4 from '../../assets/images/insta/4.jpg'
import ins5 from '../../assets/images/insta/5.jpg'
import payment from '../../assets/images/insta/6.jpg'

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Column>
          <Logo src={logo} />
          <Text>Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam moecenas ultricies mi eget mauris.</Text>
        </Column>
        <Column>
          <Title>Featured</Title>
          <Ul>
            <Li>
              <Text>MEN</Text>
            </Li>
            <Li>
              <Text>WOMEN</Text>
            </Li>
            <Li>
              <Text>BOYS</Text>
            </Li>
            <Li>
              <Text>GIRLS</Text>
            </Li>
            <Li>
              <Text>NEW ARRIVALS</Text>
            </Li>
            <Li>
              <Text>SHOES</Text>
            </Li>
            <Li>
              <Text>CLOTHES</Text>
            </Li>
          </Ul>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <Ul>
            <Li>
              <Subtitle>ADDRESS</Subtitle>
            </Li>
            <Li>
              <Text>123 STREEN NAME, CITY, US</Text>
            </Li>
            <Li>
              <Subtitle>PHONE</Subtitle>
            </Li>
            <Li>
              <Text>(123) 456 7890</Text>
            </Li>
            <Li>
              <Subtitle>EMAIL</Subtitle>
            </Li>
            <Li>
              <Text>MAIL@EXAMPLE.COM</Text>
            </Li>
          </Ul>
        </Column>
        <Column>
          <Title>Instagram</Title>
          <InstagramImages>
            <InstagramImages.Image src={ins1} />
            <InstagramImages.Image src={ins2} />
            <InstagramImages.Image src={ins3} />
            <InstagramImages.Image src={ins4} />
            <InstagramImages.Image src={ins5} />
          </InstagramImages>
        </Column>
      </Wrapper>
      <Reserved>
        <Payment src={payment} />
        <Text>rymo eCommerce @ {new Date().getFullYear()}. All Rights Reserved</Text>
      </Reserved>
    </Container>
  )
}