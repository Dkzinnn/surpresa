// --- LÓGICA DA PLAYLIST DE MÚSICAS ---
const listaMusicas = ["songs/musica1.mp3.mp3", "songs/musica2.mp3.mp3", "songs/musica3.mp3.mp3", "songs/musica4.mp3.mp3", "songs/musica5.mp3.mp3"];
let musicaAtualIndex = 0;

// --- SUAS PERGUNTAS E TEXTOS ---
const quiz = [
    {
        pergunta: "Qual foi a primeira impressão que tive de você?",
        opcoes: ["Uma garota esquisita", "Uma garota tímida", "Uma garota estranha"],
        respostaCorreta: "Uma garota tímida",
        fato: "Certamente te achei uma garota tímida, amigável e muito inteligente. Por não ter intimidade, acabei sendo um pouco estranho e te ignorando um pouco. Mas saiba que, desde a primeira vez que te vi, te achei muito divertida e engraçada. Eu sabia que, se me aproximasse aos poucos, poderíamos ter uma grande amizade."
    },
    {
        pergunta: "Após os primeiros encontros no servidor, qual foi o primeiro grande passo de confiança em mim?",
        opcoes: ["Conversar no PV", "Passar o zap", "Aceitar um presente"],
        respostaCorreta: "Aceitar um presente",
        fato: "Vou confessar que, quando você disse na call que não aceitava presente de ninguém, eu coloquei como desafio na minha vida conseguir te presentear. E olha só... eu consegui! Te dei uma assinatura do Spotify e ali vi que seria uma ótima oportunidade para conversar com você no PV (um dos primeiros gestos de confiança que recebi de você)."
    },
    {
        pergunta: "Após várias conversas, qual era a coisa que você sempre falava e eu não acreditava?",
        opcoes: ["Que eu era gentil", "Que gostava da minha presença", "Que eu não incomodava"],
        respostaCorreta: "Que gostava da minha presença",
        fato: "Realmente, não só você como a Pops falavam a mesma coisa. Mas, por causa da minha dificuldade em acreditar nas pessoas, eu apenas ignorava ou, sei lá, falava algo e deixava pra lá. Com o tempo, fui começando a acreditar graças a você, que sempre demonstrava o quanto queria a minha companhia. Logicamente, comecei a me aproximar de você e a gostar mais ainda de estarmos juntos."
    },
    {
        pergunta: "Qual destas datas tem um significado especial para nós?",
        opcoes: ["28/08/2003", "20/12/2005", "30/06/2026"],
        respostaCorreta: "30/06/2026",
        fato: "Logicamente, foi a data em que você me disse o tão famoso 'eu te amo'. Bom, essas foram as três palavras que deixaram claro o quanto você gostava de mim. Você demonstrava isso, e eu ficava todo feliz por ter uma amiga assim como você. Foi o empurrão que faltava para eu poder me abrir de verdade com você."
    },
    {
        pergunta: "O que eu mais gosto em você?",
        opcoes: ["Seus lábios", "Seu sorriso", "Seus olhos"],
        respostaCorreta: "Seus olhos",
        fato: "O que eu mais gosto em você são os seus olhos. Eles são lindos e brilham de alegria toda vez que você sorri. Fora as vezes em que me perco olhando para eles e fico admirado com tanta beleza. Sinto como se estivesse olhando para uma galáxia, e ela estivesse me chamando, me deixando cada vez mais fascinado."
    }
];
    // Nota: Como as perguntas 4, 5 e 6 estavam com "AAAAAAAAA", eu as removi para o jogo não bugar. 
    // Você pode adicionar mais depois copiando os blocos acima!
let perguntaAtual = 0;

