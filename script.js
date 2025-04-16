

document.querySelector('.b-1').onclick = f01;

function f01 () {
    
    let i1 = document.querySelector('.i-1');
    let i2 = document.querySelector('.i-2');
    if (i1.value == "admin" && i2.value == "1234") {
        console.log ('success');
        window.location.href = 'authsucc.html';
    } else if (i1.value == "" || i2.value == "") {
        p = document.getElementById('out');
        p.innerHTML = 'не все поля заполнены';

    } else {
        p = document.getElementById('out');
        p.innerHTML = 'неверный логин или пароль';
    }
}
