import { useEffect, useState } from 'react'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import { auth } from './firebase'
import { useGlobContext } from './GlobContext/context'

function App() {
  const { login, logout, user } = useGlobContext()
  useEffect(() => {
    //it keep you logged in when you quit the website and visit it again
    const unsebscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      } else {
        logout()
      }
    })
    return unsebscribe
  }, [])

  return (
    <div className='App'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path='/'>
              <HomeScreen />
            </Route>
            <Route path='/profile'>
              <ProfileScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
