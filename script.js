/*1 задание*/
let a = 10;
alert(a);

a = 20;
alert(a);
 
/*2 задание*/
let releaseYear = 2007;
alert("Год выпуска первого iPhone: " + releaseYear);


/*3 задание*/
let creator = "Brendan Eich";
alert("creator of js: " + creator);

/*4 задание*/
let x = 10;
let y = 2

alert("сумма: " + (x + y))
alert("разность: " + (x - y))
alert("частное: " + (x / y))
alert("умножение: " + (x * y))

/*5 задание*/
let result = 2**5
alert ("2 в 5 степени = " + result)

/*6 задание*/
let w = 9 
let q = 2
alert ("остаток от деления 9 на 2 = " + (w % q ))

/*7 задание*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*8 задание*/
let age = prompt("Сколько вам лет?");
age = Number(age); 

let word;

if ((age % 10 === 1) && (age % 100 !== 11)) {
  word = "год";
} else if ([2, 3, 4].includes(age % 10) && ![12, 13, 14].includes(age % 100)) {
  word = "года";
} else {
  word = "лет";
}

alert("Вам " + age + " " + word);

/*9 задание*/
let user = {
    name: "Анастасия",   
    age: 18,            
    isAdmin: true       
  };
  
  alert("Имя: " + user.name);
  alert("Возраст: " + user.age);
  alert("В сети? " + (user.isAdmin ? "Да" : "Нет"));

/*10 задание*/

let name = prompt("Как тебя зовут?");

alert(`Привет, ${name}!`);


