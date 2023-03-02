window.onload = function(){ 
    RecomendarHardware();
}

//Gera pdf
function criarPDF(){
    let conteudo = "";
    if(localStorage.getItem('tipoUpgradeNovo') == 'novo')
        conteudo = document.getElementById('secaoParaRelatorio').innerHTML; 
    else{
        //Foram criadas duas listas com o mesmo tamanho e posições, para fazer a seleção através da lista original e exibir o conteúdo da lista de textos
        let tipos = ['processador', 'placaMae', 'placaDeVideo', 'memoria', 'armazenamento', 'fonte'];
        let tiposTexto = ['Processador','Placa-mãe','Placa de Vídeo','Memória','Armazenamento','Fonte'];

        tipos.forEach(function(tipo){
            let listaComponentes = [];
            let listaComponentesTexto = [];

            switch(tipo){
                case 'processador':
                    listaComponentes = ['inferior','pentium', 'i3', 'i5', 'i7', 'i9','superior'];
                    listaComponentesTexto = ['','Pentium G6400 Gold','Intel Core i3-10100','Intel Core  i5-11600K','Intel Core i7-11700K','Intel Core i9-11900K',''];
                    break;
                case 'placaMae':
                    listaComponentes = ['inferior','h410m', 'b560m', 'z590','superior'];
                    listaComponentesTexto = ['','H410M','B560M','Z590',''];
                    break;
                case 'memoria':
                    listaComponentes = ['inferior','2gb','4gb','8gb','16gb','32gb','superior'];
                    listaComponentesTexto = ['','DDR4 2GB','DDR4 4GB','DDR4 8GB','DDR4 16GB (8x2)','DDR4 32GB (16x2)',''];
                    break;
                case 'placaDeVideo':
                    listaComponentes = ['inferior','gt1030','gtx1650','rtx2060','rtx3080','superior'];
                    listaComponentesTexto = ['','GT1030','GTX1650','RTX2060','RTX3080',''];
                    break;
                case 'armazenamento':
                    listaComponentes = ['inferior','hd500', 'hd1000', 'ssd240', 'ssd1000','superior'];
                    listaComponentesTexto = ['','HD 500gb', 'HD 1TB', 'SSD 240GB', 'SSD 1TB NVME',''];
                    break;
                case 'fonte':
                    listaComponentes = ['inferior','350w', '450w', '600w','750w','superior'];
                    listaComponentesTexto = ['','Fonte 350w', 'Fonte 450w 80+', 'Fonte 600w 80+', 'Fonte 750w 80+', ''];
                    break;
            }

            let indexComponenteSelecionado = listaComponentes.indexOf(localStorage.getItem(tipo));
            
            if(indexComponenteSelecionado < listaComponentes.length - 2)
                conteudo += '<p style="padding-left: 20px;">' + tiposTexto[tipos.indexOf(tipo)] + '</p>';
 
            listaComponentes.forEach(function(componente){
                let indexComponenteLista = listaComponentes.indexOf(componente);

                if(indexComponenteLista > indexComponenteSelecionado){
                    if(listaComponentesTexto[indexComponenteLista] != '')
                        conteudo += '<p style="padding-left: 60px;">' + listaComponentesTexto[indexComponenteLista] + '</p>';
                }
            })
        })
    }

    var win = window.open('', '');
    win.document.write(conteudo);  
    win.onafterprint = win.close;
    win.print(); 
}

