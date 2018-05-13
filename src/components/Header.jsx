import React from 'react'
import { DatePicker } from 'antd'
import fly from '../api/flyio'
import fecha from 'fecha'

fecha.masks.myMask = 'YYYY-M-D HH:mm:ss'

export default class Header extends React.PureComponent {
  constructor () {
    super()
    this.state = {

    }
    this.getNews()
  }
  arithmetic () {
    let arr = []
    let length = 99
    let sum = 0
    for (let i = 1; i <= length; i++) {
      arr.push(i * 2 - 1)
      sum += i * 2 - 1
    }
    let sum2 = (1 + (length * 2 - 1)) * length / 2
    return [
      <div>{sum}</div>,
      <div>{sum2}</div>
    ]
  }
  getNews () {
    let size = 10
    let index = 1
    let url = `/data/all/${size}/${index}`
    fetch(url)
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => err)

    return fly.get(url)
      .then(resp => resp.data)
      .then(data => {
        console.log(1)
        console.log(data)

        // let times = data.results.map(item => {
        //   return (
        //     // <li>{fecha.format(new Date(item.publishedAt))}</li>
        //     <li>{item.publishedAt}</li>
        //   )
        // })
        // console.log(times)
        this.setState({
          news: data.results
        })
      })
  }

  render () {
    return (
      <div>
        <h1>hey man</h1>
        <div className="sub-title">{this.arithmetic()}</div>
        <ul>
          {
            (this.state.news || [])
              .map(item => (
                <li>
                  <div>{fecha.format(new Date(item.publishedAt),'myMask')}</div>
                  <div>{item.desc}</div>
                </li>))
          }
        </ul>
        <DatePicker />
      </div>
    )
  }
}
