const form = document.getElementById('email-form');
const email = document.getElementById('email');
const small = form.querySelector('small');
const responsive = document.getElementById('responsive')
const responsiveIcon = document.getElementById('responsive-icon')
const menu = document.getElementById('menu')

// Mostra menu alternativo
const toggleMenu = false
responsive.addEventListener('click', responsiveMenu);
function responsiveMenu() {
    if (!toggleMenu) {
        responsiveIcon.src = 'images/icon-close.svg'
        menu.classList.add('show')

        toggleMenu = true;
    } else {
        responsiveIcon.src = 'images/icon-hamburger.svg'
        menu.classList.remove('show')

        toggleMenu = false;
    }
}


// Verifica email

function checkEmail(input) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input.value.trim())) {
        showSuccess()
    } else {
        showError('Please insert a valid email')
    }
};

// Mostra mensagem de erro, caso email inválido
function showError(msg) {
    form.classList.add('error')
    small.innerText = msg
};

// Caso email validado
function showSuccess() {
    form.className = 'email-form'
    small.innerText = ''
    email.value = ''
};


// Verifica se o campo de email está vazio

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (email.value != '') {
        checkEmail(email)
    } else {
        showError('Email field is empty')
    }

});

// Mostra slider com depoimentos

let countCard = 1;
const cards = document.getElementsByClassName('card-item');
const indicators = document.getElementsByClassName('indicator');

runSlider(countCard);

// Controle deslizante das imagens do carrossel

function dataIndex(n) {
    runSlider(countCard = n)
}

// Percorre o carrossel de imagens

function nextCard() {
    countCard++;

    if (countCard > cards.length) {
        countCard = 1
    }

    runSlider(countCard)
    
}
setInterval(nextCard, 13000);

// Mostra o cartão selecionado

function runSlider(n) {
    let i;

    if (n > cards.length) {
        countCard = 1;
    }
    if (n < 1) {
        countCard = cards.length;
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active-card');
    }
    for (i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
    countCard = n;
    cards[n - 1].classList.add('active-card');
    indicators[n - 1].classList.add('active');
    
}

