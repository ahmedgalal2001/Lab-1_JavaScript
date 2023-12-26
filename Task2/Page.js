let num1 = num2 = "";



while ((num1 = checkInInputNumber(prompt("Pls, Enter First Number : "))) == false) {
    alert("Not Vaild num1");
}
while ((num2 = checkInInputNumber(prompt("Pls, Enter Second Number : "))) == false) {
    alert("Not Vaild num2");
}




document.write(`Summation = ${num1} + ${num2}  = ${num1 + num2}`);



function checkNull(_str) {
    return _str != null;
}


function checkInInputNumber(_str) {
    if (checkNull(_str)) {
        let str = _str.trim();
        if (Number(str)) return Number(str);
        else return false;
    }
    return false;
}

