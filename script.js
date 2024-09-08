function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano');
    const res = document.querySelector('div#res');

    // Verifica se o campo está vazio ou se o ano é maior que o atual
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // Para a execução da função
    }

    const fsex = document.getElementsByName('radsex'); // Captura os botões de rádio para o gênero
    const idade = ano - Number(fano.value); // Calcula a idade
    let genero = '';
    const img = document.createElement('img'); // Cria um elemento de imagem
    img.setAttribute('id', 'foto'); // Define um id para a imagem

    // Define o gênero e a imagem com base na idade
    if (fsex[0].checked) {
        genero = 'Homem';

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/bebe_homen.jpg'); // Imagem de bebê masculino
        } else if (idade < 21) {
            img.setAttribute('src', 'img/adhomen.jpg'); // Imagem de jovem masculino
        } else if (idade < 50) {
            img.setAttribute('src', 'img/adhomen.jpg'); // Imagem de adulto masculino
        } else {
            img.setAttribute('src', 'img/idoso_homen.jpg'); // Imagem de idoso masculino
        }

        document.body.style.backgroundColor = '#4682b4'; // Muda o fundo do body para azul
    } else if (fsex[1].checked) {
        genero = 'Mulher';

        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img/bebe_mulher.jpg'); // Imagem de bebê feminino
        } else if (idade < 21) {
            img.setAttribute('src', 'img/joven_mulher.jpg'); // Imagem de jovem feminino
        } else if (idade < 50) {
            img.setAttribute('src', 'img/adulto_mulher.png'); // Imagem de adulta feminina
        } else {
            img.setAttribute('src', 'img/idosa_mulher.jpg'); // Imagem de idosa feminina
        }

        document.body.style.backgroundColor = '#ffc0cb'; // Muda o fundo do body para rosa
    } else {
        window.alert('[ERRO] Selecione o sexo.');
        return; // Para a execução da função
    }

    // Exibe o resultado
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`; // Exibe a mensagem
    res.appendChild(img); // Adiciona a imagem à div de resultado
    res.style.textAlign = 'center'; // Centraliza o texto
}
