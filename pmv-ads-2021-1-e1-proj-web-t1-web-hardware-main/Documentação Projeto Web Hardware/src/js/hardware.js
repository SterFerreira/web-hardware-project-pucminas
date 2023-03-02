//Cada card na página de hardware abre uma nova janela e carrega um html correspondente
document.querySelector('#hardwarePlacaMae').onclick = function(){
    window.open('../html/HardwarePaginas/placaMae.html', 'PlacaMae', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareResfriamento').onclick = function(){
    window.open('../html/HardwarePaginas/resfriamente.html', 'Resfriamento', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareProcessador').onclick = function(){
    window.open('../html/HardwarePaginas/processador.html', 'processador', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareArmazenamento').onclick = function(){
    window.open('../html/HardwarePaginas/hardDrive.html', 'HardDrive', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwarePlacaDeVideo').onclick = function(){
    window.open('../html/HardwarePaginas/videoCard.html', 'VideoCard', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareMemoria').onclick = function(){
    window.open('../html/HardwarePaginas/memoria.html', 'Memoria', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareFonte').onclick = function(){
    window.open('../html/HardwarePaginas/fonte.html', 'Fonte', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwareMonitor').onclick = function(){
    window.open('../html/HardwarePaginas/monitor.html', 'Monitor', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}

document.querySelector('#hardwarePerifericos').onclick = function(){
    window.open('../html/HardwarePaginas/perifericos.html', 'Perifericos', 'location=no,menubar=no,toolbar=no,heigth=550,width=450');
}