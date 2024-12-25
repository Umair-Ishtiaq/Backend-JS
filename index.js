//foreach

var arr = [1,2,3,4,5];

arr.forEach(function(item){
    console.log(item);
});

//map
var arr2 = arr.map(function(item){
    return item * 2;
});
console.log(arr2);
//filter
arr3 = arr.filter(function(item){
    if(item % 2 == 0){
        return true;
}
return false;});
console.log(arr3);

//indexof
arr.indexOf(3);

//Objects
var person = {
    name: "A",
    age: 20
}
console.log(person.name);

//async functions
var blob=await fetch("https://jsonplaceholder.typicode.com/users");
var res=await blob.json();
console.log(res);