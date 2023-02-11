// Task1 | Ededin faktorialinin hesablanmasini recursive function ile yazin

function factorial(num) {
    debugger
    
    if (num == 0) {
        return 1;
    }
    
    else if (num == 1) {
        return num;
    }

    else {
        return num * factorial(num - 1);
    }
}

// console.log(factorial(4));



// Task2 | Icerisinde name, surname, age, email olan bir nece student objectleriniz var. Ashagida elave etdiklerimi functionlar sekilinde yazin, functionlar objectlerden ibaret array qebul edecek.
// 1) Yashi 18-25 araliginda olan telebelerin sayi
// 2) Emailinde "c" herfi olan studentlerin say

let student1 = {
    name: "Ali",
    surname: "Talibov",
    age: 21,
    email: "aliit@code.edu.az"
}

let student2 = {
    name: "Cavid",
    surname: "Bashirov",
    age: 29,
    email: "cavid@code.edu.az"
}

let student3 = {
    name: "Ibrahim",
    surname: "Aliyev",
    age: 27,
    email: "ibrahim@code.edu.az"
}

let student4 = {
    name: "Cinare",
    surname: "Ibadova",
    age: 20,
    email: "cinare@code.edu.az"
}

let students = [student1, student2, student3, student4];

function filterByAge(students) {
    let count = 0;

    for (const student of students) {
        if (student.age >= 18 && student.age <= 25) {
            count++;
        }
    }

    return count;
}

let filterByEmail = students => {
    let count = 0;

    for (const student of students) {
        if (student.email.toLowerCase().trim().includes("c")) {
            count++;
        }
    }

    return count;
}

// console.log(filterByAge(students));
// console.log(filterByEmail(students));



//Task3 | Gelen yasha gore hansi ilden olduqugunu gosteren function yazin. Meselen 30 gelirse function geriye 1993 qaytarmalidir

function getYearOfBirth(age) {
    let currentYear = new Date();

    return currentYear.getFullYear() - age;
}

// console.log(`This person born in ${getYearOfBirth(21)}`);