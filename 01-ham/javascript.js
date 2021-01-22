function tong(a, b) {
    return `${a} và ${b} là: `  + (a + b);
}

function hieu(a, b) {
    return `${a} và ${b} là: `  + (a - b);
}

function tich(a, b) {
    return `${a} và ${b} là: `  + (a * b);
}

function thuong(a, b) {
    if (b == 0) {
        return 'Mẫu số không được = 0';
    }
    return `${a} và ${b} là: `  + (a / b);
}

function binhphuong(a) {
    return `${a} là: `  + (a * a);
}

function timSoLonHonTrong2So(a, b) {
    if (a > b) {
        return `${a} và ${b}. `+ "Số lớn nhất là: " + a;
    } else {
        return `${a} và ${b}. `+ "Số lớn nhất là: " + b;
    }
}

function timSoBeHonTrong2So(a, b) {
    if (a < b) {
        return `${a} và ${b}. `+ "Số bé nhất là: " + a;
    } else {
        return `${a} và ${b}. `+ "Số bé nhất là: " + b;
    }
}

function trungBinh(a,b){
    return `${a} và ${b} là: `  + ((a + b)/2);
}

function chiaLayDu(a,b){
    if (b == 0) {
        return 'Mẫu số không được = 0';
    }
    return `${a} và ${b} là: `  + (a % b);
}

function chiaHet(a,b){
    if (b == 0) {
        return 'Mẫu số không được = 0';
    }
    return `${a} và ${b} là: `  + (a % b==0);
}

function chuViChuNhat(a,b){
    return `${a} và ${b} là: `  + ((a + b)*2);
}

function dienTichChuNhat(a, b) {
    return `${a} và ${b} là: `  + (a * b);
}

function chuViHinhTron(r) {
    return `${r} là: `  + (2*3.14*r);
}

function dienTichHinhTron(r) {
    return `${r} là: `  + (3.14*r*r);
}

function addString(s1, s2, s3, s4, s5) {
    let s = "";
    return s = s1 + s2 + s3 + s4 + s5;
}
function upperString(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.toUpperCase();
}
function checkExistString(s1, s2) {
    let firstIndex = 0;
    let check = false;
    if (s1.length < s2.length) {
        let swap = new Array();
        swap = s1;
        s1 = s2;
        s2 = swap;
    }
    for (let i = 0; i < s1.length; i++) {
        if (s2[firstIndex] == s1[i]) {
            var existIndex = i;
            check = true;
            break;
        }
    }
    if (check != false && s2.length > 1) {
        while (firstIndex < s2.length - 1 && existIndex < s1.length - 1) {
            firstIndex++;
            existIndex++;
            if (s2[firstIndex] != s1[existIndex]) {
                check = false;
                break;
            }
        }
    }
    return check;
}
function stringLength(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.length;
}
function changeString(s1, s2, s3, s4, s5) {
    let s = "";
    s = s1 + s2 + s3 + s4 + s5;
    return s.substring(1, 3);
}
function checkString(s1, s2) {
    if (s1.includes(s2) == true) {
        return "s1 tồn tại trong s2";
    } else {
        return "s1 không tồn tại trong s2";
    }
}