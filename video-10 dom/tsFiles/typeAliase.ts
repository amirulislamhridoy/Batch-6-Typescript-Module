// type aliases 
// use for => tuple, array, object, object in array, function signature, union type

type my = string | number;
let myName2: my = 's'

// with infeer
type omg = 'arif' | 'hasib'
let Omg: omg = 'arif'

// union type
type ab = string | number
let Ab: ab = 2

// tuple 
type AA = [string, number, boolean]
let aa;
aa = ['ss', 2, false, 's']

// array
type ary = string[]
let Ary: ary;
Ary = ['aa', 'aa', 'ddf']

// function
let sub = (a: number, b: number): number => {
    return a - b
}
// function signature
let sub2: (a: number, b: number) => number = (a, b): number => {
    return a - b
}

// object
type Address = {
    present: string,
    permanent: string
}
type Favoirate = {
    type: 'food' | 'game',
    value: string
}
type Person = {
    name: string,
    address: Address,
    favoirate: Favoirate[]
}
let person: Person = {
    name: 'ss',
    address: {
        present: 'a',
        permanent: 'e'
    },
    favoirate: [{type: 'food', value: 'ssee'}]
}