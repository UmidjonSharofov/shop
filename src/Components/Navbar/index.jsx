import React, { useState } from 'react'
import { Container, NavIcons, Wrapper } from './stayle'
import Nvicon from "../../assets/images/EymoNv.jpg"
import { AiOutlineClose, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import { Drawer, Dropdown, } from 'antd'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {  Drawer as Drawere } from 'antd'
import { navbar } from '../ulits'

export default function Navbar() {
  const Navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = ('top');
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  // Producs

  const [stet, setStet] = useState(false);
  const [right, setright] = useState('right');
  const ShwDrawer = () => {
    setStet(true);
  };
  const OnClose = () => {
    setStet(false);
  };
  const OnChange = (e) => {
    setright(e.target.value);
  };





  const items = [
    {
      label: <span onClick={() => Navigate('/Profile')} className='NbSpan'>Profile</span>,
      key: '0',
    },
    {
      label: <span onClick={() => Navigate('/Singip')} className='NbSpan'>Sing in</span>,
      key: '1',
    },
    {
      label: <span onClick={() => Navigate('/SingUp')} className='NbSpan'>Sing up</span>,
      key: '3',
    },
    {
      label: <span onClick={() => Navigate('/')} className='NbSpan'>  Log Out</span>,
      key: '4',

    },
  ];
  return (
    <>
    <Container>
      <Wrapper>
        <img src={Nvicon} alt="navicon" />
        <nav>
          <Wrapper.NavItmes>
            {
              navbar.map((v)=>!v.hidden && (
                <NavLink style={{color:v.primary?"rgb(251, 119, 75)" : "black"}} primary={v.primary} key={v.id} to={v.path}>{v.title}</NavLink>
              ))
            }
          </Wrapper.NavItmes>
        </nav>
        <NavIcons>
          <AiOutlineSearch onClick={showDrawer} />
          <Drawer
            title="Basic Drawer"
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            className='nima'
          >
            <input />
          </Drawer  >
          <AiOutlineHeart onClick={() => Navigate('/wishlist')} />
          <GiShoppingCart onClick={ShwDrawer} />
          {/* Producs */}
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <FaRegUser />
          </Dropdown>
          <Drawere
            className='ShopNav'
            title="Drawere with extra actions"
            placement={right}
            height={`500 !import`}
            onClose={OnClose}
            open={stet}

          >
            <div className='close'>
              <AiOutlineClose style={{cursor:'pointer'}} onClick={OnClose} />
              <h3>Products</h3>
            </div>
          </Drawere>
        </NavIcons>
      </Wrapper >
    </Container >
    <Outlet/>
    </>
  )
}
