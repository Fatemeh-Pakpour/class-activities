let numbers = [1 , 2 , 2 , 3 , 4 ];
// spread operator for converting the set to array
numbers = console.log([...new Set (numbers)]);

// let and var
function scope(){
    
}
{
    var a = "This is a var";
    let b = "This is a let";
}
console.log(a);
console.log(b);
scope();
