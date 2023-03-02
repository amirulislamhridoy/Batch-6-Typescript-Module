// (null, undefined, any) type, type assertions(!)
// mon-ul assertion operatior (postfix!),
// optional chaning (?)
// literal types (value as types)
// literal inference( as const)

// null, undefined, any , assertions(!)
type User = {
    name: string,
    age?: number
}
let user= {} as User
user = {
    name: 'a',
    age: 20
}
// non null assertion
user.age = user.age! + 5

// litteral types
type na = 'hri' | 'ri';
let Na: na = 'hri'

// literal interface
const my3 = ['arif', 'kobir', 'omer'] as const

// const my3 = ['arif', 'kobir', 'omer']
// const my3 = ['arif', 'kobir', 'omer'] as const
// type Fr = {
//     arif: string,
//     kobir: string,
//     omer: string
// }
// let fr: Fr;
// my3.forEach((m, i) => {
//     fr[m] = m
// })