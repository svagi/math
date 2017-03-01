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
      x: 0,
      b: 0,
      m: 0,
      gcd: 0,
      steps: []
    }
  },
  componentDidMount () {
    const query = this.props.location.query
    const a = parseInt(query.a, 10) || 0
    const b = parseInt(query.b, 10) || 0
    const m = parseInt(query.m, 10) || 0
    if (a && b && m) {
      const congruence = math.congruence(a, b, m)
      this.setState({
        a: a,
        b: b,
        m: m,
        x: congruence.result,
        gcd: congruence.d,
        steps: congruence.steps
      })
    }
  },
  handleNumberChange (key) {
    console.log()
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
    const { a, b, m } = this.state
    const congruence = math.congruence(a, b, m)
    this.setState({
      x: congruence.result,
      gcd: congruence.d,
      steps: congruence.steps
    })
  },
  render (state = this.state) {
    return (
      <div>
        <h1>Linear Congruence Equation</h1>
        <p>
          Formula: If <i>d | b</i> where <i>d = gcd(a, m)</i> then <i>a * x ≡ b (mod m)</i> has <i>d</i> solutions.
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
          <label htmlFor='number-a'>
            Select number M
          </label>
          <input
            id='number-m'
            type='number'
            value={state.m || 0}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange('m')}
            required
          />
          <button type='submit' className='pure-button'>
            Calculate
          </button>
        </form>
        <div style={style.calc}>
          <div>
            gcd({state.a}, {state.m}) = <strong>{state.gcd}</strong>
          </div>
          <div>
            <i>{state.a} * x ≡ {state.b} (mod {state.m}) has </i>
            {state.x.length > 0 ? (
              <span>
                {state.x.length} solutions. <br />
                x = <strong>{state.x.join('; ')}</strong>
              </span>
            ) : (
              <span>no solution.</span>
            )}

          </div>
        </div>
        {state.steps && state.steps.length > 0 && (
          <table className='pure-table pure-table-striped'>
            <thead>
              <tr>
                <th>#</th>
                <th>q</th>
                <th>r</th>
                <th>s</th>
                <th>t</th>
              </tr>
              <tr>
                <th>{' '}</th>
                <th>{' '}</th>
                <th>{Math.abs(state.a)}</th>
                <th>1</th>
                <th>0</th>
              </tr>
              <tr>
                <th>{' '}</th>
                <th>{' '}</th>
                <th>{Math.abs(state.m)}</th>
                <th>0</th>
                <th>1</th>
              </tr>
            </thead>
            <tbody>
              {state.steps.map((step, idx) =>
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{step.q}</td>
                  <td>{step.r}</td>
                  <td>{step.s}</td>
                  <td>{step.t}</td>
                </tr>
            )}
            </tbody>
          </table>
        )}
      </div>
    )
  }
})
