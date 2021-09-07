const proyectos = [
    {
        img: "./imagenes/clear-sky.png",
        titulo: "Proyecto: Aplicación de clima",
        linkLive: "https://delfigica.github.io/Clear-Sky/",
        linkGit: "https://github.com/delfigica/Clear-Sky",
        descripción: "Este proyecto es una aplicación de Clima con un API request de la api 'Open Weather Map'. Trabajo desarrollado con HTML, CSS y con JS con el framework ANGULAR"
    },    
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Aplicación de notas",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es un CRUD, una aplicación de notas que extrae información de un backend sencillo. Trabajo desarrollado con HTML, CSS y con JS con el framework ANGULAR"
    },
    {
        img: "./imagenes/presupuesto.png",
        titulo: "Proyecto: Aplicación de presupuesto",
        linkLive: "https://delfigica.github.io/Presupuesto/",
        linkGit: "https://github.com/delfigica/Presupuesto",
        descripción: "Este proyecto es una aplicación que recauda datos sobre ingresos y egresos del usuario y le debuelve su presupuesto. Trabajo desarrollado con HTML, CSS y con JS con el framework ANGULAR"
    },
    {
        img: "./imagenes/horacio-burgos.png",
        titulo: "Proyecto: Página Web para Cantante",
        linkLive: "https://delfigica.github.io/Horacio-Burgos-musica/",
        linkGit: "https://github.com/delfigica/Horacio-Burgos-musica",
        descripción: "Este proyecto fue desarrollada para el músico Horacio Burgos como página de presentación que incluye su discografia, historia y algunas de las entrevistas que dió a medios. Trabajo desarrollado con HTML, CSS y BOOTSTRAP"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Página tributo Dr. Norman Borlaug",
        linkLive: "https://delfigica.github.io/ffc-project1/",
        linkGit: "https://github.com/delfigica/ffc-project1",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es una página tributo para el Dr. Norman Borlaug. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/form.png",
        titulo: "Proyecto: Formulario",
        linkLive: "https://delfigica.github.io/ffc-project2/",
        linkGit: "https://github.com/delfigica/ffc-project2",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es un formulario. Trabajo desarrollado con HTML y CSS"
    }
    
]
for (i = 0; i < proyectos.length; i++){
    let item = document.createElement("div")
    item.innerHTML =
    `<div class="proyect-container">
    <div class="img-container">
    <img class="img-proyecto" src="${proyectos[i].img}">
    </div>
    <div class="texto-proyecto">
    <h2 class="titulo-proyecto">${proyectos[i].titulo}</h2>
    <p class="descripcion-proyecto">${proyectos[i].descripción}</p>
    <div class="btns-proyecto">
    <button class="btn-proyecto"><a href="${proyectos[i].linkLive}" target="_blank" class="a-btn-proyecto"><i class="fas fa-wifi"></i></a></button>
    <button class="btn-proyecto"><a href="${proyectos[i].linkGit}" target="_blank" class="a-btn-proyecto"><i class="fab fa-github"></i></a></button></div>
    </div>
    </div>`


    document.getElementById("proyectos").appendChild(item)
}

function showMenu() {
    const navResponsive = document.querySelector(".group-a-nav-responsive");
    navResponsive.classList.toggle("d-none")
}
