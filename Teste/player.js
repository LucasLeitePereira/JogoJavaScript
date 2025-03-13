var FROG_DIREITA = 1;
var FROG_ESQUERDA = 2;

function Player(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;
    this.velocidade = 6;

    this.sheet = new Spritesheet(context, imagem, 5, 12);
    this.sheet.intervalo = 60;

    this.andando = false;
    this.direcao = FROG_DIREITA;
}

Player.prototype = {
    atualizar: function () {
        if (this.teclado.pressionada(RIGHT)) {
            if (!this.andando || this.direcao != FROG_DIREITA) {
                this.sheet.linha = 1;
                this.sheet.coluna = 0;
            }
            this.sheet.inverterHorizontal = false;
            this.andando = true;
            this.direcao = FROG_DIREITA;

            this.sheet.proximoQuadro();

            this.x += this.velocidade;
        }
        else if (this.teclado.pressionada(LEFT)) {
            if (!this.andando || this.direcao != FROG_ESQUERDA) {
                this.sheet.linha = 2;
                this.sheet.coluna = 0;
            }
            this.sheet.inverterHorizontal = false;
            this.andando = true;
            this.direcao = FROG_ESQUERDA;
            this.sheet.proximoQuadro();
            this.x -= this.velocidade;
        } 
        else {
            this.sheet.linha = 0;
            this.andando = false;
            this.sheet.proximoQuadro();

            if (this.direcao == FROG_DIREITA) {
                this.sheet.inverterHorizontal = false;
            }
            else if (this.direcao == FROG_ESQUERDA) {
                this.sheet.inverterHorizontal = true;
            }
            
        }

    },
    desenhar: function () {
        this.sheet.desenhar(this.x, this.y);
    }
}