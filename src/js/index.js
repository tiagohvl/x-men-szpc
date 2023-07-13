// oque preciso fazer?
//objetivo 1 - quando passar o mauser em cima do personagem na listagem, devemos seleciona-lo
// passo 1 - pegar os personagens no js para poder verificar quando o usuario passar o mause em cima de um deles

const personagens = document.querySelectorAll('.personagem')

// passo 2 - adicionar a classe selecianado no personagem que o usuario passar o curso do mouse

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth <450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        //passo 3 verificar se ja existe personagem selecionado, se sim, devemos remover a selecao dele
        removerSelecaoDoPersonagem();

       //selecionar novo personagem, faz parte da segunda, mas deve ser colocado abaixo da terceira parte para não dar erro
        personagem.classList.add('selecionado');

        //objetivo 2 - quando passar o mause em cima do personagem na listagem, trocar a imagem, o nome e a descrição de personagem grande
        
        //passo 1 - pegar o elemento do personagem grande pra adicionaras informações

        alterarImagemPersonagemSelecionado(personagem);

        // passo 3 - alterar o nome do personagem grande

        alterarNomePersonagemSelecionado(personagem);

        //passo 4 - alterar descrição dos personagem
        alterarDescricaoPersonagem(personagem);
    })
})

function alterarDescricaoPersonagem(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar imagem personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagem/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}
