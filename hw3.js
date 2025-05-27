/* 1 задание */
let i = 0;
while (i < 2) {
    console.log("привет");
    i++;
}

/* 2 задание */
let e = 0;
while (e <= 5) {
    console.log(e);
    e++;
}

/* 3 задание */
let w = 7;
while (w <= 22) {
    console.log(w);
    w++;
}


/* 4 задание */
const obj = {
    Коля: "200",
    Вася: "300",
    Петя: "400",
}
for (let key in obj) {
    console.log(`${key}: — зарплата ${obj[key]} долларов`);
}

/* 5 задание */
let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log("Итоговое число:", n); 
console.log("Количество итераций:", num);


/* 6 задание */
let number = 2
do {
   alert(`Сегодня пятница, ${number}-е число. Необходимо подготовить отчет.`);
    number = number + 7;
}
    while (number < 31);



