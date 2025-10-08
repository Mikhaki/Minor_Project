function verify() {
    console.log("a, h, r, m")
    let a = parseInt(elementA.value);
    let h = parseInt(elementH.value);
    let r = parseInt(elementR.value);
    let m = parseInt(elementM.value);
    console.log(a, h, r, m)

    cube_value = Math.pow(a, 3)
    cyl_value = Math.pow(r, 2) * Math.PI * h

    // if (cube_value < m && cyl_value < m) { result = "Нельзя наполнить ни одну емкость" }
    if (cube_value < m && cyl_value < m) { result = "Можно заполнить обе емкости" }
    else {
        if (cube_value > m && cyl_value > m) { result = "Нельзя наполнить ни одну емкость" }
        else {

        }
    }
    if (cube_value > m && cyl_value < m) { result = "Можно заполнить вторую емкость" }
    else {
        if (cube_value < m && cyl_value > m) { result = "Можно заполнить первую емкость" }
        else { }
    }
    check = true
    console.log(result)
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}



let result;
let check;

const elementA = document.getElementById("a");
const elementH = document.getElementById("h");
const elementR = document.getElementById("r");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)


