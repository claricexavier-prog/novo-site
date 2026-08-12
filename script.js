function filtrarFofocas() {
    // Pega o valor digitado no campo de busca e converte para minúsculas
    const input = document.getElementById('searchInput').value.toLowerCase();
    
    // Seleciona todos os cards de fofoca e a mensagem de "sem resultados"
    const cards = document.getElementsByClassName('fofoca-card');
    const noResults = document.getElementById('noResults');
    
    let encontrou = false;

    // Percorre cada card para verificar se o termo buscado bate com título, texto ou tag (ex: Curitiba, Londrina)
    for (let i = 0; i < cards.length; i++) {
        const titulo = cards[i].querySelector('.card-title').innerText.toLowerCase();
        const texto = cards[i].querySelector('.card-text').innerText.toLowerCase();
        const tag = cards[i].querySelector('.card-tag').innerText.toLowerCase();

        // Se encontrar no título, texto ou tag da cidade, exibe o card
        if (titulo.includes(input) || texto.includes(input) || tag.includes(input)) {
            cards[i].style.display = "flex";
            encontrou = true;
        } else {
            cards[i].style.display = "none";
        }
    }

    // Exibe ou oculta a mensagem de "nenhum resultado encontrado"
    if (encontrou) {
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }
}
