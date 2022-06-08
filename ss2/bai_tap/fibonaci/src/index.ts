function generateFibonacci(num: number) {
    let fibonacciArr = [1, 2];
    let a: number = 0
    for (let i = 0; i < num; i++) {
        a = fibonacciArr[i + 1] + fibonacciArr[i]
        fibonacciArr.push(a)
    }
    return fibonacciArr;
}

let fibonacciArr = generateFibonacci(4);
//1 1 2 3 5 8 13 21
let sum = 0;
for (let i = 0; i < fibonacciArr.length; i++) {
    console.log(fibonacciArr[i]);
    sum += fibonacciArr[i];
}
console.log('Tổng ' + fibonacciArr.length + ' số fibonacci đầu tiên là: ' + sum);