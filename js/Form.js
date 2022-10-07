class Form {
  constructor() {
    this.entrada = createInput("").attribute("placeholder", "Digite seu nome");
    this.botaoJogar = createButton("Jogar");
    this.imagemTitulo = createImg("./assets/TITULO.png", "nome do jogo");
    this.mensagem = createElement("h2");
  }

  esconder() 
  {
    this.mensagem.esconder();
    this.botaoJogar.esconder();
    this.input.esconder();
  }



  addPosicaoElementos()
  {
    this.imagemTitulo.position(120, 50);
    this.entrada.position(width / 2 - 110, height / 2 - 80);
    this.botaoJogar.position(width / 2 - 90, height / 2 - 20);
    this.mensagem.position(width / 2 - 300, height / 2 - 100);
  }

  

}
