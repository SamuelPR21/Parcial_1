//Abre Noticia Econo
function Noti_Econommia() {
    window.open('https://www.elespectador.com/economia/economia-colombiana-dio-senales-de-recuperacion-a-comienzos-de-ano-segun-el-ise/', '_blank');
}

//Abre Noti poli
function Noti_Politica() {
    window.open('https://www.elespectador.com/politica/asi-son-los-8-puntos-que-propone-petro-para-proceso-constituyente-politica-monetaria-paz-y-cambio-climatico-noticias/', '_blank');
}

//Abre noti deportes
function Noti_deportes() {
    window.open('https://www.eltiempo.com/deportes/otros-deportes/programacion-deportiva-para-el-lunes-18-de-marzo-3325420', '_blank');
}

//Mostarr lista
function mostrarLista(elemento) {
    var lista = elemento.nextElementSibling;
    lista.style.display = lista.style.display === 'none' ? 'block' : 'none';
}
