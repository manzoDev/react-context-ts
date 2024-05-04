import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import UserProvider, { UserContext } from "./contexts/UserContext";

function UserDetails(){

  const {user} = useContext(UserContext)

  return(
    <>
      <p>User Name:{user.name}</p>
      <p>User Email:{user.email}</p>
    </>
  )
}

function AnotherComponent(){

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    setUser({
      name: "Roger",
      email: "manzoroger08@gmail.com"
    })
  }, [])

  return(
    <>
      <p>Some other component</p>
    </>
  )
}

function App() {
  return (
    <UserProvider>
      <UserDetails />

      <AnotherComponent />
    </UserProvider>
  )
}

export default App;
