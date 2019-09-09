// let numbers = [1 , 2 , 2 , 3 , 4 ];
// // spread operator for converting the set to array
// numbers = console.log([...new Set (numbers)]);


// let user = [1 ,2 ,3];
// // Now we copied the reference from user to admin:
// let admin = user;
// user = null;
// console.log(admin); 

// function hey() {
//     console.log('hey ' + myName);
//     };
//     hey();
//     var myName = 'Sunil';
//     function hey() {
//         console.log('hey ' + myName);
//         };
//         var myName;
//         hey();
//         myName = 'Sunil';

//        console.log(6-'8'); 
       const contact ={
           name: "ali",
           age:21,
           lastName : "jol"
       }
    //    const name = contact.name;
    //    const age = contact.age;
    //    const lastName = contact.lastName;
       
// ES6 
const {name , age , lastName} = contact;
console.log(name);
console.log(age);
console.log(lastName);


