class Animacao {
    constructor (matriz, imagem, x, largura, altura, larguraSprite, alturaSprite){
        this.matriz = matriz;
        this.imagem = imagem;
        this.altura = altura;                //altura e larguga são da imagem?
        this.largura = largura;
        this.x = x;                          //x e y são a posição do sprite na tela
        this.y = height - this.altura;
        this.larguraSprite = larguraSprite;      //largura e altura/Sprite são o tamanho do sprite
        this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
    }
    exibe(){
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], 
            this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite); // aqui renderiza as imagens na tela
        this.anima();
    }

    anima(){
        this.frameAtual++
        if(this.frameAtual >= this.matriz.length -1){
            this.frameAtual = 0
        }
    }
}