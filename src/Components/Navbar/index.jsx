import React, { useState } from 'react'
import { Container, NavIcons, Wrapper } from './stayle'
import Nvicon from "../../assets/images/EymoNv.jpg"
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import { Drawer, Dropdown, } from 'antd'
import { NavLink, useNavigate } from 'react-router-dom'
import {Drawer as Drawershop } from 'antd';

export default function Navbar() {
  const Navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('top');
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
  const items = [
    {
      label: <span onClick={()=> Navigate('/Profile')} className='NbSpan'>Profile</span>,
      key: '0',
    },
    {
      label: <span onClick={()=> Navigate('/Singip')}  className='NbSpan'>Sing in</span>,
      key: '1',
    },
    {
      label: <span onClick={()=> Navigate('/SingUp')}  className='NbSpan'>Sing up</span>,
      key: '3',
    },
    {
      label:<span onClick={()=> Navigate('/LogOut')}  className='NbSpan'>  Log Out</span>,
      key: '4',
     
    },
  ];
  return (
    <Container>
      <Wrapper>
        <img src={Nvicon} alt="navicon" />
        <nav>
          <Wrapper.NavItmes>
            <Wrapper.NavItmes.NavItm >
              <NavLink to='/'>Home</NavLink>
            </Wrapper.NavItmes.NavItm>
            <Wrapper.NavItmes.NavItm primary >
              <NavLink to='/shop'>Shop</NavLink>
            </Wrapper.NavItmes.NavItm>
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
          >
            <input />
          </Drawer>
          <AiOutlineHeart onClick={() => Navigate('/wishlist')} />
          <GiShoppingCart />

          {/* Producs */}
          <Dropdown
            menu={{
              items,
            }}
            trigger={['click']}
          >
            <FaRegUser />
          </Dropdown>
        </NavIcons>
      </Wrapper >
    </Container >
  )
}
