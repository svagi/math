import React, { createClass } from 'react'
import math from '../math'

const style = {
  calc: {
    padding: '.4em',
    margin: '.4em 0',
    background: '#eee'
  }
}

export default createClass({
  getInitialState () {
    return {
      number: 0,
      primes: []
    }
  },
  handleNumberChange (e) {
    e.preventDefault()
    this.setState({
      number: parseInt(e.target.value, 10) || 0
    })
  },
  handleFocus (e) {
    e.target.select()
  },
  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      primes: math.getPrimeFactors(this.state.number)
    })
  },
  render () {
    return (
      <div>
        <h1>Prime factors (factorization)</h1>
        <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
          <label htmlFor='number'>
            Select number
          </label>
          <input
            id='number'
            type='number'
            min='2'
            max='100000000'
            value={this.state.number}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange}
          />
          <button type='submit' className='pure-button'>
            Calculate
          </button>
        </form>
        {this.state.primes.length > 0 && (
          <div style={style.calc}>
            {this.state.primes.join(' x ')}
          </div>
        )}
      </div>
    )
  }
})
