/*Assignment 7--Start */
console.log('Hello!');
let varstring = 'ram';
console.log(typeof varstring);
const varnumber = 3;
console.log(typeof varnumber);
const varbigint = 900719925124740998n;
console.log(typeof varbigint);
const varbool = true;
console.log(typeof varbool);
let varundefined;
console.log(typeof varundefined);
const varnull = null;
console.log(typeof varnull);
const varsymbol = Symbol('hello');
console.log(typeof varsymbol);
let varobj = {};
console.log(typeof varobj);
let name = username();
console.log(name);

add('t', 't');
subract('t', 2);
multiply(2, 2);
Divide(500, 3);
add(5, 6);
subract(5.5, 5);
multiply(6, 1);
Divide(3, 2);
Divide(0, 1);
/*Assignment 7--End */
/*Assignment 8--Start */
function username() {
  let name = 'Senthilkumar P';
  return name;
}

(function () {
  let name = 'Senthilkumar P IIFE';
  console.log(name);
  return name;
})();

let anonymousname = function () {
  let name = 'Senthilkumar P anonymous';
  console.log(name);
  return name;
};
anonymousname();

function add(num1, num2) {
  if (isNaN(num1)) {
    num1 = 0;
  }
  if (isNaN(num2)) {
    num2 = 0;
  }
  let result = num1 + num2;
  console.log(result);
  return result;
}
function subract(num1, num2) {
  if (isNaN(num1)) {
    num1 = 0;
  }
  if (isNaN(num2)) {
    num2 = 0;
  }
  let result = num1 - num2;
  console.log(result);
  return result;
}
function multiply(num1, num2) {
  if (isNaN(num1)) {
    num1 = 0;
  }
  if (isNaN(num2)) {
    num2 = 0;
  }
  let result = num1 * num2;
  console.log(result);
  return result;
}
function Divide(num1, num2) {
  if (isNaN(num1)) {
    num1 = 0;
  }
  if (isNaN(num2)) {
    num2 = 0;
  }
  let result = num1 / num2;
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
  return { fnnamedetails, fnEductiondetails, fnjobdetails, fncontactdetails };
}

let profile = new MyProfile();
profile.fnnamedetails();
profile.fnEductiondetails();
profile.fnjobdetails();
profile.fncontactdetails();
/*Assignment 9--End */
/*Assignment 10--Start */
let str1 = 'Jack and Jill Went Up the Hill';
let str2 = '';
let i = 0;
let lowercasestr = str1.toLowerCase();
console.log(lowercasestr);
for (i = 0; i <= lowercasestr.length; i++) {
  if (i === 0 || i === 9 || i === 14 || i === 19 || i === 26) {
    str2 += lowercasestr.charAt(i).toUpperCase();
  } else {
    str2 += lowercasestr.charAt(i);
  }
}
console.log(str2);
let str3 = 'Ramakumar';
console.log(str3.indexOf('m'));
console.log(str3.indexOf('H'));
console.log(isemailvalid('senthil@gmail.com'));
console.log(isemailvalid('m'));
function isemailvalid(email) {
  if (email.includes('@')) {
    return 'valid email';
  }
  return 'email is not valid';
}
/*Assignment 10--End */
/*Assignment 11--Start */
console.log(randomnumber(56));
function randomnumber(numrange) {
  return Math.round(Math.random() * numrange).toString();
}
/*Assignment 11--End */
/*Assignment 12--Start */
let arrtitlecase = ['srini', 'ram', 'ragu', 'naveen', 'hema', 'kathick'];
arrtitlecase.forEach(arraytitlecase);
function arraytitlecase(item, index, arr) {
  let withoutfirstchar = item.slice(1);
  arr[index] = item.charAt(0).toUpperCase() + withoutfirstchar;
}
console.log(arrtitlecase);
let containschari = arrtitlecase.filter(checker1);
function checker1(item) {
  return item.includes('i');
}
console.log(containschari);
let notcontainschari = arrtitlecase.filter(checker2);
function checker2(item) {
  return !item.includes('i');
}
console.log(notcontainschari);
/*Assignment 12--End */
/*Assignment 13--Start */
let arrstringsort = ['h', 'd', 'a', 'a', 'o'];
let arrsplice = ['a', 'b', 'c', 'd', 'e'];
let result = [];
console.log(sortstringdesc(arrstringsort));
console.log(sortstringasc(arrstringsort));
insertelemetatlast(arrsplice, 'j');
console.log(arrsplice);
insertelemetatmiddle(arrsplice, 'v');
console.log(arrsplice);
insertelemetatfirst(arrsplice, 'm');
console.log(arrsplice);
// console.log(deleteatlast(arrsplice))
// console.log(deleteatmiddle(arrsplice))
//  console.log(deleteatmiddle(arrsplice))

function sortstringasc(array) {
  return array.sort((a, b) => a.localeCompare(b));
}
function sortstringdesc(array) {
  return array.sort((a, b) => b.localeCompare(a));
}
function insertelemetatlast(array, element) {
  array.splice(array.length, 0, element);
  return array;
}
function insertelemetatmiddle(array, element) {
  let middlecount = Math.round(array.length / 2);
  array.splice(middlecount, 0, element);
  return array;
}
function insertelemetatfirst(array, element) {
  debugger;

  array.splice(0, 0, element);
  return array;
}
function deleteatlast(array, element) {
  debugger;
  let result = array.slice(0, array.length - 1);
  return result;
}
function deleteatmiddle(array, element) {
  debugger;
  console.log(array);
  let middlecount = Math.round(array.length / 2);
  console.log(middlecount);
  array.slice(array.length - 1, middlecount);
  return array;
}
function deleteatfirst(array, element) {
  debugger;
  array.slice(0, 0);
  return array;
}
/*Assignment 13--End */
/*Assignment 14--Start */
let obj = new Object({
  numadd(input1, input2) {
    debugger;
    if (isNaN(input1)) {
      this.input1 = 0;
    }
    if (isNaN(input2)) {
      this.input2 = 0;
    }
    let result = input1 + input2;
    console.log(result);
    return result;
  },
  numsubract(input1, input2) {
    debugger;
    if (isNaN(input1)) {
      input1 = 0;
    }
    if (isNaN(input2)) {
      input2 = 0;
    }
    let result = input1 - input2;
    console.log(result);
    return result;
  },
  nummultiply(input1, input2) {
    debugger;
    if (isNaN(input1)) {
      input1 = 0;
    }
    if (isNaN(input2)) {
      input2 = 0;
    }
    let result = input1 * input2;
    console.log(result);
    return result;
  },
  numDivide(input1, input2) {
    debugger;
    if (isNaN(input1)) {
      input1 = 0;
    }
    if (isNaN(input2)) {
      input2 = 0;
    }
    let result = input1 / input2;
    console.log(result);
    return result;
  },
  numPow(input1, input2) {
    debugger;
    if (isNaN(input1)) {
      input1 = 0;
    }
    if (isNaN(input2)) {
      input2 = 0;
    }
    let result = Math.pow(input1, input2);
    console.log(result);
    return result;
  },
});

obj.numadd(1, 1);
obj.numsubract(2, 1);
obj.nummultiply(5, 9);
obj.numDivide('tete', 1);
obj.numPow(2, 3);
/*Assignment 14--Start */
