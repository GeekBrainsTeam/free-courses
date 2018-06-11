const timeSum = (t1, t2) => {
  const wordFinder = (n, w1, w2, w5) => {
    if (n % 10 === 1 && n % 100 !== 11)
      return w1
    if ((n % 10 === 2 || n % 10 === 3 || n % 10 === 4) && !(n % 100 === 12 || n % 100 === 13 || n % 100 === 14))
      return w2
    return w5
  }
  let sum = Number(t1) + Number(t2)
  let res = ''
  if (sum >= 3600) {
    let h = Math.floor(sum / 3600)
    res += h + wordFinder(h, ' час ', ' часа ', ' часов ')
    sum -= h * 3600
  }
  if (sum >= 60) {
    let m = Math.floor(sum / 60)
    res += m + wordFinder(m, ' минута ', ' минуты ', ' минут ')
    sum -= m * 60
  }
  if (sum > 0) {
    res += sum + wordFinder(sum, ' секунда ', ' секунды ', ' секунд ')
  }
  return res
}

process.stdout.write(timeSum(process.argv[2], process.argv[3]))
