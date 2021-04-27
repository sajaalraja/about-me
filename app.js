/*"use strict"
alert("welcome");
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
let myage=prompt('do you  age owner the website ?').toLowerCase();
switch(myage){
  case 'yes':
  alert("the answer is 27");
  console.log("the answer is 27");
  break;
  default:
  alert("ok no problem");
  console.log("no problem ");
  break;
}
let major=prompt('do you   major study in the unieversity  owner the website ?').toLowerCase();
switch(major){
  case  'yes':
  alert("the answer is computer science ");
  console.log("computer science ");
  break;
  default:
  alert("ok no problem ");
  console.log("no problem ");
  break;
}
let year =prompt('do you know when  graduated from unieversity  owner the website ?')
switch(year){
  case  'yes':
  alert("the answer is 2016");
  console.log("2016");
  break;
  default:
  alert("ok no problem ");
  console.log("no problem ");
  break;
}
let job  =prompt('do you know   job  before year worked  owner the website ?').toLowerCase();
switch(job){
  case  'yes' :
    alert("the answer is teacher");
  console.log("tachert");
  break;
  default:
  alert("ok no problem");
  console.log("no problem");
  break;
}
*/alert ( 'thankyou  for  answering question'   );


// the lab3

let names = ['saja', 'esraa', 'afnan', 'ahlam'];
let userAnswer = prompt('what is names of the owners website?');
let flag = false;
for (let i = 0; i < names.length; i++) {
    if (userAnswer === names[i]) {
        console.log("yes right");
        flag = true;
        break;
    }
}
if (flag === false) {
    console.log("sorry ");
   
     
    
    

  }
  

