/*Assignment 7--Start */
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
/*Assignment 7--End */
/*Assignment 8--Start */
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
/*Assignment 8--End */
/*Assignment 9--Start */
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
/*Assignment 9--End */
/*Assignment 10--Start */
let str1 = "Jack and Jill Went Up the Hill";
let str2="";
let i=0;
let lowercasestr=str1.toLowerCase();
console.log(lowercasestr);
for (i=0;i<=lowercasestr.length;i++) {
  if(i===0 || i===9 || i===14 || i===19 || i===26)
  {
    str2+=lowercasestr.charAt(i).toUpperCase();
  }
  else{
    str2+=lowercasestr.charAt(i)
  }
}
console.log(str2);
let str3="Ramakumar";
console.log(str3.indexOf('m'));
console.log(str3.indexOf('H'));
console.log(isemailvalid('senthil@gmail.com'));
console.log(isemailvalid('m'));
function isemailvalid(email)
{
 if(email.includes('@'))
 {
   return 'valid email';
 }
 return 'email is not valid';
}
/*Assignment 10--End */