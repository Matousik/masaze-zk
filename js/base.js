/* closing and opening sidebar */

const navlinksarr = document.getElementsByClassName('nav-links');
const navlinks = navlinksarr[0];
const closingIcon = document.getElementById('menuOffIcon');
const openingIcon = document.getElementById('menuIcon');

let timeout;

openingIcon.addEventListener('click', function() {
    navlinks.style.display='block';
    timeout = setTimeout(slideIn, 20);

})

closingIcon.addEventListener('click', function() {
    navlinks.style.right= "-200px";
    timeout = setTimeout(slideOutTerminator, 1000);
})

function slideIn() {
    navlinks.style.right= '0';
}

function slideOutTerminator() {
    navlinks.style.display='none';
}