function carregarPergunta() {
    document.getElementById("pergunta").innerText = quiz[perguntaAtual].pergunta;
    
    const divOpcoes = document.getElementById("botoes-opcoes");
    divOpcoes.innerHTML = "";

    quiz[perguntaAtual].opcoes.forEach(opcao => {
        const btn = document.createElement("button");
        btn.innerText = opcao;
        btn.onclick = () => verificarResposta(opcao);
        divOpcoes.appendChild(btn);
    });

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
        feedback.innerText = "Você Acertou! 🎉";
        feedback.className = "mensagem-sucesso";
        fato.innerText = quiz[perguntaAtual].fato;

        feedback.classList.remove("animacao-acerto");
        void feedback.offsetWidth; 
        feedback.classList.add("animacao-acerto");

        btnProxima.style.display = "inline-block";
        if (perguntaAtual === quiz.length - 1) {
            btnProxima.innerText = "Finalizar Surpresa ❤️";
            btnProxima.onclick = () => {
                document.getElementById("caixa-principal").innerHTML = 
                `<h1>Fim!</h1>
                    <p id="fato-amizade">
                        Sinceramente, espero que tenha gostado. Eu sei que foi pouco, mas foi de coração e alma. Obrigado por ser essa garota incrível que você é e por ser uma amiga perfeita para mim. Gosto muito de você e do seu jeito.<br><br>
                        Amo quando você começa a falar e não para mais, adoro quando fica um pouco mais romântica comigo e quando solta umas safadezas. São realmente momentos que nos tornam o que somos e nos quais podemos ver que a nossa amizade é verdadeira e especial.<br><br>
                        Saiba que, mesmo que eu não mande muita mensagem, você é muito importante para mim e penso sempre em você. Lembro de todos os nossos momentos e sempre desejo mais. Não posso mentir sobre isso: queria ser ainda mais próximo, por assim dizer... mas fazer o quê, né? Querer não é poder...<br><br>
                        Vou finalizar da melhor forma possível com o famoso: Eu te amo, minha neném! Se cuida e continue sendo minha, afinal, não tem volta!<br><br>

                        <strong>Com amor,</strong><br>
                        <strong>Seu amigo,</strong><br>
                        <strong>Hiago. ❤️ (pode se apaixonar agora)</strong> 
                    </p>`
                }
        }
    } else {
        feedback.innerText = "Errou! Tente de novo. 😅";
        feedback.className = "mensagem-erro";
        fato.innerText = "";

        feedback.classList.remove("animacao-erro");
        void feedback.offsetWidth;
        feedback.classList.add("animacao-erro");
    }
}

function proximaPergunta() {
    perguntaAtual++;
    carregarPergunta();
}

// Inicia o jogo
carregarPergunta();

// --- CORREÇÃO DA MÚSICA ---
function tocarMusica() {
    const audio = document.getElementById("musica-fundo");
    const botao = document.getElementById("btn-musica");

    if (audio.paused) {
        // Usa o catch para não quebrar a página se o arquivo não for encontrado
        audio.play().then(() => {
            botao.innerText = "PAUSE";
        }).catch((erro) => {
            console.log("Erro ao tocar. Verifique se o arquivo está na pasta 'songs'.");
        });
    } else {
        audio.pause();
        botao.innerText = "PLAY";
    }
}

function pularMusica() {
    const audio = document.getElementById("musica-fundo");
    const botaoPlay = document.getElementById("btn-musica");
    
    musicaAtualIndex++;
    if (musicaAtualIndex >= listaMusicas.length) {
        musicaAtualIndex = 0;
    }

    audio.src = listaMusicas[musicaAtualIndex];
    
    audio.play().then(() => {
        botaoPlay.innerText = "PAUSE";
    });
}

function mudarVolume() {
    const audio = document.getElementById("musica-fundo");
    const slider = document.getElementById("volume-slider");
    // Removido o código que travava o volume
    audio.volume = slider.value;
}

// Define o volume inicial
document.getElementById("musica-fundo").volume = document.getElementById("volume-slider").value;

// --- LÓGICA DA CARTA ANIMADA ---
function abrirCarta() {
    const telaCarta = document.getElementById("tela-carta");
    const aba = document.querySelector(".aba-envelope");
    const papel = document.querySelector(".papel-carta");
    const texto = document.querySelector(".mensagem-clique");
    tocarMusica();
    texto.style.display = "none";
    aba.classList.add("aba-aberta");

    setTimeout(() => {
        papel.classList.add("carta-subindo");
    }, 500);

    setTimeout(() => {
        telaCarta.style.opacity = "0"; 
        
        setTimeout(() => {
            telaCarta.style.display = "none";
        }, 1000); 

    }, 2000);
}