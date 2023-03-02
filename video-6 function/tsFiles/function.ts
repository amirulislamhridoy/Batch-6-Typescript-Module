// function all types => signature & function type;

// normal function without return 
// const add = (num1: number, num2: number): void => {
//     console.log(num1 + num2)
// }
// add(10, 20)

// (with return) normal function with return 
// function add(num1: number, num2: number): number{
//     return num1 + num2
// }
// add(10, 20)

// function default value
// function add(num1: number, num2: number, num3: number = 0): number{
//     return num1 + num2 + num3
// }
// console.log(add(10,20,30))

// function all arguments
// function add(...numbers: number[]): number{
//     return numbers.reduce((pre, cur) => pre + cur, 0)
// }
// pre = previous value
// cur = current value

// function with signature
// If I will add signature then I can't do add parameter type.
// const add: (num1: any, num2: any, num3?: number) => number = (num1, num2, num3 = 0) => {
// // const add:  (num1: any, num2: any, num3: any) => void = (num1: number, num2:number, num3:number = 0) => {
//     return num1 + num2 + num3
// }

// function type function
// let myFn: Function;
// myFn = (num1: number, num2: number = 0) => {
//     return num1 + num2
// }
// console.log(myFn(10, 20))