let amigos = [];
console.log(amigos.length);

function adicionarAmigo() {
    let amigo = document.querySelector('input').value;
    console.log(amigo);
    amigos.push(amigo);
    console.log(amigos);
    document.querySelector('input').value = '';
}

function sortearAmigo() {
    if(amigos.length > 1){
        let amigoSorteado = amigos[Math.floor((Math.random() * amigos.length))];
        console.log(amigoSorteado);
        exibirTexto(`O amigo(a) sorteado foi ${amigoSorteado}. Caso deseje sortear novamente clique em "Sortear Amigo" ou reinicie a página para fazer um novo sorteio`);
    }else if(amigos.length == 1){
        exibirTexto(`Apenas o nome "${amigos[0]}" foi inserido, insira mais nomes para sortear`);
    }else{
        exibirTexto("Nenhum nome foi inserido para poder ser sorteado");
    }
}

function reiniciar() {
    amigos = [];
    alert("Lista de amigos zeradas, insira novos nomes para sortear novamente");
    console.log(amigos);
}

function exibirTexto(mensagem) {
    alert(mensagem);
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(mensagem);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}