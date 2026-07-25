// --- LÓGICA DA PLAYLIST DE MÚSICAS ---

// Lista com os nomes EXATOS dos arquivos das suas músicas
const listaMusicas = ["songs/musica1.mp3.mp3", "songs/musica2.mp3.mp3", "songs/musica3.mp3.mp3"];
let musicaAtualIndex = 0; // O computador começa contando do zero (primeira música)

// AQUI VOCÊ ADICIONA AS SUAS PERGUNTAS E TEXTOS!
const quiz = [
    {
        pergunta: "Qual foi a primeira impressão que tive de você ?",
        opcoes: ["Uma garota esquisita ", "Uma garota timida", "Uma garota estranha"],
        respostaCorreta: "Uma garota timida",
        fato: "Certamente te achei umvca garota timida, amigevel e muito inteligente, por não ter imtimidade acabei sendo um pouco estranho e ignorando um pouco mas saiba desde a primeira vez que te vi achei vc muito divertida e engraçada, sabia que se me aproximasse de poucos a poucos poderia ter uma boa amizade."
    },
    {
        pergunta: "Após os primeiros encontros no serve, qual foi o primeiro grande passo de confiança em mim  ",
        opcoes: ["conversar no PV", "passar o zap ", "Aceitar um presente"],
        respostaCorreta: "Aceitar um presente",
        fato: "Vou confessar que quando disse na call que não aceita presente de ninguem, eu coloquei um desafio na minha vida de conseguir te presentear e olha só... eu consegui te dei uma assinatura do spotify e ali vi seria uma otima oportunidade para conversar com, você no pv (um dos primeiros gestos de confiaça que recebi de você.)"
    },
    {
        pergunta: "Após várias conversas, qual era a coisa que você sempre falava e eu não acreditava.",
        opcoes: ["que eu era gentil", "que gostava da minha presença", "que eu não incomodava"],
        respostaCorreta: "que gostava da minha presença",
        fato: "Realemnte não so você como a Pops falavam a mesma coisa, mas por causa da minha personalidade de não acreditar em ninguem eu apenas ignorava ou sla, falava algo mas deixava pra lá, mas com o tempo eu fui começando a acreditar graças a você que sempre demonstrava o quanto queria minha presença, e logicamente comecei a me aproximar de vocêe e a gostar mais ainda da sua presença. "
    },
    {
        pergunta: "qual foi a data",
        opcoes: ["que eu era gentil", "que gostava da minha presença", "que eu não incomodava"],
        respostaCorreta: "que gostava da minha presença",
        fato: "Realemnte não so você como a Pops falavam a mesma coisa, mas por causa da minha personalidade de não acreditar em ninguem eu apenas ignorava ou sla, falava algo mas deixava pra lá, mas com o tempo eu fui começando a acreditar graças a você que sempre demonstrava o quanto queria minha presença, e logicamente comecei a me aproximar de vocêe e a gostar mais ainda da sua presença. "
    },
    {
        pergunta: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        opcoes: ["que eu era gentil", "que gostava da minha presença", "que eu não incomodava"],
        respostaCorreta: "que gostava da minha presença",
        fato: "Realemnte não so você como a Pops falavam a mesma coisa, mas por causa da minha personalidade de não acreditar em ninguem eu apenas ignorava ou sla, falava algo mas deixava pra lá, mas com o tempo eu fui começando a acreditar graças a você que sempre demonstrava o quanto queria minha presença, e logicamente comecei a me aproximar de vocêe e a gostar mais ainda da sua presença. "
    },
    {
        pergunta: "AAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
        opcoes: ["que eu era gentil", "que gostava da minha presença", "que eu não incomodava"],
        respostaCorreta: "que gostava da minha presença",
        fato: "Realemnte não so você como a Pops falavam a mesma coisa, mas por causa da minha personalidade de não acreditar em ninguem eu apenas ignorava ou sla, falava algo mas deixava pra lá, mas com o tempo eu fui começando a acreditar graças a você que sempre demonstrava o quanto queria minha presença, e logicamente comecei a me aproximar de vocêe e a gostar mais ainda da sua presença. "
    }

];

let perguntaAtual = 0;

