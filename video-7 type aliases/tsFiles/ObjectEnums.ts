// object & enum
// object 
const sabbirObj: {name: string, age?: number, merrid: boolean | string, support?: string[]} = {
    name: 'sabbir',
    age: 20,
    merrid: false,
    support : ['Brazil']
}
sabbirObj.age = sabbirObj.age! + 5
// sabbirObj.age = sabbirObj.age && sabbirObj.age + 5

//enum
enum firstEnum{
    Arif,
    fahim,
    monir = 10
}
// console.log(firstEnum.Arif)
// console.log(firstEnum[1])
// console.log(firstEnum[10])
// console.log(firstEnum.monir)