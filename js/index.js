

function Task1a() {
    let n = Number(prompt('Nhập vào n'));
    let inputNumb = Number(prompt('Nhập vào vị trí muốn check'));
    let mid = n / 2;
    let result;
    if (inputNumb < mid) {
        result = inputNumb + mid;
    } else if (inputNumb >= mid) {
        result = inputNumb - mid;
    }
    alert('Số đối diện là: ' + result);
}

function Task1b() {
    let s1 = prompt('Nhập vào chuỗi 1');
    let s2 = prompt('Nhập vào chuỗi 2');
    let procesS1 = [...s1];
    let newStr = [];
    let procesS2 = [...s2];
    let maxLength = Math.max(procesS1.length, procesS2.length);
    for (let i = 0; i < maxLength; i++) {
        newStr.push(procesS1[i]);
        newStr.push(procesS2[i]);
    }
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] == undefined) {
            newStr.splice(i, 1);
        }
    }
    let resultStr = newStr.join('');
    alert('Chuỗi sau khi xử lý là: ' + resultStr);
}

let a = Math.floor((Math.random() * 10) + 1);
console.log(a);
let dem = 1;
function bai2() {
    let userInputNumber = document.getElementById('numb');
    if (userInputNumber.value == a) {
        alert('Chúc mừng bạn đã đoán đúng, Kết quả đúng là: ' + a );
    } else {
        alert('Bạn đã đoán sai ' + dem + ' lần rồi!');
        if(dem == 4){
            alert('Rất tiếc, bạn đã không đoán được');
            alert('Kết quả đúng là: ' + a );
        }
    }
    dem++;
    userInputNumber.value = '';
}
