import React from 'react'
import Contacts from './component/Contacts'
import AddContact from './component/AddContact'
import Header from './component/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom'
export default function App() {
  return (
    <Router>
  <React.Fragment >
    <Header text="ContactManager" Link1="hello" Link2="second" Link3="third"/>
  <div className="container">
    <Route exact path="/" component={Contacts} />
    <Route exact path="/add" component={AddContact} />

  </div>
  </React.Fragment>
  </Router>
  )
}
