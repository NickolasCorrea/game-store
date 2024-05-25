function alterarStatus(index)
{
    let jogoSelecionado = document.getElementById(`game-${index}`);
    let imagem = jogoSelecionado.querySelector(".dashboard__item__img");
    let botao = jogoSelecionado.querySelector(".dashboard__item__button");
    let nomeJogo = jogoSelecionado.querySelector(".dashboard__item__name");

    // alert(nomeJogo.textContent);
    
    if (imagem.classList.contains("dashboard__item__img--rented"))
    {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
    }
    else 
    {
        imagem.classList.add("dashboard__item__img--rented");
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return");
    }
}