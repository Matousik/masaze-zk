/* closing and opening sidebar */

const navlinksarr = document.getElementsByClassName('nav-links');
const navlinks = navlinksarr[0];
const closingIcon = document.getElementById('menuOffIcon');
const openingIcon = document.getElementById('menuIcon');

openingIcon.addEventListener('click', function() {
    navlinks.style.right= '0';
})

closingIcon.addEventListener('click', function() {
    navlinks.style.right= "-200px";
})

