"use strict";
// (null, undefined, any) type, type assertions(!)
// mon-ul assertion operatior (postfix!),
// optional chaning (?)
// literal types (value as types)
// literal inference( as const)
var user = {};
user = {
    name: 'a',
    age: 20
};
// non null assertion
user.age = user.age + 5;
var Na = 'hri';
// literal interface
var my3 = ['arif', 'kobir', 'omer'];
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
