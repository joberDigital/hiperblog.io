const lista_cursos = [];
lista_cursos.push({
  titulo: "CREAR",
  texto: "CUENTAS",
  imagen: "./imagenes/diseno.png",
  enlace: "https://www.youtube.com/embed/J3WoRPSeSEc",
});
lista_cursos.push({
  titulo: "CREAR",
  texto: "DESCRIPCION",
  imagen: "./imagenes/cafe.png",
  enlace:
    "https://play.google.com/store/apps/details?id=com.instagram.lite&pcampaignid=web_share",
});
lista_cursos.push({
  titulo: "MENU",
  texto: "PRINCIPAL",
  imagen: "./imagenes/diseno2.jpg",
  enlace: "./index.html",
});

const tarjetas = document.createElement("div");
tarjetas.classList.add("row");
for (curso of lista_cursos) {
  const tarjeta = document.createElement("div");
  const tarjeta2 = document.createElement("div");
  const boton = document.createElement("a");
  const texto = document.createElement("p");
  const titulo = document.createElement("h5");
  const imagen = document.createElement("img");
  const colspan1 = document.createElement("div");
  const colspan2 = document.createElement("div");
  const colspan3 = document.createElement("div");
  const colspan4 = document.createElement("div");
  const figure = document.createElement("div");
  const cuerpo = document.createElement("div");

  //cuerpo de tarjeta
  tarjeta.classList.add("card");
  tarjeta2.classList.add("card2");
  colspan1.classList.add("mb-3");
  colspan2.classList.add("g-0");
  colspan3.classList.add("col-md-4");
  colspan4.classList.add("col-md-8");
  cuerpo.classList.add("card-body");
  // curso info
  imagen.setAttribute("src", curso.imagen);
  imagen.classList.add("img-fluid");
  titulo.classList.add("card-title");

  titulo.innerText = curso.titulo;
  texto.classList.add("card-text");
  texto.innerText = curso.texto;
  boton.classList.add("btn");
  boton.classList.add("btn-primary");
  boton.setAttribute("href", curso.enlace);
  boton.innerText = "+info";
  // agregamos elementos
  figure.appendChild(imagen);
  colspan1.appendChild(figure);
  colspan2.appendChild(tarjeta2);
  colspan1.appendChild(colspan2);
  tarjeta.appendChild(colspan1);
  cuerpo.appendChild(titulo);
  cuerpo.appendChild(texto);
  cuerpo.appendChild(boton);
  tarjeta2.appendChild(cuerpo);
  tarjetas.appendChild(tarjeta);
}
const contenedor = document.querySelector(".container");
contenedor.appendChild(tarjetas);
