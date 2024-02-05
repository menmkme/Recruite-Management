import React, { useState } from 'react'
import logo from "../../../assets/images/logo.jpg"
import { Link } from 'react-router-dom'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Button from 'react-bootstrap/Button'

const Nav = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <div className='w-100 dn-ns pa2 inline-flex justify-between'>
        <Button className='bn pa2 shadow-2 br-pill pl4 pr4' variant="primary" onClick={handleShow}>
          =
        </Button>
        <p className='f4 pointer'>
          Madaki Family
        </p>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </div> */}

      <div className='inline-flex justify-between w-100 pa2 dn-s'>
        <div className='w-10'>
          <img src={logo} alt='logo' className='w-70-m w-50-l' />
        </div>
        <div className='w-60 inline-flex justify-around f3 pa2'>
          <Link className='link black dim b pointer' to="#" onClick={handleClose}>Home</Link>
          <Link className='link black dim b pointer' to="#" onClick={handleClose}>Ratio</Link>
          <Link className='link black dim b pointer' to="#" onClick={handleClose}>About</Link>
          <Link className='link black dim b pointer' to="#" onClick={handleClose}>Contact</Link>
          <Link className='link black dim b pointer' to="#" onClick={handleClose}>Login</Link>
        </div>
      </div>
    </>
  )
}

export default Nav