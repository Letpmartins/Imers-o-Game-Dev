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