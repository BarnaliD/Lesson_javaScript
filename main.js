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