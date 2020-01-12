import React from 'react'
import math from '../math'

const style = {
  calc: {
    padding: '.4em',
    margin: '.4em 0',
    background: '#eee',
    lineHeight: '1.5em',
  },
}

export default class Euclidean extends React.Component {
  state = {
    a: 0,
    b: 0,
    x: 0,
    y: 0,
    d: 0,
    steps: [],
  }
  handleNumberChange = key => {
    return e => {
      e.preventDefault()
      this.setState({
        d: 0,
        x: 0,
        y: 0,
        steps: [],
        [key]: parseInt(e.target.value, 10) || 0,
      })
    }
  }
  handleFocus = e => {
    e.target.select()
  }
  handleSubmit = e => {
    e.preventDefault()
    const { a, b } = this.state
    const ea = math.extendedEuclidean(a, b)
    if (ea) {
      this.setState({
        d: ea.d,
        x: ea.x,
        y: ea.y,
        steps: ea.steps,
      })
    }
  }
  render(state = this.state) {
    return (
      <div>
        <h1>Extended Euclidean algorithm</h1>
        <p>
          Formula: <i>gcd(a, b) = a * x + b * y</i>
        </p>
        <form
          className="pure-form pure-form-stacked"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="number-a">Select number A</label>
          <input
            id="number-a"
            type="number"
            value={state.a || 0}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange('a')}
            required
          />
          <label htmlFor="number-b">Select number B</label>
          <input
            id="number-b"
            type="number"
            value={state.b || 0}
            onFocus={this.handleFocus}
            onChange={this.handleNumberChange('b')}
            required
          />
          <button type="submit" className="pure-button">
            Calculate
          </button>
        </form>
        <div style={style.calc}>
          gcd({state.a || 'a'}, {state.b || 'b'}){' = '}
          {state.a} * {state.x} + {state.b} * {state.y} {' = '}
          <strong>{state.d}</strong>
        </div>
        {state.steps && state.steps.length > 0 && (
          <table className="pure-table pure-table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>q</th>
                <th>r</th>
                <th>s</th>
                <th>t</th>
              </tr>
              <tr>
                <th> </th>
                <th> </th>
                <th>{Math.abs(state.a)}</th>
                <th>1</th>
                <th>0</th>
              </tr>
              <tr>
                <th> </th>
                <th> </th>
                <th>{Math.abs(state.b)}</th>
                <th>0</th>
                <th>1</th>
              </tr>
            </thead>
            <tbody>
              {state.steps.map((step, idx) => (
                <tr key={idx}>
                  <td>{idx}</td>
                  <td>{step.q}</td>
                  <td>{step.r}</td>
                  <td>{step.s}</td>
                  <td>{step.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    )
  }
}
