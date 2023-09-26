let inputTap = document.getElementById('input');
let submitTap = document.getElementById('equal');
let Tages = document.querySelector('strong');
let clear = document.querySelector('#reset');
let formTag = document.querySelector('form');
let backBtn = document.querySelector('.bg');
let content = document.querySelector('.content');
let deleteTag = document.getElementById('delete');
let button = document.querySelectorAll('button');
let selection = document.getElementsByClassName('section')[0];
let body = document.body;

let space = 20;
Tages.addEventListener('click', function () {
    Tages.style.left = `${space}px`;

    changeBackground(space)

    space *= 2;
})
formTag.addEventListener('submit', function (event) {
    event.preventDefault();


    inputTap.value = eval(inputTap.value)
})
function changeBackground(value) {
    if (value == 20) {
        changeStyle();
        
    } else if (value == 40) {
        changeStyle2()
    
    } else {
        Tages.style.left = `0px`;
        body.style.backgroundColor = " hsl(222, 26%, 31%)";
        // backBtn.style.backgroundColor = "yellow "
        content.style.color = "white"
        location.reload()
    }

}

function changeStyle() {
    selection.style.backgroundColor = " hsl(0, 5%, 81%)";
    Tages.style.backgroundColor = "hsl(25, 98%, 40%)";
    inputTap.style.backgroundColor = "white";
    inputTap.style.color = "black";
    body.style.backgroundColor = "  hsl(0, 0%, 90%)";
    backBtn.style.backgroundColor = "hsl(0, 5%, 81%)";
    submitTap.style.backgroundColor ="hsl(25, 98%, 40%)";
    submitTap.style.borderColor ="hsl(185, 58%, 25%)";
    clear.style.backgroundColor = "hsl(185, 42%, 37%)"
    clear.style.borderBottom =  "3px  soloid hsl(185, 58%, 25%)"
    deleteTag.style.backgroundColor = "hsl(185, 42%, 37%)";
    deleteTag.style.borderColor = "hsl(25, 99%, 27%)";
    content.style.color = "black";
    clear.style.borderBottom = "thick solid hsl(185, 58%, 25%)";
    deleteTag.style.borderBottom = "thick solid hsl(185, 58%, 25%)";
    submitTap.style.borderBottom = "thick solid hsl(25, 99%, 27%)";
}
function changeStyle2() {
    [...button].forEach(item => {
        item.style.backgroundColor = "hsl(268, 47%, 21%)";
        item.style.color = "yellow";
        item.style.borderWidth = " bottom 2px solid red";
        item.style.borderBottom = "thick solid hsl(290, 70%, 36%)";
    });
    selection.style.backgroundColor = " hsl(268, 71%, 12%)";
    Tages.style.backgroundColor = "hsl(176, 100%, 44%)";
    body.style.backgroundColor = " hsl(268, 75%, 9%)";
    backBtn.style.backgroundColor = "hsl(268, 71%, 12%) ";
    content.style.color = "yellow";
    submitTap.style.backgroundColor ="hsl(176, 100%, 44%)";
    submitTap.style.color ="white";
    clear.style.backgroundColor ="hsl(281, 89%, 26%)";
    clear.style.color ="white";
    deleteTag.style.backgroundColor = "hsl(281, 89%, 26%)";
    deleteTag.style.color = "white";
    inputTap.style.color ="yellow";
    inputTap.style.backgroundColor ="hsl(268, 71%, 12%)";


}

function handleClick(value) {
    inputTap.value += value;
}

function clearValue() {
    inputTap.value = "";
}