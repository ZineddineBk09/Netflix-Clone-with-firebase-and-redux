import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import './Nav.css'
const Nav = () => {
  const [show, setShow] = useState(false)
  const history = useHistory()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) setShow(true)
      else setShow(false)
    })
  }, [])

  return (
    <nav className={`nav ${show && 'nav__black'} `}>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
        alt='Netflix Logo'
        onClick={() => history.push('/')}
      />

      <img
        className='nav__avatar'
        src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
        alt='Netflix Logo'
        onClick={() => history.push('/profile')}
      />
    </nav>
  )
}

export default Nav
