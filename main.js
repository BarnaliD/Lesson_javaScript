//*Introduction*/

// hello World!
console.log('Hello ,World');
//Variables
let greetings = 'Hi from a variable ,I am here';
console.log(greetings);
//redifine
greetings = 3
console.log(greetings);

greetings = 'Hello';
const PI =3.1415;
//printing
//Concat
console.log(greetings + 'Pi is:' + PI);

//Interpolation and templeting literals
console.log(`${greetings},PI is:${PI}`);

//Be careful with floats
console.log(0.1 + 0.2);

//Equality
console.log(1==1);//true
console.log(1=='1')//true
console.log(1==='1')//false

//loosing typing and conversion
let myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber+5);

//*control files*/
//if
let myAge = 38;

if(myAge>40) {
    console.log('You are getting old');
}else{
    console.log('You\ are still young');
}
myAge === 38? 
          console.log('old') :
          console.log('not old');
//Bollean statement?true:false

/*camelcase// Praxis in JS Function,vars
pascal case//classes
Snake case//often not used
*/

/*loops*/
//for
for(let i=0;i<5;i++){
    console.log(i);
}
let person = [
    'Mike',
    'Emma',
    'Nikala',
    'Barnali',
    'Dev',
   
];
//log entiire array
console.log(person);
//
console.log(person.length);
//Get the first person
console.log(person[0]);
//Get the last person
console.log(person[person.length - 1]);
//Get the slice of an array
let newPersons = person.slice(0,2);//First 2

console.log(newPersons);
//Add to start of an array
person.unshift('Kiki');
//add to end of an array
person.push('Feli');

console.log(person);

//Remove from start of an array
person.pop();

console.log(person);

//Loop over arrays
for(let persons of person){
    console.log(persons);
}
//
for(let i = 0;i < person.length ; i++) {
    console.log(person[i]);
}

//lambda loop
person.forEach(x => console.log(x))

//objects
let barnali ={
    firstName: 'Barnali',
    lastName:  'Mohanty',
    age: '41',
    hobby: 'Baking'

    
};
console.log(barnali)

console.log(`${barnali.firstName} ${barnali.lastName}`);
let barnalistr = `${barnali.firstName} ${barnali.lastName},age:${barnali.age}`;
console.log(barnalistr);

let barnaliAdvanced ={
    firstName: 'Barnali',
    lastName:  'Mohanty',
    age: '41',
    hobbies :['music','programming','baking','travelling']

};
console.log(barnaliAdvanced);//object
console.log(JSON.stringify(barnaliAdvanced));//JSON

console.log(barnaliAdvanced);//Object
let barnaliJSON = JSON.stringify(barnaliAdvanced);//object to JSON
console.log(barnaliJSON);
console.log(JSON.parse(barnaliJSON));// back to object

//loop over object
for(let propertyName in barnaliAdvanced){
    let propertyValue =barnaliAdvanced[propertyName];
    console.log(propertyName,propertyValue);
}
// loop through object and array inside of object
for(let propertyName in barnaliAdvanced) {
    let propertyValue =barnaliAdvanced[propertyName];
    if(Array.isArray(propertyValue)=== true) {
        for(let hobby of propertyValue) {
            console.log("Hobby :" +hobby);

        } 
        }else{
            console.log(propertyName + " :" + propertyValue);
        }
    }
//Connction to HTML
//Asl JS to create a new element
let myDiv =document.createElement('div');
// Add some HTML
myDiv.innerHTML =`
             <h1>Hello from JS!</h1>
             <p> This is a script from JavaScript,my age is ${barnali.age}</p>`;

//grab the body tag
let body = document.querySelector('body');

//Add the div to the HTML
body.append(myDiv);

//Another way to add data
let myBands = [
    {
        name :'The Beatles',
        genre : 'Pop'
    },
    {
        name : 'The Rolling Stones',
        genre : 'Rock'
    }
];
// grab the band div
let brandDiv = document.querySelector('#bands');
for(let band of myBands){
    brandDiv.innerHTML +=`
          <div class = "band">
            <h2>${band.name}</h2>
            <p>Genre : ${band.genre}<p>
          </div>
    `;
}
//Functions
function sayHello() {
    console.log(' Hello ');

}

const sayHello2 = () => { 

     console.log(' Hello 2');

}

sayHello();
sayHello2();
// Differnt ways of declaring same function
function add(a,b){
    return a + b;
}
// Arrow  function
const add2 = (a,b) => {
    return a + b;
}
// Function expression 
 const add3 = function(a,b){
     return a + b;
 }

 //Arrow function with explicit return
 const add4 = (a , b) =>  a + b;

 //Arrow fuction with implicit return and one parameter
 const add5 = a => a+ 5;

 console.log(add(1,2));
 console.log(add2(5,2));
 console.log(add3(3,2));
 console.log(add4(4,2));
 console.log(add5(1));
 
 
 
 //classes

 class Person {
     
     constructor(name,age,hobby){
        this.name =name;
        this.age = age;
        this.hobby = hobby;
     }

    greetings() {
        console.log(`Hi,my name is ${this.name} and i am ${this.age}`);
        console.log('I enjoy :' + this.hobby);
    }
 }
 const barnaliClass = new Person('Barnali' , 41 , 'Baking');
 barnaliClass.greetings();
 console.log(barnaliClass . hobby);