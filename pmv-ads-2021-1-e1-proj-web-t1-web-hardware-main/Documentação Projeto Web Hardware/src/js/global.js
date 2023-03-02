//Chamar um novo popup
function IniciarPopup(popupId){
    const popups = document.getElementById(popupId);

    if(popups){
        popups.classList.add('mostrarPopup');
        popups.addEventListener('click',(elemento) => {
            if (elemento.target.id == popupId || elemento.target.className == 'buttonFecharPopup'){
                popups.classList.remove('mostrarPopup');
            }
        });
    }
}

//Fechar popup
function FecharPopup(popupId){
    document.getElementById(popupId).classList.remove('mostrarPopup');
}

//Fecha o popup atual e abre um novo, através dos Ids
function ProximoPopup(antigoPopupId, novoPopupId){
    FecharPopup(antigoPopupId);
    IniciarPopup(novoPopupId);
}

//Salvar chave/valor em localStorage
function SalvarEscolhaPopup(key,valor){
    localStorage.setItem(key,valor);
}

function SalvarEscolhaPopupDuplo(key1,value1,key2,value2){
    localStorage.setItem(key1,value1);
    localStorage.setItem(key2,value2);
}

//Salva escolha do usuário e chama próximo popup
function SalvarEscolhaPopup_ProximoPopup(key, valor, antigoPopupId, novoPopupId){
    if(valor != ''){
        let ultimoPopupValor;

        if(valor == 'gamer' || valor == 'profissional' || valor == 'casual' || valor == 'bemvindo')
            ultimoPopupValor = 'popup-perfil';

        if(valor == 'barato' || valor == 'mediano' || valor == 'caro')
            ultimoPopupValor = 'popup-valor';

        if(valor == 'computador' || valor == 'notebook')
            ultimoPopupValor = 'popup-Pc';
        
        if(valor == 'novo' || valor == 'upgrade')
            ultimoPopupValor = 'popup-novo';

        SalvarEscolhaPopup('ultimoPopup',ultimoPopupValor);
        if(key)
            SalvarEscolhaPopup(key,valor);
    }

    ProximoPopup(antigoPopupId, novoPopupId);
}

//Volta para o último popup que o usuário selecionou
function VoltarUltimoPopup(){
    let ultimoPopup = localStorage.getItem('ultimoPopup');

    if(ultimoPopup){
        IniciarPopup(ultimoPopup);
        FecharPopup('popup-local');
    } 
    else
        IniciarPopup('popupBemVindo');
        FecharPopup('popup-local');
}
//Verifica o local storage e chama o popup inicial ou o ultimo popup que o usuário acessou 
function VerificarUltimoPopup(){
    let ultimoPopup = localStorage.getItem('ultimoPopup');

    //Ver se existe algum popup ativo impede de um popup aparecer por cima do outro
    let popupAtivo = document.getElementsByClassName("mostrarPopup");

    if(ultimoPopup && popupAtivo.length == 0)
        IniciarPopup('popup-local');
    else if(popupAtivo.length == 0)
        IniciarPopup('popupBemVindo');
}

//Limpa localStorage 
function LimparStorage(){
    localStorage.clear();    
    FecharPopup('popup-local');
}

function SalvarPecas (){
    let tipos = ['processador', 'placaMae', 'placaDeVideo', 'memoria', 'armazenamento', 'fonte'];

    tipos.forEach(function(tipo){
        let componenteOpcoes = document.getElementById(tipo).options;
        let componenteValue = componenteOpcoes[componenteOpcoes.selectedIndex].value;

        localStorage.setItem(tipo,componenteValue);
    });    

    location.href = "../html/escolhasUpgrade.html";
}

/* Função para fechar popups com a tecla ESC */
document.querySelector('body').addEventListener('keydown', function fecharESC(e){
    let tecla = e.keyCode
            if(tecla == 27){
                document.getElementById('popupBemVindo').classList.remove('mostrarPopup');
                document.getElementById('popup-perfil').classList.remove('mostrarPopup');
                document.getElementById('popup-valor').classList.remove('mostrarPopup');
                document.getElementById('popup-Pc').classList.remove('mostrarPopup');
                document.getElementById('popup-novo').classList.remove('mostrarPopup');
                document.getElementById('popup-Hardcore').classList.remove('mostrarPopup');
                document.getElementById('popup-local').classList.remove('mostrarPopup');
            };
});

