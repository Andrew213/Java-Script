"use strict";

let input = prompt("Вводи имя и фамилию");
let x = input.split(" ");

{
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  window.dateTime =
    year + "-" + month + "-" + date + " (" + h + ":" + m + ":" + s + ")";
}

function User() {
  this.name = x[0];
  this.surname = x[1];
  this.regDate = dateTime;
  // this.userInfo = function () {
  //   return this.name + " " + this.surname + " / " + this.regDate;
  // };
}

function UserList() {}
let user = new User();
alert(user.userInfo());
