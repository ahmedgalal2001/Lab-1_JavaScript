let fname = lname = age = "";


while ((fname = checkInInputAlpha(prompt("Pls, Enter your First Name : "))) == false) {
    alert(`Not Vaild fname`);
}
while ((lname = checkInInputAlpha(prompt("Pls, Enter your Last Name : "))) == false) {
    alert(`Not Vaild lname`);
}
while ((age = checkInInputAge(prompt("Pls, Enter your Birth Year : "))) == false) {
    alert(`Not Vaild Birth Year`);
}


document.write(`Welcome ${fname} ${lname} you are ${age} years old`);



function checkNull(_str) {
    return _str != null;
}

function checkInInputAlpha(_str) {
    if (checkNull(_str)) {
        let str = _str.trim();
        if (Number(str) || str == "") return false;
        else return str;
    }
    return false;
}

function checkInInputNumber(_str) {
    if (checkNull(_str)) {
        let str = _str.trim();
        if (Number(str)) return Number(str);
        else return false;
    }
    return false;
}

function checkInInputAge(age) {
    age = checkInInputNumber(age);
    if (age != false) {
        let currentYear = new Date().getFullYear();
        age = currentYear - age;
        if (age >= 10 && age <= 100) return age;
    }
    return false;
}