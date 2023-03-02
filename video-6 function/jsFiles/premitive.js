"use strict";
// premitive types(string, number and boolean), uniontypes and inferred
var _a;
// inferred types
var myName = 'Hridoy';
var father = 'baba';
// father = 20
// premitive types
var sister = 'faima';
sister = 'fozila';
sister = 'hajera';
var friends = ['sabbir', 'mannan', 'mahim'];
var friendClass = ['sabbir', 20];
var sabbir = {
    fullName: 'Sabbir Hossain Bijoy',
    roll: 2,
    age: 20,
    // single: true,
    support: ['Brazil']
};
// **** importand ! or ? in here **** //
sabbir.age = sabbir.age + 20;
// sabbir.age = sabbir.age && sabbir.age + 20
sabbir.support = (_a = sabbir.support) === null || _a === void 0 ? void 0 : _a.map(function (s) { return s.toUpperCase(); });
// let sabbir: {fullName: string, roll: number, single?: boolean};
// sabbir = {
//     fullName: 'Sabbir Hossain Bijoy',
//     roll: 2,
//     single: true,
// }
// uniontypes
var my = 'hridoy';
my = 21;
my = 'bike & car';
// const => how to get data type by const 
var myFullName = 'Hridoy';
// const myFullName: "Hridoy" = "Hridoy"
// const myFullName: string = 'Hridoy'
