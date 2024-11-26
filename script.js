// Função de inicialização da API do YouTube
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if(event.data === YT.PlayerState.ENDED) {
        document.getElementById('cadastro-btn').classList.add('glow-effect');
    }
}

// Função para abrir o popup
function openPopup() {
    document.getElementById('popup-overlay').classList.remove('hidden');
}

// Evento para o botão de cadastro
document.getElementById('cadastro-btn').addEventListener('click', openPopup);

// Função para fechar o popup
function closePopup() {
    document.getElementById('popup-overlay').classList.add('hidden');
}

// Evento para o botão de fechar no popup
document.querySelector('.close-btn').addEventListener('click', closePopup);

// Fechar o popup ao clicar fora dele
document.getElementById('popup-overlay').addEventListener('click', function(e) {
    if (e.target == this) {
        closePopup();
    }
});

// Função para atualizar a bandeira ao alterar o DDI
const ddiInput = document.getElementById('ddi');
const countryFlag = document.getElementById('country-flag');

const ddiToFlag = {
    '55': '🇧🇷',
    '1': '🇺🇸',
    '54': '🇦🇷',
    // Adicione outros DDIs conforme necessário
};

ddiInput.addEventListener('input', function() {
    const ddi = this.value.replace(/\D/g, '');
    countryFlag.textContent = ddiToFlag[ddi] || '🌐';
});

            