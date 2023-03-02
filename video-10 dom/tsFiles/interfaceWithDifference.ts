// interface
// interface use for generally object & function, interface extends, type aliases extends, [if you want to know difference between interface and type aliases, you should do google.]

// inteface with object
interface Person2 {
    name: string, age: number | string
}
let person2: Person2;
person2 = {name: 's', age: 's'}
interface Address2{
    present: string,
    permanent: string
} 
interface Per {
    name: string, 
    address: Address
}
let per: Per = {name: 's', address: {
    present: 'a', permanent: 'oo'
}}

// interface with function
interface Add {
    (a: number, b?: number): number;
}
const add : Add = (a, b) => {
    if(b){
        return a + b
    }else{
        return a
    }
}

// extends
// interface extends
interface auth extends Address2 {
    o: string
}
let Auth: auth;
Auth = {
    o: '',
    present: 'a',
    permanent: 'a'
}

// type aliases extends
type a = {name: string}
type b = {
    old: string
} & a
let bb: b = {
    name: '', old: 'oo'
}