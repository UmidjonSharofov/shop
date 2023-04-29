import React, { useState } from 'react'
import { Container, Contener2, NavIcons, Wrapper } from './stayle'
import Nvicon from "../../assets/images/EymoNv.jpg"
import { AiOutlineClose, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import { Drawer, Dropdown, } from 'antd'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { Drawer as Drawere } from 'antd'
import { navbar } from '../ulits'
import { Modal } from 'antd';
import { Footer } from '../Footer'
import { UseProductContext } from '../../context/PraductContext'
import { ACTION_TYPES } from '../../context/PraductContext/reduser'

export default function Navbar() {
  const { state, dispatch } = UseProductContext();
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

  // modal exit log Out

  const [exit, setExit] = useState(false);
  const [ConfirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('do you want to go');
  const showModal = () => {
    setExit(true);
  };
  const HandleOk = () => {
    setModalText('The modal will be closed after two ');
    setConfirmLoading(true);
    setTimeout(() => {
      setExit(false);
      setConfirmLoading(false);
      localStorage.removeItem('token')
      window.location.reload()
    }, 2000);
  };
  const HandleCancel = () => {
    setExit(false);
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
      label: <span onClick={showModal} className='NbSpan'>  Log Out</span>,
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
                navbar.map((v) => !v.hidden && (
                  <NavLink style={{ color: v.primary ? "rgb(251, 119, 75)" : "black" }} primary={v.primary} key={v.id} to={v.path}>{v.title}</NavLink>
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
              width={'500 important '}
              onClose={onClose}
              open={open}
              key={placement}
              className='sorch'
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
              onClose={OnClose}
              open={stet}
              width={'500'}

            >
              <Contener2>

                <div className='close'>
                  <AiOutlineClose style={{ cursor: 'pointer' }} onClick={OnClose} />
                  <h3>Products</h3>
                </div>
                <div className='Wrapper'>
                  <div className='Products'>
                    {

                      state?.cart?.length > 0 ? <div className=''>{
                        state.cart?.map((v, i) => (
                          <div key={i} className='DaPr'>
                            <div className='rasmText'>
                              <img src={v.featuredImage} alt={"img"} />
                              <div className='text'>
                                <p>{v.title}</p>
                                <p className='p'>SKU: 1995751877966</p>
                                <p>${v.price}.00</p>
                              </div>
                              <div className='quantity'>
                                <button onClick={() => dispatch({ type: ACTION_TYPES.DECREMENT_QUANTITY, payload: { praduct: v } })}>-</button>
                                <h3>{v.quantity}</h3>
                                <button onClick={() => dispatch({ type: ACTION_TYPES.INCREMENT_QUANTITY, payload: { praduct: v } })}>+ </button>
                              </div>
                            </div>
                          </div>
                        ))

                      }</div> : <div className='NoPr'>No Products yet</div>
                    }
                  </div>
                  <div className='Total'>
                    <div className='Cart'>Cart Totals</div>
                    <div className='Radus'>
                      <h3>Total</h3>
                      <h3>{state?.cart?.reduce((sum, curunt) => (sum + curunt.price * curunt.quantity), 0)}</h3>
                    </div>
                    <div className='Button'>
                      <button>Proceed To Checkout</button>
                      <button onClick={OnClose}>Continue Shopping</button>
                    </div>
                  </div>
                </div>
              </Contener2>
            </Drawere>
          </NavIcons>
          {/* Modal Exit log out*/}
          <Modal
            title="Log Out"
            open={exit}
            onOk={HandleOk}
            confirmLoading={ConfirmLoading}
            onCancel={HandleCancel}
          >
            <p>{modalText}</p>
          </Modal>
        </Wrapper >
      </Container >
      <Outlet />
      <Footer />
    </>
  )
}
