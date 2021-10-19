import React, { useContext, useState } from 'react'

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
 const [user, setUser] = useState(null)
 
const login = (user) => {
  setUser(user)
  console.log("USER BEFORE LOGOUT : ",user);
}
const logout = () => {
  setUser(null)
}
const selectUser=()=>user
  return (
    <AppContext.Provider value={{ login, logout,selectUser,user }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
