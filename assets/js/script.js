"use strict"

// function getEvenNumsOfSumBySquare(array) {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
        
//         if (element % 2 == 0) {
//             sum += element **2;
//         }
//     }

//     return sum;
// }

// let nums = [1, 2, 3, 4, 5, 6, 7]

// console.log(getEvenNumsOfSumBySquare(nums));

// let login = (email, password) => {
//     if (email == "cavid@code.edu.az" && password == "12345") {
//         console.log("Login success");
//     }

//     else {
//         console.log("Email or password is wrong");
//     }
// }

// login("aliit@code.edu.az", "12345");










// Recursive functions

// function getNumbers(num) {
    
//     let number = num - 1;

//     if (number > 0) {
//         getNumbers(number)
//     }

//     console.log(num);
// }

// getNumbers(7);

// function sumOfNums(n) {
//     let sum = 0;
    
//     for (let i = 0; i <= n; i++) {
//         sum += i;
//     }

//     console.log(sum);
// }

// sumOfNums(5);

// function someOfNums(num) {
//     debugger;
//     if (num == 1) {
//         return num;
//     }

//     else {
//         return num + someOfNums(num - 1);
//     }
// }

// console.log(someOfNums(3));









// Loops

// let numbers = [1, 2, 3, 10, 43];

// numbers.forEach((element, index) => {
//     numbers[index] = element * 2;
// });

// console.log(numbers);

// for (const item of numbers) {
//     console.log(item);
// }

// let user1 = {
//     id: 1,
//     name: "Ali",
//     surname: "Talibov"
// }

// let user2 = {
//     id: 2,
//     name: "Ali",
//     surname: "Talibov"
// }

// let user3 = {
//     id: 3,
//     name: "Cavid",
//     surname: "Bashirov"
// }

// let users = [user1, user2, user3];

// for (const key in user1) {
//     console.log(key);
// }

// for (const key in user1) {
//     console.log(user1[key]);
// }

// for (const key in user1) {
//     console.log(`Key: ${key}\nValue: ${user1[key]}`);
// }

// for (const key in user1) {
//     if (key == "name") {
//         console.log(user1[key]);
//     }
// }

// for (const key in user1) {
//     if (key == "name") {
//         console.log(key);
//     }
// }

// for (const user of users) {
//     console.log(user);
// }

// for (const user of users) {
//     console.log(`${user.name} ${user.surname}`);
// }

// for (const user of users) {
//     for (const key in user) {
//         console.log(`Key: ${key} Value: ${user[key]}`);
//     }
// }

// let count = 0;

// for (const user of users) {
//     for (const key in user) {
//         if (key == "name" && user[key] == "Ali") {
//             count ++;
//         }
//     }
// }

// console.log(count);


// let count = 0;

// for (const user of users) {
//     if (user.name == "Ali" && user.surname == "Talibov") {
//         count ++;
//     }
// }

// console.log(count);

// let nums = [1, 2, 3, 4, 32, 65, 34, 77];

// let newArr = nums.map(n => {
//     return n * 2;
// })

// console.log(nums);
// console.log(newArr);









// Callback

// let nums = [1, 2, 3, 4, 5, 6, 7];

// function numOfOdd(num) {
//     return num % 2 != 0;
// }

// function numOfEven(num) {
//     return num % 2 == 0;
// }

// function numOfGratherThan(num) {
//     return num > 5;
// }

// function calculateNums(arr, callback) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             sum += arr[i];
//         }
//     }

//     console.log(sum);
// }

// function sumOfOdd(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             sum += arr[i];
//         }
//     }

//     console.log(sum);
// }

// function sumOfEven(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sum += arr[i];
//         }
//     }

//     console.log(sum);
// }

// function sumOfGraterThanFive(arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 5) {
//             sum += arr[i];
//         }
//     }

//     console.log(sum);
// }

// calculateNums(nums, numOfOdd);
// calculateNums(nums, numOfEven);
// calculateNums(nums, numOfGratherThan);

// calculateNums(nums, n => n % 2 != 0);
// calculateNums(nums, n => n % 2 == 0);
// calculateNums(nums, n => n > 5);

// let user1 = {
//     id: 1,
//     name: "Ali",
//     surname: "Talibov",
//     age: 21
// }

// let user2 = {
//     id: 2,
//     name: "Ibrahim",
//     surname: "Aliyev",
//     age: 27
// }

// let user3 = {
//     id: 3,
//     name: "Cavid",
//     surname: "Bashirov",
//     age: 29
// }

// let users = [user1, user2, user3];

// function showUsersByAge(people, callback) {
//     for (const item of people) {
//         if (callback(item.age)) {
//             console.log(`${item.name} ${item.surname}`);
//         }
//     }
// }

// showUsersByAge(users, a => a > 22);

// let filteredDatas = users.filter(u => u.age > 22);

// let numbers = [5, 4, 7, 10];

// let sum = numbers.reduce((total, current) => total + current);

// console.log(sum);

// for (const item of filteredDatas) {
//     console.log(`${item.name} ${item.surname}`);
// }

// let sumOfAge = 0;

// for (const item of filteredDatas) {
//     sumOfAge += item.age;
// }

// console.log(sumOfAge);

// const getSumOfAgesFromFilteredDatas = datas => {
//     let sumOfAge = 0;

//     for (const item of filteredDatas) {
//         sumOfAge += item.age;
//     }

//     console.log(sumOfAge);
// }

// getSumOfAgesFromFilteredDatas(filteredDatas);