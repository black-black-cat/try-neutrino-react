import { Component } from 'react'
import style from './App.css' // eslint-disable-line
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
// import { Divider } from 'antd'

export default class App extends Component {
  state = {
    name: 'try-neutrino-react'
  }

  render () {
    return (
      <div className="_clear">
        <div className="h1-wrapper _clear">
          <h1 className="my-h1 my-h1--box-shadow _mt">super man</h1>
        </div>
        <BrowserRouter>
          <Route path="/" component={Header} />
        </BrowserRouter>
      </div>
    )
  }
}
