export default {
  sign (num) {
    return num < 0 ? -1 : 1
  },
  getPrimes (n) {
    const sieve = new (Uint32Array || Array)(n)
    const primes = []
    const length = sieve.length
    const limit = Math.floor(Math.sqrt(n))
    let p
    let m = 0
    for (p = 2; p <= limit; p++) {
      for (m = p * 2; m <= length; m += p) {
        sieve[ m ] = 1
      }
    }
    for (p = 2; p < length; p++) {
      if (!sieve[ p ]) {
        primes.push(p)
      }
    }
    return primes
  },
  getPrimeFactors (n) {
    let prime = 2
    let num = Math.abs(n)
    const factors = []
    const primes = this.getPrimes(num)
    const length = primes.length

    for (let i = 0; i < length; i++) {
      prime = primes[ i ]
      while (num % prime === 0) {
        factors.push(prime)
        num /= prime
      }
    }
    if (num > 1) {
      factors.push(num)
    }
    return factors
  },
  binaryEuclidean (a, b) {
    let d = 0
    while (a % 2 === 0 && b % 2 === 0) {
      a /= 2
      b /= 2
      d += 1
    }
    while (a !== b) {
      if (a % 2 === 0) a /= 2
      else if (b % 2 === 0) b /= 2
      else if (a > b) a = (a - b) / 2
      else b = (b - a) / 2
    }
    return a * Math.pow(2, d)
  },
  gcd (...nums) {
    const a = Math.abs(nums.pop())
    const b = Math.abs(nums.pop())
    if (!a) return b
    if (!b) return a
    const result = this.binaryEuclidean(a, b)
    if (nums.length > 0) {
      return this.gcd(result, ...nums)
    } else {
      return result
    }
  },
  lcm (...nums) {
    const a = nums.pop() || 0
    const b = nums.pop() || 0
    if (!a || !b) return 0
    if (!a) return b
    if (!b) return a
    const result = (a / this.gcd(a, b)) * b
    if (nums.length > 0) {
      return this.lcm(result, ...nums)
    } else {
      return result
    }
  },
  extendedEuclidean (a, b) {
    if (!a && !b) return { d: 0, x: 0, y: 0 }
    if (!a) return { d: b, x: 1, y: 0 }
    if (!b) return { d: a, x: 0, y: 1 }
    const steps = []
    let s0 = 1
    let s1 = 0
    let s = 0
    let t0 = 0
    let t1 = 1
    let t = 0
    let r0 = Math.abs(a)
    let r1 = Math.abs(b)
    let r = 0
    let q = 0
    while (r1 !== 0) {
      q = Math.floor(r0 / r1)
      r = r0 % r1
      t = t0 - (q * t1)
      s = s0 - (q * s1)
      steps.push({a: r0, b: r1, q: q, r: r, s0: s0, s1: s1, s: s, t0: t0, t1: t1, t: t});
      [ r0, r1 ] = [ r1, r ];
      [ s0, s1 ] = [ s1, s ];
      [ t0, t1 ] = [ t1, t ]
    }
    s0 *= this.sign(a)
    t0 *= this.sign(b)
    if (s1 < 0) [ s1, t1 ] = [ -s1, -t1 ]
    return {
      a0: s1,
      b0: t1,
      x: s0,
      y: t0,
      d: a * s0 + b * t0,
      steps: steps
    }
  },
  congruence (a = 0, b = 0, m = 0) {
    const { d, x, steps } = this.extendedEuclidean(a, m)
    // check if congruence has solution
    if (b % d !== 0) {
      return { d: d, result: [], steps: [] }
    }
    if (d === 1) {
      const sgn = a < m ? 1 : -1
      return {
        d: d,
        steps: steps,
        result: [ (sgn * x * b % m + m) % m ]
      }
    } else {
      const m0 = m / d
      const c = this.congruence(a / d, b / d, m0)
      const results = []
      let result = c.result[ 0 ]
      while (result < m) {
        results.push(result)
        result += m0
      }
      return { d: d, steps, result: results }
    }
  },
  diophantic (a, b, c) {
    const { x, y, a0, b0, d, steps } = this.extendedEuclidean(a, b)
    const sgn = val => val < 0 ? '-' : '+'
    const sgnX = a < 0 ? -1 : 1
    const sgnY = b < 0 ? -1 : 1
    if (c % d !== 0) return
    const m = c / d
    return {
      x: `${sgnX * x * m} ${sgn(sgnX * a0)} ${Math.abs(a0)}k`,
      y: `${sgnY * y * m} ${sgn(sgnY * b0)} ${Math.abs(b0)}k`,
      steps: steps
    }
  },
  chineseRemainder (r, m) {
    const length = r.length
    if (length !== m.length) return null
    for (let i = 0, j; i < length; i++) {
      for (j = 0; i < length; i++) {
        if ((r[ i ] - r[ j ]) % this.gcd(m[ i ], m[ j ])) {
          return null
        }
      }
    }
    // TODO
    // const mod = this.lcm(...m)
    // const factors = m.map(this.getPrimeFactors)
    // const primes = this.getPrimes(Math.sqrt(mod))
  }
}
