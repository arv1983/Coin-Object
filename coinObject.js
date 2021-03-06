const coin = {
    state: 0,
    flip: function() {
        coin.state = Math.floor(Math.random() * 2 + 0);
        // 1. Um ponto: Randomicamente configura a propriedade “estado” do 
        // seu objeto moeda para ser um dos seguintes valores:
        // 0 ou 1: use "this.state" para acessar a propriedade "state" neste objeto.
    },

    toString: function() {
            return (this.state == 0) ? 'Heads' : 'Tails';
        // 2. Um ponto: Retorna a string "Heads" ou "Tails", dependendo de como
        //  "this.state" está como 0 ou 1.
    },
    toHTML: function() {
        this.flip();
        const image = document.createElement('img');
        image.setAttribute("src", "images/" + this.state + ".png")
        image.setAttribute("width", "50px");
        image.setAttribute("height", "50px");
        document.body.appendChild(image)
        return image;
        
            // 3. Um ponto: Configura as propriedades do elemento imagem 
            // para mostrar a face voltada para cima ou para baixo dependendo
            // do valor de this.state está 0 ou 1.
            //return image; ??????????????????????????????????????????????????
    }
};

function display20Flips() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        coin.flip();
        results.push(coin.state==0 ? 'Heads' : 'Tails')
        
    }
document.getElementById("arr").innerHTML = results;
    // 4. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma string na página. 
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.
return results;
}

function display20Images() {
    const results = [];

    for (let i = 0; i < 20; i++) {
    document.getElementById("img").appendChild(coin.toHTML());
    results.push(coin.state==0 ? 'Heads' : 'Tails');
    }
document.getElementById('arr').innerHTML = results;
    // 5. Um ponto: Use um loop para arremessar a moeda 20 vezes, cada vez 
    // mostrando o resultado como uma imagem na página. 
    // Depois de que seu loop terminar, retorne um array com o 
    // resultado de cada arremesso.

}
display20Images();
display20Flips();
