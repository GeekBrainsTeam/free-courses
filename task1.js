var str=process.argv[2];

str=str.replace(/р/gi,"");
str=str.replace(/к/gi,"");
str=str.replace(/н/gi,"");

process.stdout.write(str);
