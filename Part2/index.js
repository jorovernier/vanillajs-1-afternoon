const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function resetCards(){
    const diamonds = document.getElementById('diamonds');
    const clubs = document.getElementById('clubs');
    const hearts = document.getElementById('hearts');
    const spades = document.getElementById('spades');
    diamonds.style.color = '';
    clubs.style.color = '';
    hearts.style.color = '';
    spades.style.color = '';
}