let password = prompt('Введите пароль')

if (password.length < 4) {
   alert('Пароль короткий')
} else if (!password.includes('-') && !password.includes('_')) {
   alert('Пароль слабый')
} else {
   alert('Добро пожаловать!')
}