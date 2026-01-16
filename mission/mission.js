
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#3a3a3a';
        document.body.style.color = 'white';
        document.querySelector('h2').style.color = '#a8dadc';
        document.querySelector('select').style.backgroundColor = '#3a3a3a';
        document.querySelector('select').style.color = 'white';
        logo.src = 'byui-logo-white.png';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.querySelector('h2').style.color = '#1f4fa3';
        document.querySelector('select').style.backgroundColor = 'white';
        document.querySelector('select').style.color = 'black';
        logo.src = 'byui-logo-blue.webp';
    }
}           
                    