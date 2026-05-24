/*
* Создать программный код, который определяет, может ли Пользователь Получить ДОСТУП к ресурсу на основе его РОЛИ и наличия РАЗРЕШЕНИЙ.
* Полученное Булево значение сохраните в переменной isAccess.

* Условия ДОСТУПА: if
* - Пользователь ДОЛЖЕН иметь статус АДМИНИСТРАТОРА(isAdmin) ИЛИ(||) быть ПОДТВЕРЖДЁННЫМ Пользователем(isVerifiedUser)
* - А также Пользователь ДОЛЖЕН обладать Специальным РАЗРЕШЕНИЕМ(hasSpecialPermission) ИЛИ(||) Временным ПРОПУСКОМ(hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = true

const hasSpecialPermission = true
const hasTemporaryPass = false

let isAccess = true;

// your code
if (
    (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)
) {
    isAccess = true
} else {
    isAccess = false
}

console.log(isAccess); //true
