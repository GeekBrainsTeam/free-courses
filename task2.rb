day=ARGV[0].to_i
$month=ARGV[1]
year=ARGV[2].to_i


daysInMonth={"января"=>31, "февраля"=>28, "марта"=>31, "апреля"=>30, "мая"=>31, "июня"=>30, "июля"=>31, "августа"=>31, "сентября"=>30, "октября"=>31, "ноября"=>30, "декабря"=>31}

if year%4==0

  daysInMonth["февраля"]=29

end
monthArr=daysInMonth.keys
dayArr=daysInMonth.values

elapsedDays=0


for $i in 0..monthArr.index($month) do

  elapsedDays=elapsedDays+dayArr[$i]


end

elapsedDays=elapsedDays-dayArr[$i]+day

if year%4==0
  elapsedDays=366-elapsedDays
else
  elapsedDays=365-elapsedDays

end







puts elapsedDays