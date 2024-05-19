//
const mobileButton = document.getElementById('mobile-button');
const nav = document.getElementById('nav');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

function closeMenuOutside(event) {
    if (!nav.contains(event.target) && !event.target.matches('#mobile-button')) {
        nav.classList.remove('active');
        mobileButton.setAttribute('aria-expanded', 'false');
    }
}

document.addEventListener('click', closeMenuOutside);
mobileButton.addEventListener('click', toggleMenu);
mobileButton.addEventListener('touchstart', toggleMenu);

//

const $html = document.querySelector('html');
const $checkbox = document.querySelector('#switch');
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('light');
});

// 

const theme = document.getElementById('theme-button');
theme.addEventListener('click', () => {
    if( theme.classList.contains("bi-moon-fill")) {
        theme.classList.remove('bi-moon-fill');
        theme.classList.add('bi-moon');

        return; 
    }
        theme.classList.add('bi-moon-fill');
        theme.classList.remove('bi-moon');
});

// 

 var logoLight = 'src/img/logo-blue.svg'
 var logoDark = 'src/img/logo-black.svg'
 function logoTheme () {
     document.getElementById('a').src = logoDark;
     let aux = logoDark;
     logoDark = logoLight;
     logoLight = aux;
}