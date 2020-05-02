import { ordString } from 'fp-ts/lib/Ord'
import { eqString } from 'fp-ts/lib/Eq'

export const _localeCompare = ordString.compare

export const _localeEq = eqString

export const replace = function(s1: string) {
  return function(s2: string) {
    return function(s3: string) {
      return s3.replace(s1, s2)
    }
  }
}

export const replaceAll = function(s1: string) {
  return function(s2: string) {
    return function(s3: string) {
      return s3.replace(
        new RegExp(s1.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'),
        s2
      ) // eslint-disable-line no-useless-escape
    }
  }
}

export const split = function(sep: string | RegExp) {
  return function(s: string) {
    return s.split(sep)
  }
}

export const splitLimit = function(sep: string | RegExp, limit: number) {
  return function(s: string) {
    return s.split(sep, limit)
  }
}

export const toLower = function(s: string) {
  return s.toLowerCase()
}

export const toUpper = function(s: string) {
  return s.toUpperCase()
}

export const trim = function(s: string) {
  return s.trim()
}

exports.joinWith = function(s: string) {
  return function(xs: Array<string>) {
    return xs.join(s)
  }
}
