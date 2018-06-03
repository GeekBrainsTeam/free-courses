
def loe(phrase)
  if phrase.downcase.scan(/\w/).eql?(phrase.downcase.scan(/\w/).reverse)
    return 'YES'
  else
    return 'NO'
  end
end

puts loe(ARGV[0].to_s)
