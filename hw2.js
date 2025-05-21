/*1 задание*/

let password = 'пароль';

let userInput = prompt('Введите пароль');

if (userInput === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен не верно');
}

/*2 задание*/

let c = 11

if (c > 0 && c < 10) {
    console.log("верно");
} else {
    console.log("неверно");
}


/*3 задание*/
let d = 40;
let e = 101;

if (d > 100 || e > 100) {
    console.log("верно");
}
else {
    console.log("неверно");
}


/*4 задание*/

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

/*Задание 5*/

let monthNumber = 12;
let season;
if (monthNumber < 1 || monthNumber > 12) {
    console.log("Некорректный номер месяца. Введите число от 1 до 12.");
}
else {

    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            season = "зима";
            break;
        case 3:
        case 4:
        case 5:
            season = "весна";
            break;
        case 6:
        case 7:
        case 8:
            season = "лето";
            break;
        case 9:
        case 10:
        case 11:
            season = "осень";
            break;
    }

    console.log(`Месяц с номером ${monthNumber} принадлежит к сезону «${season}»`);
}

