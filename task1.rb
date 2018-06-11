# Task 1

# Put your code here
if (Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])==0) 
puts (-ARGV[1]+Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])).round(2)
elsif (Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])>0)
if (-ARGV[1]+Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])>-ARGV[1]-Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])
puts (-ARGV[1]+Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])).round(2), (-ARGV[1]-Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])).round(2)
else puts (-ARGV[1]-Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])).round(2), (-ARGV[1]+Math.sqrt(ARGV[1]**2-4*ARGV[0]*ARGV[1])).round(2)
else puts "NO ROOTS"
