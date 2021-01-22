function showMess(a) {
    var list = [];
    for (let i = 0; i < 10; i++) {
        list.push(a);
    }
    return list;
}

function tong1N(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return ` tổng từ 1 đến ${n} là: ` + sum;
}

function tongADenB(a, b) {
    var sum = 0;
    for (let i = a; i <= b; i++) {
        sum = sum + i;
    }
    return `Tổng từ ${a} đến ${b} là: ` + sum;
}

function tongLe(a, b) {
    var sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return ` Tổng lẻ từ ${a} đến ${b} là: ` + sum;
}

function mangLe(n) {
    var list = [];
    var i = 0;
    while (list.length < n) {
        if (i % 2 != 0) {
            list.push(i);
        }
        i++;
    }
    return ` mảng ${n} số lẻ nhỏ nhất là: ` + list;
}

function mangLeTuN(a, b) {
    var c = b;
    var list = [];
    while (list.length < a) {
        if (b % 2 != 0) {
            list.push(b);
        }
        b++;
    }
    return ` mảng ${a} số lẻ bắt đầu từ ${c} là: ` + list;
}

function KiemTraNT(n) {
    var check = true;
    if (n < 2) {
        check = false;
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                check = false;
                break;
            }
        }
    }
    return check;

}

function nNguyenTo(x) {
    var list = [];
    var n = 1 ;
    while (list.length < x) {
        if(KiemTraNT(n)== true){
            list.push(n);
        }n++;    
    }
    return list;
}

function nNguyenToTuM(a,b) {
    var list = [];
    var n = b ;
    while (list.length < a) {
        if(KiemTraNT(n)== true){
            list.push(n);
        }n++;    
    }
    return list;
}