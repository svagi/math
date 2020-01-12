import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  app: {
    padding: '.4em',
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
  },
  li: {
    padding: 0,
    margin: 0,
  },
  a: {
    padding: '.7em',
    display: 'inline-block',
  },
}

const links = {
  'prime-generator': 'Prime numbers (Sieve of Eratosthenes)',
  'prime-factors': 'Prime factors (factorization)',
  'extended-euclidean':
    'Extended Euclidean algorithm (greatest common divisor)',
  lcm: 'Least common multiple',
  congruence: 'Linear Congruence Equation',
  // 'diophantic': 'Diophantine equation',
  // 'chinese-remainder': "Chinese remainder"
}

export default class App extends React.Component {
  render() {
    return (
      <div style={style.app}>
        <ul style={style.ul}>
          {Object.keys(links).map(link => (
            <li key={link} style={style.li}>
              <Link to={`/${link}`} style={style.a}>
                {links[link]}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        {this.props.children}
      </div>
    )
  }
}
