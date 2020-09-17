"use strict";

function time() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return year + "-" + month + "-" + date + " (" + h + ":" + m + ":" + s + ")";

}


function UserList() {
  this.users = [];
  this.add = oneUser => this.users.push(oneUser);
  this.getAllUser = () => {
    return this.users
  }
}

let useradd = new UserList();

function auth() {
  let input;

  if (input = prompt("Введите имя и фамилию")) {
    let arrInput = input.split(' ')
    if (arrInput[0] === '' || arrInput[1] === '' || arrInput[1] === undefined) {
      alert('Некорректные данные')
      return auth()
    }

    function User() {
      this.name = arrInput[0];
      this.surname = arrInput[1];
      this.regDate = time();
      this.toString = function () {
        return 'Имя: ' + this.name + ' Фамилия: ' + this.surname + ' Дата регистрации: ' + this.regDate + '\n'
      }
    }
    let newuser = new User();
    useradd.add(newuser);
    auth()
  } else {
    alert(useradd.getAllUser().join('').toString())
  }
}
auth()