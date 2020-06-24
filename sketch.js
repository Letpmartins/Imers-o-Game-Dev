let imagemCenario; //utilizando p5.js
let imagemPersonagem;
let cenario;

function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png'); //aqui pré carrega as imagens
}

function setup() {
    createCanvas(windowWidth, windowHeight); // aqui define as proporções da tela
    cenario = new Cenario(imagemCenario, 2);
    frameRate(40);
}

function draw() {
  cenario.exibe();
  cenario.move();
  image(imagemPersonagem, 0, height-135, 110, 135, 0, 0, 220, 270); // aqui renderiza as imagens na tela
}

class Cenario {             // Se cria a classe pra reduzir a quantidade de renderizações, e facilitá-lastbm
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;       //no constructor, se cria a imagem
    this.x1 = 0;
    this.x2 = width;
  }

  exibe(){
    image(this.imagem, this.x1,0, width, height);   // no exibe, se mostra
    image(this.imagem, this.x2, 0, width, height);
  }

  move(){
    this.x1 = this.x1 - this.velocidade;        //no move, se movimenta
    this.x2 = this.x2 - this.velocidade;

    if(this.x1 < -width){       // esses dois if's são pra controlar a repeticao da imagem
      this.x1 = width;
    }
    
    if(this.x2 < -width){
      this.x2 = width;
    }
    
  }

  }