function carregarPergunta() {
    // Coloca o texto da pergunta na tela
    document.getElementById("pergunta").innerText = quiz[perguntaAtual].pergunta;

    // Limpa os botões antigos
    const divOpcoes = document.getElementById("botoes-opcoes");
    divOpcoes.innerHTML = "";

    // Cria um botão para cada opção disponível naquela pergunta
    quiz[perguntaAtual].opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(opcao);
        divOpcoes.appendChild(btn);
    });

    // Esconde os textos de acerto/erro e o botão de próxima
    document.getElementById("feedback").innerText = "";
    document.getElementById("fato-amizade").innerText = "";
    document.getElementById("btn-proxima").style.display = "none";
}

function verificarResposta(respostaEscolhida) {
    const feedback = document.getElementById("feedback");
    const fato = document.getElementById("fato-amizade");
    const btnProxima = document.getElementById("btn-proxima");

    const correta = quiz[perguntaAtual].respostaCorreta;

    if (respostaEscolhida === correta) {
        // Configura o texto e a cor verde
        feedback.innerText = "Você Acertou! 🎉";
        feedback.className = "mensagem-sucesso";
        fato.innerText = quiz[perguntaAtual].fato;

        // --- Lógica para o efeito de pulsar ---
        feedback.classList.remove("animacao-acerto");
        void feedback.offsetWidth; // Força o navegador a reler a animação
        feedback.classList.add("animacao-acerto");

        // Mostra o botão para ir para a próxima, ou finalizar
        btnProxima.style.display = "inline-block";

        // Mostra o botão para ir para a próxima, ou finalizar
        btnProxima.style.display = "inline-block";
        if (perguntaAtual === quiz.length - 1) {
            btnProxima.innerText = "Finalizar Surpresa ❤️";
            btnProxima.onclick = () => {
                document.getElementById("caixa-principal").innerHTML = "<h1>Fim!</h1><p>Espero que tenha gostado de relembrar esses momentos. Te amo, amiga!</p>";
            };
        }
    } else {
        // Configura o texto e a cor vermelha
        feedback.innerText = "Errou! Tente de novo. 😅";
        feedback.className = "mensagem-erro";
        fato.innerText = "";

        // --- Lógica para o efeito de tremer ---

        // 1. Remove a animação (caso ela já tenha errado a mesma pergunta antes)
        feedback.classList.remove("animacao-erro");

        // 2. Esse comando força o navegador a "reler" o código rapidamente
        void feedback.offsetWidth;

        // 3. Adiciona a animação de tremer novamente
        feedback.classList.add("animacao-erro");
    }
}

function proximaPergunta() {
    perguntaAtual++;
    carregarPergunta();
}

// Inicia o jogo quando a página abre
carregarPergunta();
// Função que liga e desliga a música
function tocarMusica() {
    const audio = document.getElementById("musica-fundo");
    const botao = document.getElementById("btn-musica");

    if (audio.paused) {
        audio.play();
        botao.innerText = "⏸️ Pausar Música";
    } else {
        audio.pause();
        botao.innerText = "🎵 Tocar Música";
    }
}// Atualizamos para usar PLAY e PAUSE combinando com o visual
function tocarMusica() {
    const audio = document.getElementById("musica-fundo");
    const botao = document.getElementById("btn-musica");

    if (audio.paused) {
        audio.play();
        botao.innerText = "PAUSE";
    } else {
        audio.pause();
        botao.innerText = "PLAY";
    }
}
// Nova função para trocar de música
        function pularMusica() {
            const audio = document.getElementById("musica-fundo");
            const botaoPlay = document.getElementById("btn-musica");
            
            // Pula para a próxima posição da lista
            musicaAtualIndex++;
            
            // Se chegou no final da lista, volta para a primeira música
            if (musicaAtualIndex >= listaMusicas.length) {
                musicaAtualIndex = 0;
            }

            // Avisa o navegador qual é o novo arquivo de áudio
            audio.src = listaMusicas[musicaAtualIndex];
            
            // Toca a música nova automaticamente e ajusta o botão para "PAUSE"
            audio.play();
            botaoPlay.innerText = "PAUSE";
        }

// Nova função que muda o volume em tempo real
function mudarVolume() {
    const audio = document.getElementById("musica-fundo");
    const slider = document.getElementById("volume-slider");

    // Pega o valor do slider (de 0 a 1) e joga pro áudio
    audio.volume = slider.value;
}

// Garante que a música já comece com o volume certo definido no slider (0.5)
document.getElementById("musica-fundo").volume = document.getElementById("volume-slider").value;