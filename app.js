"use strict"
alert("welcome");
let score=0;
function name()
{
    let nameq=prompt('do you name owner the website ?').toLowerCase();
      switch(nameq){
         case 'yes':
         alert("the answer is saja");
         console.log("saja");
         break;
      default:
        alert("ok no problem ");
        console.log("no problem ");
        break;
      }
}
name();
function age()
{
let myage=prompt('do you  age owner the website ?').toLowerCase();
switch(myage){
  case 'yes':
  alert("the answer is 27");
  console.log("the answer is 27");
  break;
  default:
  alert("ok no problem");
  console.log("no problem ");
  score++;
  break;
}
}
age();
function maj()
{

let major=prompt('do you   major study in the unieversity  owner the website ?').toLowerCase();
switch(major){
  case  'yes':
  alert("the answer is computer science ");
  console.log("computer science ");
  break;
  default:
  alert("ok no problem ");
  console.log("no problem ");
  score++;
  break;
}
}
maj() ;
function year1(){

let year =prompt('do you know when  graduated from unieversity  owner the website ?')
switch(year){
  case  'yes':
  alert("the answer is 2016");
  console.log("2016");
  break;
  default:
  alert("ok no problem ");
  console.log("no problem ");
  score++;
  break;
}
}
year1() ;
function job1()
{
let job  =prompt('do you know   job  before year worked  owner the website ?').toLowerCase();
switch(job){
  case  'yes' :
    alert("the answer is teacher");
  console.log("tachert");
  break;
  default:
  alert("ok no problem");
  console.log("no problem");
  score++;
  break;
}
}
job1();
 



function numselect(){
let numberselect = 3;
 let attemptnumber = Number(prompt('how many times do you want guess'));
 for (let attempt = 1; attempt <= attemptnumber; attempt++) {
     let number = parseInt(prompt('can you guess my number  please '));
     if (number === numberselect) {
         alert('right answer');
         break;
     } else if (number > numberselect) {
         alert('too high');
     } else if (number < numberselect) {
         alert('too low');
         score++;
     }
 }
} numselect();
 alert('the right answer is 3'); 


function country()
{
let namecountries =  ['jordan', 'syria', 'lebanon', 'kuwait'];
let flag = false;
for (let attempt = 1; attempt <= 6; attempt++) {
    let userAnswer = prompt('what is my best name countries?');
    for (let i = 0; i < namecountries.length; i++) {
        if (userAnswer === namecountries[i]) {
            alert('right');
           score++;
            flag = true;
            break;
        }
    }
    if (flag === true) {
        break;
    }
}

} country();
alert(' your score is ', score);
     
    
    

 
  

