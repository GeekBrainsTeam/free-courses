var number = process.argv[2];
var numeralSystem = process.argv[3];
var resultNumeralSystem = process.argv[4];
var res;
if (+resultNumeralSystem === 10) {
    res = parseInt(number, +numeralSystem);
} else if (+numeralSystem === 10) {
    res = Number(number).toString(+resultNumeralSystem);
} else {
    res = Number(+parseInt(number, +numeralSystem)).toString(+resultNumeralSystem);
}
res=res.toString();
process.stdout.write(res);
