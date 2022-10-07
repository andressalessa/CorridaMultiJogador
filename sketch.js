// variaveis
var bancoDeDados, jogo;
var backgroundImg;

function preload() {
    // carregar as imagens
    backgroundImg = loadImage("./assets/planodefundo.png");
}

function setup() {

    canvas = createCanvas(windowWidth, windowHeight);

    // iniciar o banco de dados
    
}

function draw() {
    // desenhar na tela
    background(backgroundImg);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// continuar com as classes