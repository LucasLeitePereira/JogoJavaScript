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

let currentImageIndex = 0;

function changeImage() {
    currentImageIndex++;  // Avança para a próxima imagem

    // Se atingiu o final do array de imagens, volta para a primeira
    if (currentImageIndex >= images_idle.length) {
        currentImageIndex = 0;
    }

    // Atualiza a imagem exibida
    personagem.src = images_idle[currentImageIndex];
    console.log("Trocando de imgaem");
}

setInterval(changeImage, 80);
