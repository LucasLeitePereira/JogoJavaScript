console.log("Jogo iniciado!");

const personagem = document.querySelector('.personagem');


const images_idle = [
    './png/Idle__000.png',
    './png/Idle__001.png',
    './png/Idle__002.png',
    './png/Idle__003.png',
    './png/Idle__004.png',
    './png/Idle__005.png',
    './png/Idle__006.png',
    './png/Idle__007.png',
    './png/Idle__008.png',
    './png/Idle__009.png',
];

const images_run = [
    './png/Run__000.png',
    './png/Run__001.png',
    './png/Run__002.png',
    './png/Run__003.png',
    './png/Run__004.png',
    './png/Run__005.png',
    './png/Run__006.png',
    './png/Run__007.png',
    './png/Run__008.png',
    './png/Run__009.png',
]

const images_jump = [
    './png/Jump__000.png',
    './png/Jump__001.png',
    './png/Jump__002.png',
    './png/Jump__003.png',
    './png/Jump__004.png',
    './png/Jump__005.png',
    './png/Jump__006.png',
    './png/Jump__007.png',
    './png/Jump__008.png',
    './png/Jump__009.png',
]

let currentImageIndex = 0;

function changeImage(image) { //Muda a imagem de acordo com o array
    currentImageIndex++;  // Avança para a próxima imagem
    // Se atingiu o final do array de imagens, volta para a primeira
    if (currentImageIndex >= image.length) {
        currentImageIndex = 0;
    }
    // Atualiza a imagem exibida
    personagem.src = image[currentImageIndex];
    console.log("Trocando de imgaem");
}

let positionLeft = +window.getComputedStyle(personagem).left.replace('px', '');
let positionBottom = +window.getComputedStyle(personagem).bottom.replace('px', '');

document.addEventListener('keydown', (event) => { // Movimentação da direita para esquerda
    personagem.classList.remove('imagem-esquerda');
    if (event.key === 'ArrowRight') {
        changeImage(images_run);
        
        positionLeft += 10;

        personagem.style.left = `${positionLeft}px`;
    } else if (event.key === 'ArrowLeft') {
        changeImage(images_run);
        personagem.classList.add('imagem-esquerda');

        positionLeft -= 10;

        personagem.style.left = `${positionLeft}px`;
    } else if (event.key === 'ArrowUp') {
        personagem.classList.add('pulo');
        changeImage(images_jump);
    }
});

document.addEventListener('keyup', (event) => {
    personagem.classList.remove('pulo');
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        personagem.src = './GIF.gif';
    }
})