t1=ARGV[0].to_i
t2=ARGV[1].to_i

elapsed=[3]


elSeconds=t1+t2



elapsed[0]=(elSeconds-(elSeconds%3600))/3600
elSeconds=elSeconds-(elapsed[0]*3600)

elapsed[1]=(elSeconds-(elSeconds%60))/60
elapsed[2]=elSeconds-(elapsed[1]*60)

output=[elapsed[0].to_s+" час ", elapsed[1].to_s+" минут ", elapsed[2].to_s+" секунд"]

if elapsed[2]==0
 output.slice!(2)
end

outstring=""

for i in 0..output.size-1 do
  outstring=outstring+output[i]
end

puts outstring







