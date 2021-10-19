import React from 'react'
import { auth } from '../firebase'
import { useGlobContext } from '../GlobContext/context'
import './ProfileScreen.css'
const ProfileScreen = () => {
const user =useGlobContext(user)

  return (
    <div className='profileScreen'>
      <h1>Edit Profile</h1>
      <div className='profileScreen__body'>
        <div className='profileScreen__body__logo'>
          <img
            src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png'
            alt='Profile Logo'
          />
        </div>
        <div className='profileScreen__body__info'>
          <h3>{user.email}</h3>
          <h2>Plans (Current Plan: Premium)</h2>
          <h4>Renewal Date : 12/12/2021</h4>
          <div className='profileScreen__packages'>
            <div className='profileScreen__package'>
              <div className='profileScreen__package__descreption'>
                <h4>Netflix Standard</h4>
                <p>1080p</p>
              </div>

              <button className='profileScreen__package__btn'>Subscribe</button>
            </div>
            <div className='profileScreen__package'>
              <div className='profileScreen__package__descreption'>
                <h4>Netflix Basic</h4>
                <p>480p</p>
              </div>

              <button className='profileScreen__package__btn'>Subscribe</button>
            </div>
            <div className='profileScreen__package'>
              <div className='profileScreen__package__descreption '>
                <h4>Netflix Premium</h4>
                <p>4K+HDR</p>
              </div>
              <button className='profileScreen__package__btn selected'>
                Current Package
              </button>
            </div>
            <button className='profileScreen__signout' onClick={auth.signOut()}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
