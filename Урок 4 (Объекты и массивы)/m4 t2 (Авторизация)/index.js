"use strict";

let users = [
  {
    name: "Andrew",
    login: "user",
    password: "passwd",
  },
  {
    name: "Maxim",
    login: "user2",
    password: "passwd2",
  },
  {
    name: "Eldar",
    login: "user3",
    password: "passwd3",
  },
];

const INPUT_LOGIN = prompt("Введите логин");
let findPerson = users.find((person) => person.login === INPUT_LOGIN);

if (findPerson) {
  const INPUT_PASSWORD = prompt("Введите пароль");
  if (INPUT_PASSWORD === findPerson.password) {
    alert("Привет, " + findPerson.name);
  } else {
    alert("Пароль не верный");
  }
} else {
  alert("такого логина нет");
}
