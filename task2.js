var m = { "января": 0, "февраля": 1, "марта": 2, "апреля": 3, "мая": 4, "июня": 5, "июля": 6, "августа": 7, "сентября": 8, "октября": 9, "ноября": 10, "декабря": 11 };
var day = process.argv[2];
var month = m[process.argv[3]];
var year = process.argv[4];
var startDate = new Date(year, month, day);
var endDate = new Date(year, 11, 31);
var res = (endDate - startDate) / 86400000;
process.stdout.write(res + '\n');
