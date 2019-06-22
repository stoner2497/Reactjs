import React from 'react'
import Contacts from './component/Contacts'
import Header from './component/Header'
export default function App() {
  return (
  <React.Fragment >
    <Header text="ContactManager" Link1="hello" Link2="second" Link3="third"/>
  <div className="container">
    {/* <Show /> */}
    <Contacts />
    {/* <Data name="sahil" email="ssss" contact="asgdkhgahsdg" /> */}
  </div>
  </React.Fragment>
  )
}
