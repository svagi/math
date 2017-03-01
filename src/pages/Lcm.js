import React, { createClass } from 'react'
import math from '../math'

const style = {
  calc: {
    padding: '.4em',
    margin: '.4em 0',
    background: '#eee',
    lineHeight: '1.5em'
  }
}

export default createClass({
  getInitialState () {
    return {
      a: 0,
      b: 0,
      lcm: 0,
      gcd: 0,
      factors: {
        a: [],
        b: []
      }
    }
  },
  handleNumberChange (key) {
    return (e) => {
      e.preventDefault()
      this.setState({
        [key]: parseInt(e.target.value, 10) || 0
      })
    }
  },
  handleFocus (e) {
    e.target.select()
  },
  handleSubmit (e) {
    e.preventDefault()
    const { a, b } = this.state
    this.setState({
      lcm: math.lcm(a, b),
      gcd: math.gcd(a, b),
      factors: {
        a: math.getPrimeFactors(a),
        b: math.getPrimeFactors(b)
      }
    })
  },
  render (state = this.state) {
    return (
      <div>
        <h1>Least common multiple</h1>
        <p>
          Formula: <i>lcm(a, b) = (a * b) / gcd(a, b)</i>
        </p>
        <form className='pure-form pure-form-stacked' onSubmit={this.handleSubmit}>
          <label htmlFor='number-a'>
            Select number A
          </label>
          <input
            id='number-a'
            type='number'
            value={state.a || 0}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange('a')}
            required
          />
          <label htmlFor='number-b'>
            Select number B
          </label>
          <input
            id='number-b'
            type='number'
            value={state.b || 0}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange('b')}
            required
          />
          <button type='submit' className='pure-button'>
            Calculate
          </button>
        </form>
        <div style={style.calc}>
          <div>gcd({state.a}, {state.b}) = {state.gcd}</div>
          <div>lcm({state.a}, {state.b}) = <strong>{state.lcm}</strong></div>
        </div>
        <div style={style.calc}>
          {Object.keys(state.factors).map(key =>
            <div key={key}>
              {key} = {state.factors[ key ].join(' x ') || 0}
            </div>
          )}
        </div>
      </div>
    )
  }
})
