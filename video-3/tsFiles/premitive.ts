// premitive types(string, number and boolean), uniontypes and inferred

// inferred types
let myName = 'Hridoy';
let father = 'baba'
// father = 20

// premitive types
let sister: string = 'faima'
sister = 'fozila'
sister = 'hajera'

let friends: string[] = ['sabbir', 'mannan', 'mahim']
let friendClass: (string | number)[] = ['sabbir', 20]
let sabbir: {fullName?: string, age?: number, roll: number, single?: boolean, support?: string[]} = {
    fullName: 'Sabbir Hossain Bijoy',
    roll: 2,
    age: 20,
    // single: true,
    support: ['Brazil']
}
// **** importand ! or ? in here **** //
sabbir.age = sabbir.age! + 20
sabbir.support = sabbir.support?.map(s => s.toUpperCase())
// let sabbir: {fullName: string, roll: number, single?: boolean};
// sabbir = {
//     fullName: 'Sabbir Hossain Bijoy',
//     roll: 2,
//     single: true,
// }

// uniontypes
let my: string | number = 'hridoy'
my = 21
my = 'bike & car'

// const => how to get data type by const 
const myFullName = 'Hridoy'
// const myFullName: "Hridoy" = "Hridoy"