const num=[10,20,30,40,50];
//Array destructuring
// const a=num[0];
// const b=num[1];
// const c=num[2];
// const d=num[3];
// const e=num[4];

const [f,s,...rest]=num;
const obj={name:"abc",id:2,email:'ab@gmail.com'}
const {name,...other}=obj;
const arr=[1,2];
const arr1=[3,4,5];
const newarr=[...arr,...arr1];
console.log(newarr);
// const name=obj.name;
// const id=obj.id;
// const email=obj.email;   

const {name:newname,id,email}=obj;
console.log(newname);
console.log(id);
console.log(email)
console.log(f);
console.log(s);
console.log(rest);
// console.log(d);
// console.log(e);