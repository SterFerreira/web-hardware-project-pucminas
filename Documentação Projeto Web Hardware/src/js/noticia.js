let time = 2000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;


    function nextImage() {

        // currentimage = removeu a class selected do currentimageindex que é 0. Ou seja, a imagem 0 teve a class selected removida.

        images[currentImageIndex].classList.remove("selected")

        currentImageIndex++

        // se meu currentindex for maior ou = 0, iremos resetar, deixando a posição dele pra 0. Para não interromper  o loop.
        if(currentImageIndex >= max)
        currentImageIndex = 0

        // adicionou a class selected.
        images[currentImageIndex].classList.add("selected")
    }
    
    // set interval = executa uma função a cada momento, qual momento? a cada time(foi definido a cima)
    function start() {
        setInterval(() => {
    nextImage()
        }, time);

    }


    window.addEventListener("load", start)