// // 1.
// let a;
// console.log(a * 10)  //NaN

// // 2.
// let ism = "Abdupattoyeva Ruxshona";
// console.log(ism);

// // 3.
// // Object...
// let car = {
//     color: "white",
//     model: "chevrolet",
//     doors: 4,
//     spend: 200,
// };

// // 4.
// let myName = {
//     firstName: "Ruxshona",
//     lastName: "Abdupattoyeva",
//     age:13,
//     class: 7,
//     id: 18400,
//     address: "Margilan shahar",
// };

// console.log(myName.firstName);
// console.log(myName.lastName);
// console.log(myName.age);
// console.log(myName.class);
// console.log(myName.id);
// console.log(myName.address);

// // 5.
// if (10 +"2a") console.log("salom");

// // 6.
// if (10 +"2a") {
//     console.log(1);
//     console.log(2);
// }

// 7.
// let yoshi = prompt("Yoshingiz nechida ?");

// if(yoshi > 13) console.log("Ulg'ayibsiz");

// 8.
// if (2 == 3) {
//     console.log("to'g'ri");
// }  else{
//     console.log("xato");
// };

// 9.
// let bali = prompt("Imtihondan necha bal oldingiz ?");

// if ( bali >= 70) {
// console.log("siz imtihondan o'tdingiz!!!");
// } else {
//     console.log("siz imtihondan yiqildingiz")
// };

// // 10.
// let raqam = prompt("raqamlardan birini tanlang");

// if (raqam == 1) {
//     console.log("yugurish")
// } else if ( raqam == 2) {
//     console.log("sakrash");
// } else if ( raqam == 3) {
//     console.log("uxlash");
// } else if (raqam == 4) {
//     console.log("jim turing");
// } else {
//     console.log("Bunday vazifa topilmadi");
// }

// 11.
// let vazifa = prompt("vazifa");

// //  ternary operator ?;

// // let result = condition ? true : false;

// let result = 5 > 3 ? "ha" : "yoq";

// console.log(result);

// uyga vazifa 
// 1.
// let son = prompt("istagan soningizni kiriting");

// if(son > 0) {
//     console.log(1);
// } else if(son == 0) {
//     console.log(0);
// } else if(son < 0) {
//     console.log(-1);
// }

// // 2.
// let result;
// let a = 1;
// let b = 2;

// a + b < 4 ? result = "Below" : result = "Over";

// console.log(result);

// 3.
// let raqam = prompt("2 ta son kiriting");

// if(raqam == 4) {
//     console.log("teng")
// } else {
//     console.log("teng emas");
// }

// 4.
// const a = +prompt("birinchi soni kiriting");
// const b = +prompt("ikkinchi sonni kiriting");

// const son = (a, b) => {
//   let yigindi = a + b;
//   if (yigindi === 10) {
//     alert("Uraa yutdingiz");
//   } else {
//     alert("Keyingi safar yutarsiz");
//   }
// };

// son(a, b);
// 5.
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//       if (year % 100 === 0) {
//         if (year % 400 === 0) {
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
  
//   console.log(isLeapYear(2023));
  
// let kabisa = prompt("kabisa yilini topish!");

// if(kabisa / 4,100,400) {
//     console.log("bu kabisa yili");
// } else {
//     console.log("Kabisa yili emas");
// }

// 6.
// let c = prompt("son kiriting");

// if (c % 2 == 0) {
//     console.log("Juft");
// } else {
//     console.log("toq");
// }

// 7.




// 8.



// 9.
// const d = +prompt("birinchi sonni kiriting");
// const e = +prompt("ikkinchi sonni kiriting");

// if(d == e) {
//     console.log("Teng");
// } else {
//     console.log("Teng emas")
// }

// 10.
// let age = +prompt("yoshingizni kiriting");
// let yil = +prompt("yoshingizni kiriting");

// if(age > yil) {
//     console.log("kichginasiz");
// } else {
//     console.log("kattasiz");
// }



// if1.
// const number = +prompt("Qiymatni kiriting");

// if (number > 0) {
//     console.log(number + 1);
// } else if (number < 0) {
//     console.log(number);
// } else {
//     console.log('Raqam kiriting');
// }

// if2
// const number = +prompt("Qiymatni kiriting");

// if (number > 0) {
//   console.log(number + 1);
// } else (number < 0); {
//   console.log(number - 2);
// }

// if3
// const number = +prompt("Qiymatni kiriting");

// if (number > 0) {
//   console.log(number + 1);
// } else if (number < 0) {
//   console.log(number - 2);
// } else if (number == 0) {
//   console.log(number + 10);
// }

// if6

// const number1 = +prompt('Birinchi qiymat kiriting')
// const number2 = +prompt('Ikkinchi qimatni kiriting')

// if (number1 > number2) {
//     console.log('Birinchi son:${number1} katta');
// } else if(number1 < number2) {
//     console.log('Ikkinchi son:${number2}. birinchi son katta emas');
// }

// if7

//  const number1 = +prompt('Birinchi qiymatni kiriting')
//  const number2 = +prompt('Ikkinchi qimatni kiriting')

//  if (number1 < number2) {
//     console.log('Birinchi son: ${number1} kichkina');
//  } else if (number1 > number2) {
//     console.log('Ikkinchi son:${number2} kichkina');
//  }

// if8
// const number1 = +prompt ("Birinchi sonni kiriting")
// const number2 = +prompt ("Ikkinchi sonni kiriting")

// if (number1 > number2) {
//     console.log('Katta son:${number1}, kichik son:${number2}');
// } else if (number1 < number2) {
//     console.log('Katta son:${number2}, kichik son:${number1}');
// }

// if9

// const sonA = +prompt ("A sonini kiriting")
// const sonB = +prompt ("B sonini kiriting")

// if (sonA < sonB) {
//     console.log('B soni katta:${sonB}, A soni kichik:${sonA}');
// } else if (sonA > sonB) {
//     console.log('B soni katta:${sonB}, A soni kichik:-${sonA}');
// }

// if10
//  const sonA = +prompt ("A sonini kiriting");
//  const sonB = +prompt ("B sonini kiriting");

//  if (sonA == sonB) {
//     console.log('sonA:${sonA}, sonB:${sonB}');
//  } else if (sonA != sonB) {
//     console.log('sonA:${sonA}, sonB:${sonB} Yigindi:${sonA} + ${sonB}');
//  }

// if12

const number1 = +prompt ("Birinchi sonni kiriting")
const number2 = +prompt ("Ikkinchi sonni kiriting")
const number3 = +prompt ("Uchinchi sonni kiriting")

if (number1 < number2 < number3) {
    console.log('Eng kichik son: ${number1}');
} else if (number1 > number2 < number3) {
    console.log('Eng kichik son: ${number2}');
} else if (number1 > number2 > number3) {
    console.log('Eng kichik son: ${number3}');
}