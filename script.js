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

/**
* function is the key word
* function name is the UserName
* function with parameter/arguments
* function stop executes since it encounters return statement
*/
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