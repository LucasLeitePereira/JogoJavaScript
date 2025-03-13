function Spritesheet(context, imagem, linhas, colunas) {
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;

    this.inverterHorizontal = false;
}

Spritesheet.prototype = {
    proximoQuadro: function () {
        var agora = new Date().getTime();

        if (!this.ultimoTempo) {
            this.ultimoTempo = agora;
        }

        if (agora - this.ultimoTempo < this.intervalo) {
            return;
        }

        if (this.coluna < this.numColunas - 1) {
            this.coluna++;
        } else {
            this.coluna = 0;
        }

        this.ultimoTempo = agora;
    },
    desenhar: function (x, y) {
        var largura = this.imagem.width / this.numColunas;
        var altura = this.imagem.height / this.numLinhas;

        this.context.save();

        // Aplica inversão horizontal se necessário
        if (this.inverterHorizontal) {
            this.context.scale(-1, 1); // Inverte o eixo X
            x = -x - largura; // Ajusta a posição X
        }

        this.context.drawImage(
            this.imagem,
            largura * this.coluna,
            altura * this.linha,
            largura,
            altura,
            x,
            y,
            largura * 1.5,
            altura * 1.5
        );

        this.context.restore();
    }
}