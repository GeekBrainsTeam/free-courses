/* Task 1 */
/*
1. Системы счисления
Реализовать функцию перевода числа из одной системы счисления в другую.
На вход подается исходные число i и система счисления a и требуемая система счисления b.
0 <= i <= 10000
2 <= a, b <= 36
Пример
> node task.js 7 10 2
> 111
*/

/* Put your code here */
//test
//const args = process.argv.slice(2);
//work
const args = process.argv.slice(1);

const i = args[0];
const a = args[1];
const b = args[2];

console.log(parseInt(i, a).toString(b));