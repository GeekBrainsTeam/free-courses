
const filter = (str) => {
  let res = ''
  for (let c of str) {
    if (c !== 'Р' && c !== 'К' && c !== 'Н' && c !== 'р' && c !== 'к' && c !== 'н')
      res += c
  }
  return res
}

process.stdout.write(filter(process.argv[2]))
