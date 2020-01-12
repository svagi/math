import React from 'react'
import math from '../math'

const style = {
  calc: {
    padding: '.4em',
    margin: '.4em 0',
    background: '#eee',
  },
}

export default class PrimeNumbers extends React.Component {
  state = {
    number: 0,
    primes: [],
  }
  handleUpperLimitChange = e => {
    e.preventDefault()
    this.setState({ number: parseInt(e.target.value, 10) || 0 })
  }
  handleFocus = e => {
    e.target.select()
  }
  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      primes: math.getPrimes(this.state.number),
    })
  }
  render() {
    return (
      <div>
        <h1>Prime numbers generator</h1>
        <form
          className="pure-form pure-form-stacked"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="number">Select number (upper limit)</label>
          <input
            id="number"
            type="number"
            min="2"
            max="100000"
            value={this.state.number}
            onFocus={this.handleFocus}
            onChange={this.handleUpperLimitChange}
          />
          <button type="submit" className="pure-button">
            Calculate
          </button>
        </form>
        {this.state.primes.length > 0 && (
          <div style={style.calc}>{this.state.primes.join(' ')}</div>
        )}
      </div>
    )
  }
}
