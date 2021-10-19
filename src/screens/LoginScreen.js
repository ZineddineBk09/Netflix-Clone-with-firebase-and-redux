import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen'

const LoginScreen = () => {
const [signIn,setSignIn]=useState(true)

  return (
    <div className='login'>
      <div className='login__gradiant'>
        <div className='login__top'>
          <img
            className='login__top__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png'
            alt='Netflix Logo'
          />
          {signIn && <button className='login__top__btn' onClick={()=>setSignIn(false)}>Sign In</button>}
        </div>

        {!signIn ? <SignInScreen/> : <div className='login__body'>
          <h1>Films, séries TV et bien plus en illimité.</h1>
          <h2>Où que vous soyez. Annulez à tout moment.</h2>
          <h3>
            Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous
            abonner ou réactiver votre abonnement.
          </h3>
          <form action="">
            <input type="text" placeholder='E-mail Addresse' className="login__body__input"/>
            <button className="login__body__btn">Get Started</button>
          </form>
        </div>}
      </div>
    </div>
  )
}

export default LoginScreen
