class Personagem extends Animacao {
    constructor (matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite)
        
        this.yInicial = height - altura;
        this.y = this.yInicial
        this.velocidadoDoPulo = 0;
        this.gravidade = 3;

    }
    pula(){
        this.y = this.y -50
    }
    aplicaGravidade(){
        this.y = this.y + this.velocidadoDoPulo;
        this.velocidadoDoPulo = this.velocidadoDoPulo + this.gravidade;
        
        if(this.y > this.yInicial){
            this.y = this.yInicial;
        }
    }

}