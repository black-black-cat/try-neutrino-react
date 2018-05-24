import { Component } from 'react'
import style from './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import { Divider } from 'antd'

export default class App extends Component {
  state = {
    name: 'try-neutrino-react'
  }

  render () {
    return (
      <div>
        <h1 className="my-h1">super man</h1>
        <BrowserRouter>
          <Route path="/" component={Header} />
        </BrowserRouter>
      </div>
    )
  }
}
