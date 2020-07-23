class Personagem extends Animacao {
    constructor (matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        
        this.yInicial = height - this.altura;
        this.y = this.yInicial
        this.velocidadoDoPulo = 0;
        this.gravidade = 3;

    }
    pula(){
        this.velocidadoDoPulo = - 30
    }
    aplicaGravidade(){
        this.y = this.y + this.velocidadoDoPulo;
        this.velocidadoDoPulo = this.velocidadoDoPulo + this.gravidade;
        
        if(this.y > this.yInicial){
            this.y = this.yInicial;
        }
    }

    estaColidindo(inimigo){
        const precisao = .7;
        const colisao = collideRectRect(
            this.x, this.y, this.largura * precisao, this.altura * precisao,
            inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        return colisao;
    }


}