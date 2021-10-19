import React, { useRef } from 'react'
import { auth } from '../firebase'
import './SignInScreen.css'

const SignInScreen = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((err) => alert(err.message))
  }

  const register = (e) => {
    console.log("Email : ",emailRef.current.value,"     Password : ", passwordRef.current.value)
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => alert(err.message))
  }

  return (
    <div className='signInScreen'>
      <h1>Sign in</h1>
      <form action='' className='signInScreen__form'>
        <input
          ref={emailRef}
          type='email'
          placeholder='E-mail or Phone number'
          className='signInScreen__input'
        />
        <input
          ref={passwordRef}
          type='password'
          placeholder='Password'
          className='signInScreen__input'
        />
        <button type='submit' className='signInScreen__btn' onClick={signIn}>
          Sign In
        </button>
        <div className='signInScreen__check'>
          <input type='checkbox' name='' id='check' />
          <p>Remember me</p>
        </div>
        <p>
          New to Netflix?{' '}
          <a href='/' onClick={register}>
            Sign up Now
          </a>
        </p>
      </form>
    </div>
  )
}

export default SignInScreen
