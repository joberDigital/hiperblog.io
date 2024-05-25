const lista_cursos = [];
lista_cursos.push({
    titulo: '1️⃣PASO',
    texto: 'CORREO @📭📩📭',
    imagen: "./imagenes/diseno.png",
    enlace: './correoElectronico.html'
});
lista_cursos.push({
    titulo: '2️⃣PASO',
    texto: 'CUENTAS INSTAGRAM',
    imagen:"./imagenes/diseno2.jpg",
    enlace: './cuentasInstagram.html'
});
lista_cursos.push({
    titulo: '3️⃣PASO',
    texto: 'CREAR PERFILES INSTAGRAM',
    imagen: "./imagenes/diseno.png",
    enlace: "./perfiles.html"
});
lista_cursos.push({
    titulo: '4️⃣PASO',
    texto: 'ACTUALIZAR DATOS',
    imagen: "./imagenes/diseno2.jpg",
    enlace: 'https://wa.link/cy3vnx'
});
const tarjetas = document.createElement('div');
tarjetas.classList.add('row');
for (curso of lista_cursos) {
const tarjeta = document.createElement('div');
    const tarjeta2 = document.createElement('div');
    const boton = document.createElement('a');
    const texto = document.createElement('p');
    const titulo = document.createElement('h5');
    const imagen = document.createElement('img');
    const colspan1 = document.createElement('div');
    const colspan2 = document.createElement('div');
    const colspan3 = document.createElement('div');
    const colspan4 = document.createElement('div');
    const figure = document.createElement('div');
    const cuerpo = document.createElement('div');
    //cuerpo de tarjeta
    tarjeta.classList.add('card');
    tarjeta2.classList.add('card2');
    colspan1.classList.add('mb-3')
    colspan2.classList.add('g-0')
    colspan3.classList.add('col-md-4')
    colspan4.classList.add('col-md-8')
    cuerpo.classList.add('card-body');
    // curso info
    imagen.setAttribute('src', curso.imagen);
    imagen.classList.add('img-fluid');
    titulo.classList.add('card-title');
    titulo.innerText = curso.titulo;
    texto.classList.add('card-text');
    texto.innerText = curso.texto;
    boton.classList.add('btn');
    boton.classList.add('btn-primary');
    boton.setAttribute('href', curso.enlace);
    boton.innerText='+info';
    // agregamos elementos
    figure.appendChild(imagen)
    colspan1.appendChild(figure)
    colspan2.appendChild(tarjeta2)
    colspan1.appendChild(colspan2)
    tarjeta.appendChild(colspan1)    
    cuerpo.appendChild(titulo);
    cuerpo.appendChild(texto);
    cuerpo.appendChild(boton);
    tarjeta2.appendChild(cuerpo);
    tarjetas.appendChild(tarjeta);
}
const contenedor = document.querySelector('.container');
contenedor.appendChild(tarjetas);
let nIntervId;
nIntervId = setInterval(flashText, 800);

function flashText() {
    const bienvenida= document.getElementById('bienvenida');
bienvenida.className === "bienvenida" ? bienvenida.className = "h2" :bienvenida.className = "bienvenida";
 bienvenida.innerHTML="ENTRENAMIENTO LABORAL PARA EL PROCESO"
}

let nIntervId2;
nIntervId2 = setInterval(flashText2, 800);

function flashText2() {
    const pasos= document.getElementById('pasos');
pasos.className === "pasos" ? pasos.className = "h3" :pasos.className = "pasos";
 pasos.innerHTML="TRBAJA DESDE CASA<br>AL IR PROSPECTANDO LA EMPRESA TE FACILITARA EL MATERIAL<br>👨‍🚒👨👩‍🚒TELETRABAJADORES👨‍🚒👨👩‍🚒"
}

let nIntervId3;
nIntervId3 = setInterval(flashText3, 800);

function flashText3() {
    const pasos3= document.getElementById('pasos3');
pasos3.className === "h4" ? pasos3.className = "h5" :pasos3.className = "h4";
 pasos3.innerHTML="💰💰💰Y CUANTO COBRARÉ💰💰💰<br>¿ POR ESTE TRABAJO ?"
}
