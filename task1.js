function parseNumber() {
    var number = process.argv[2];
    var numeralSystem = process.argv[3];
    var resultNumeralSystem = process.argv[4];
    var res = 0;
    if (+resultNumeralSystem === 10) {
        var res = parseInt(number, +numeralSystem);
    }
    return process.stdout.write(res + '\n');
}
parseNumber();