import { Component } from 'react'
// import style from './App.module.scss'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

export default class App extends Component {
  state = {
    name: 'try-neutrino-react'
  }

  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
      </BrowserRouter>
    )
  }
}
