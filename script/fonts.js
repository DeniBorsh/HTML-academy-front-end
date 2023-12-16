let fontButtonSerif = document.querySelector('.font-button-serif');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');

fontButtonSerif.onclick = function() {
    document.body.classList.add('serif');
    fontButtonSerif.classList.add('active');
    fontButtonSansSerif.classList.remove('active');
};

fontButtonSansSerif.onclick = function() {
    document.body.classList.remove('serif');
    fontButtonSerif.classList.remove('active');
    fontButtonSansSerif.classList.add('active');
};