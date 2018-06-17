# получаем аргументы

x=ARGV[0]
s1=ARGV[1].to_i
s2=ARGV[2].to_i


#делаем хэш для соответствия букв цифрам в системах > 10

$digits={0=>"0",1=>"1", 2=>"2", 3=>"3", 4=>"4", 5=>"5", 6=>"6", 7=>"7", 8=>"8", 9=>"9", 10=>"a", 11=>"b", 12=>"c", 13=>"d", 14=>"e", 15=>"f", 16=>"g",  17=>"h", 18=>"i", 19=>"j", 20=>"k", 21=>"l", 22=>"m", 23=>"n", 24=>"o", 25=>"p", 26=>"q", 27=>"r", 18=>"s", 19=>"t",  30=>"u", 31=>"v", 32=>"w", 33=>"x", 34=>"y", 35=>"z"}




# сначала переводим число в десятичную систему
def toten(x,s1)

watch=[]
newnum=0
for i in 0..x.size-1 do

 watch.push $digits.key(x[i]).to_i


  watch[i] = watch[i]*(s1**((x.size-1)-i))

end

for i in 0..watch.size-1 do

 newnum=newnum+watch[i]

end
 return newnum
end


# затем в какую угодно
def toany(x,s2)





newnum=[]





 until x<s2 do

 newnum.push $digits[x%s2]
 x=x.to_i.div s2


 end
  newnum.push x




watch=""



newnum=newnum.reverse

for i in 0..newnum.size-1 do

  watch=watch+newnum[i].to_s
end
  return watch

end





puts toany(toten(x,s1),s2)










