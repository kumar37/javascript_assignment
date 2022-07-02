/*Assignment 7 */
console.log('Hello!');
let varstring = 'ram';
console.log(typeof(varstring));
const varnumber = 3;
console.log(typeof(varnumber));
const varbigint = 900719925124740998n;
console.log(typeof(varbigint));
const varbool = true;
console.log(typeof(varbool));
let varundefined;
console.log(typeof(varundefined));
const varnull = null;
console.log(typeof(varnull));
const varsymbol = Symbol('hello');
console.log(typeof(varsymbol));
let varobj = { };
console.log(typeof(varobj));
let name=username();
console.log(name);


add('t','t');
subract('t',2);
multiply(2,2);
Divide(500,3);
add(5,6);
subract(5.5,5);
multiply(6,1);
Divide(3,2);
Divide(0,1);

/*Assignment 8 */
function username() {
  let name = 'Senthilkumar P'
  return name;
 }

 (function () {
  let name = 'Senthilkumar P IIFE'
  console.log(name);
  return name;
 })();

 let anonymousname=function()
 {
  let name = 'Senthilkumar P anonymous'
  console.log(name);
  return name;
 }
 anonymousname();

 function add(num1,num2) {
   if(isNaN(num1))
   {
     num1=0;
   }
   if(isNaN(num2))
   {
     num2=0;
   }
  let result = num1+num2;
  console.log(result);
  return result;
 }
 function subract(num1,num2) {
  if(isNaN(num1))
  {
    num1=0;
  }
  if(isNaN(num2))
  {
    num2=0;
  }
 let result = num1-num2;
 console.log(result);
 return result;
}
function multiply(num1,num2) {
  if(isNaN(num1))
  {
    num1=0;
  }
  if(isNaN(num2))
  {
    num2=0;
  }
 let result = num1*num2;
 console.log(result);
 return result;
}
function Divide(num1,num2) {
  if(isNaN(num1))
  {
    num1=0;
  }
  if(isNaN(num2))
  {
    num2=0;
  }
 let result = num1/num2;
 console.log(result);
 return result;
}

/*Assignment 9 */
function MyProfile() {
  let namedetails = 'Senthilkumar';
  let Eductiondetails = 'BE';
  let jobdetails = 'Technical Lead';
  let contactdetails = 'senthilpece19@gmail.com';
  
  function fnnamedetails() {
    console.log(namedetails);
  }
  function fnEductiondetails() {
    console.log(Eductiondetails);
  }
  function fnjobdetails() {
    console.log(jobdetails);
  }
  function fncontactdetails() {
    console.log(contactdetails);
  }
  return {fnnamedetails,fnEductiondetails,fnjobdetails,fncontactdetails};
  }
  
  let profile=new MyProfile();
  profile.fnnamedetails();
  profile.fnEductiondetails();
  profile.fnjobdetails();
  profile.fncontactdetails();
