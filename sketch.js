let imagemCenario; //utilizando p5.js
let imagemPersonagem;
let cenario;
let personagem
let somDoJogo;

function preload(){
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png'); //aqui pré carrega as imagens
    somDoJogo = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
    createCanvas(windowWidth, windowHeight); // aqui define as proporções da tela
    cenario = new Cenario(imagemCenario, 2);
    personagem = new Personagem (imagemPersonagem)
    frameRate(40);
    somDoJogo.loop()

}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}

