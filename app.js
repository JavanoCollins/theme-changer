const blackButton = document.querySelector('#black-btn');
const whiteButton = document.querySelector('#white-btn');
const container = document.querySelector('.container');

blackButton.addEventListener('click', () => {
    console.log('It worked!')
})

blackButton.addEventListener('click', () => {
    container.style.background = '#222';
    container.style.color = '#fff'
})

whiteButton.addEventListener('click', () => {
    container.style.background = '#fff';
    container.style.color = '#000'
})

