"use strict";
// object & enum
// object 
var sabbirObj = {
    name: 'sabbir',
    age: 20,
    merrid: false,
    support: ['Brazil']
};
sabbirObj.age = sabbirObj.age + 5;
// sabbirObj.age = sabbirObj.age && sabbirObj.age + 5
//enum
var firstEnum;
(function (firstEnum) {
    firstEnum[firstEnum["Arif"] = 0] = "Arif";
    firstEnum[firstEnum["fahim"] = 1] = "fahim";
    firstEnum[firstEnum["monir"] = 10] = "monir";
})(firstEnum || (firstEnum = {}));
// console.log(firstEnum.Arif)
// console.log(firstEnum[1])
// console.log(firstEnum[10])
// console.log(firstEnum.monir)
