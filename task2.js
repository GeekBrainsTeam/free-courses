const minSwap = (s1, s2) => {
  if (s1.length !== s2.length)
    return -1

  for (let i = 0; i < s1.length; i++) {
    if (s1 === s2)
      return i < s1.length - i ? i : s1.length - i
    s2 = s2.substring(1) + s2[0]
  }
  return -1
}

process.stdout.write('' + minSwap(process.argv[2], process.argv[3]))