function RecomendarHardware(){
        //Pegando infromações do perfil do usuário
        let perfil = localStorage.getItem('perfil');
        let preco = localStorage.getItem('preco'); 
        let tipoMaquina = localStorage.getItem('tipoMaquina');
        let tipoUpgradeNovo = localStorage.getItem('tipoUpgradeNovo');
    
        //Se alguma informação do perfil do usuário estiver vazia, ele retorna para o index
        if(!perfil || !preco || !tipoMaquina || !tipoUpgradeNovo)
            location.href="../html/index.html";
    
        //Pegando informações do hardware
        let processador = localStorage.getItem("processador");
        let placaMae = localStorage.getItem("placaMae");
        let memoria = localStorage.getItem("memoria");
        let placaDeVideo = localStorage.getItem("placaDeVideo");
        let fonte = localStorage.getItem("fonte");
        let armazenamento = localStorage.getItem("armazenamento");
    
        //Se for do tipo upgrade, e alguma das informações do hardware do usuário estiver vazia, volta para index
        if(tipoUpgradeNovo == 'upgrade')
            if(!processador || !placaMae || !memoria || !placaDeVideo || !fonte || !armazenamento)
                location.href="../html/index.html";
    
        //Máquina nova, várias verificações e acordo com os dados do usuário, definindo HTML quando os dados baterem com as condições do if
        if(tipoUpgradeNovo == 'novo'){
            if(perfil == 'gamer' && preco == 'caro' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "AMD Ryzen 7 3800x";
                document.getElementById("placaMae").innerHTML = "X570";
                document.getElementById("memoria").innerHTML = "Memória XPG Gammix D10, 16gb (2x8GB), 3200MHz, DDR4, CL16";
                document.getElementById("placaDeVideo").innerHTML = "RX 6700XT";
                document.getElementById("fonte").innerHTML = "700W 80+";
                document.getElementById("armazenamento").innerHTML = "SSD 240gb M.2 NVME + HD 7200RPM 2TB";
                document.getElementById("nota").innerHTML = "Essa configuração irá atender qualquer jogo com uma ótima qualidade.";      
            }
            else if(perfil == 'gamer' && preco == 'caro' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "XPG Xenia 2070 Max-Q";
                document.getElementById("nota").innerHTML = "Esse é um dos modelos mais potentes do mercado.";
            }
            else if(perfil == 'gamer' && preco == 'barato' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "AMD Ryzen 3 3200G";
                document.getElementById("placaMae").innerHTML = "A320M";
                document.getElementById("memoria").innerHTML = "Memória 8gb (2x4gb) 2666mhz DDR4";
                document.getElementById("placaDeVideo").innerHTML = " - ";
                document.getElementById("fonte").innerHTML = "350W";
                document.getElementById("armazenamento").innerHTML = "HD 500gb";
                document.getElementById("nota").innerHTML = "Essa configuração modesta consegue rodar os jogos mais antigos e jogos novos em qualidade baixa.";  
            }
            else if(perfil == 'gamer' && preco == 'barato' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Lenovo IdeaPad S145 i5 8265U 8GB MX110";
                document.getElementById("nota").innerHTML = "Essa configuração modesta consegue rodar os jogos mais antigos e jogos novos em qualidade baixa.";  
            }
            else if(perfil == 'gamer' && preco == 'mediano' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "AMD Ryzen 5 3600";
                document.getElementById("placaMae").innerHTML = "B450M";
                document.getElementById("memoria").innerHTML = "Memória 8gb (2x4gb) 2666mhz DDR4";
                document.getElementById("placaDeVideo").innerHTML = "GTX 1650 Super";
                document.getElementById("fonte").innerHTML = "450W";
                document.getElementById("armazenamento").innerHTML = "SSD SATA 500gb";
                document.getElementById("nota").innerHTML = "Essa configuração modesta consegue rodar os jogos atuais em uma qualidade satisfatória.";  
            }
            else if(perfil == 'gamer' && preco == 'mediano' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Avell A52 Liv";
                document.getElementById("nota").innerHTML = "Essa configuração aguenta todos os jogos atuais em qualidade satisfatória."; 
            }
            else if(perfil == 'casual' && preco == 'caro' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "i5 10400";
                document.getElementById("placaMae").innerHTML = "H510M";
                document.getElementById("memoria").innerHTML = "Memória 8gb (2x4gb) 2666mhz DDR4";
                document.getElementById("placaDeVideo").innerHTML = " - ";
                document.getElementById("fonte").innerHTML = "350W";
                document.getElementById("armazenamento").innerHTML = "SSD 480gb";
                document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais com o máximo de satisfação.";  
            }
            else if(perfil == 'casual' && preco == 'caro' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Lenovo Ultrafino Ideapad S145 i7-1065G7";
                document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais com o máximo de satisfação.";  
            }
            else if(perfil == 'casual' && preco == 'barato' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "Intel Pentium Gold G6400";
                document.getElementById("placaMae").innerHTML = "H510M";
                document.getElementById("memoria").innerHTML = "Memória 4gb 2400mhz DDR4";
                document.getElementById("placaDeVideo").innerHTML = " - ";
                document.getElementById("fonte").innerHTML = "350W";
                document.getElementById("armazenamento").innerHTML = "HD 500gb";
                document.getElementById("nota").innerHTML = "Esse modelo irá atender todas as atividades casuais.";  
            }
            else if(perfil == 'casual' && preco == 'barato' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Samsung Book E30 i3-1115G4";
                document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar longos travamentos nem engasgos para atividades casuais.";  
            }
            else if(perfil == 'casual' && preco == 'mediano' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "i3 10100";
                document.getElementById("placaMae").innerHTML = "H510M";
                document.getElementById("memoria").innerHTML = "Memória 8gb 2400mhz DDR4";
                document.getElementById("placaDeVideo").innerHTML = " - ";
                document.getElementById("fonte").innerHTML = "350W";
                document.getElementById("armazenamento").innerHTML = "SSD 240gb";
                document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar travamentos nem engasgos para atividades casuais.";  
            }
            else if(perfil == 'casual' && preco == 'mediano' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Acer Aspire 5 i5-10210u";
                document.getElementById("nota").innerHTML = "Esse modelo não irá apresentar travamentos nem engasgos para atividades casuais.";  
            }
            else if(perfil == 'profissional' && preco == 'caro' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "Ryzen 9 5900x";
                document.getElementById("placaMae").innerHTML = "X570";
                document.getElementById("memoria").innerHTML = "Memória 64gb (16x4) 3200mhz CL16";
                document.getElementById("placaDeVideo").innerHTML = "GTX 1050TI";
                document.getElementById("fonte").innerHTML = "750W 80+";
                document.getElementById("armazenamento").innerHTML = "SSD 1tb M.2 NVME + HD 7200RPM 4tb";
                document.getElementById("nota").innerHTML = "Esta configuração entregará o máximo de desempenho em atividades profissionais.";  
            }
            else if(perfil == 'profissional' && preco == 'caro' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "XPS 13 i7-1165G7 32gb RAM 1tb SSD M.2";
                document.getElementById("nota").innerHTML = "Esse é um dos melhores modelos profissionais, com altíssimo desempenho para multitarefas, tela touch-screen 4k com alta fidelidade de cores, leve e fino para ser facilmente transportado.";  
            }
            else if(perfil == 'profissional' && preco == 'barato' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "Ryzen 5 3600";
                document.getElementById("placaMae").innerHTML = "B450M";
                document.getElementById("memoria").innerHTML = "Memória 16gb (8x2) 3200mhz CL16";
                document.getElementById("placaDeVideo").innerHTML = "GT 1030";
                document.getElementById("fonte").innerHTML = "450W 80+";
                document.getElementById("armazenamento").innerHTML = "SSD 240gb + HD 7200RPM 1tb";
                document.getElementById("nota").innerHTML = "Esse modelo irá atender atividades profissionais com um desemepnho satisfatório.";  
            }
            else if(perfil == 'profissional' && preco == 'barato' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Acer Aspire 3 A315-23G Ryzen 7 3700U 8gb RAM 256GB SSD";
                document.getElementById("nota").innerHTML = "Tem um ótimo desempenho em processamento, construção simples e tela HD.";  
            }
            else if(perfil == 'profissional' && preco == 'mediano' && tipoMaquina == 'computador'){
                document.getElementById("processador").innerHTML = "Ryzen 7 3800X";
                document.getElementById("placaMae").innerHTML = "B450M";
                document.getElementById("memoria").innerHTML = "Memória 32gb (16x2) 3200mhz CL16";
                document.getElementById("placaDeVideo").innerHTML = "GT 1030";
                document.getElementById("fonte").innerHTML = "450W 80+";
                document.getElementById("armazenamento").innerHTML = "SSD 500gb M.2 NVME + HD 7200RPM 2tb";
                document.getElementById("nota").innerHTML = "Esse modelo entrega um alto desempenho para atividades que exigem muito processamento e multitarefa.";  
            }
            else if(perfil == 'profissional' && preco == 'mediano' && tipoMaquina == 'notebook'){
                document.getElementById("escolhaComputador").style.display='none';
    
                document.getElementById("notebook").innerHTML = "Dell Latitude 3410 i7-10510u 16gb RAM 256gb SSD";
                document.getElementById("nota").innerHTML = "Um modelo com ótimo desempenho, teclado iluminado, tela Full HD e boa portabilidade.";  
            }
            else{
                location.href="../html/index.html";
            }
        }
        //Máquina upgrade, diferente da máquina nova, há uma lista para o tipo de harware e uma lista para o componentem, inicialmente todos estão exibidos na tela, mas o for verifica cada peça e, se o usuário possuir uma peça melhor, ele oculta a peça em questão.
        else if(tipoUpgradeNovo == 'upgrade'){
            let tipos = ['processador', 'placaMae', 'placaDeVideo', 'memoria', 'armazenamento', 'fonte'];
    
            tipos.forEach(function(tipo){
                let listaComponentes = [];
    
                switch(tipo){
                    case 'processador':
                        listaComponentes = ['inferior','pentium', 'i3', 'i5', 'i7', 'i9','superior'];
                        break;
                    case 'placaMae':
                        listaComponentes = ['inferior','h410m', 'b560m', 'z590','superior'];
                        break;
                    case 'memoria':
                        listaComponentes = ['inferior','2gb','4gb','8gb','16gb','32gb','superior'];
                        break;
                    case 'placaDeVideo':
                        listaComponentes = ['inferior','gt1030','gtx1650','rtx2060','rtx3080','superior'];
                        break;
                    case 'armazenamento':
                        listaComponentes = ['inferior','hd500', 'hd1000', 'ssd240', 'ssd1000','superior'];
                        break;
                    case 'fonte':
                        listaComponentes = ['inferior','350w', '450w', '600w','750w','superior'];
                        break;
                }
    
                listaComponentes.forEach(function(componente){
                    let indexComponenteAtual = listaComponentes.indexOf(localStorage.getItem(tipo));
    
                    if(listaComponentes.indexOf(componente) <= indexComponenteAtual){
                        let elementoComponente = document.getElementById(componente);
                        if(elementoComponente){
                            elementoComponente.classList.add('escurecerBox');
                        }
                    }
    
                    //listaComponentes.length retorna o tamanho da lista, como a contagem começa em zero, precisamos subtrair -1 para saber o indice do último componente
                    //Se o componente for o último da lista ('superior'), ou se for o penúltimo da lista ('i9','rtx3080' etc)
                    if(indexComponenteAtual >= listaComponentes.length - 2)
                        document.getElementById(tipo).innerHTML = '<p>Você já possui o melhor componente desta categoria!</p>';
                })
            })
        }
        else{
            location.href="../html/index.html";
        }
}



