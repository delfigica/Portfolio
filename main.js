const proyectos = [
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Página tributo Dr. Norman Borlaug",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es una página tributo para el Dr. Norman Borlaug. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Formulario",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es un formulario. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Tienda de trompetas",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es una página de presentación de una tienda de Trompetas. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Página documentación",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es una página con documentación sobre JavaScript. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Página portafolio",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es parte de los proyectos de certificación de Free Code Camp de Dessarrollo Web Responsive. En este caso, es mi Portafolio con proyectos de FreeCodeCamp. Trabajo desarrollado con HTML y CSS"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Página Web para Cantante",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto fue desarrollada para el músico Horacio Burgos como página de presentación que incluye su discografia, historia y algunas de las entrevistas que dió a medios. Trabajo desarrollado con HTML, CSS y BOOTSTRAP"
    },
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Aplicación de clima",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es una aplicación de Clima con un API request de la api 'Open Weather Map'. Trabajo desarrollado con HTML, CSS y con JS con el framework ANGULAR"
    },    
    {
        img: "./imagenes/dr. Norman Borlaug.jpg",
        titulo: "Proyecto: Aplicación de notas",
        linkLive: "#",
        linkGit: "#",
        descripción: "Este proyecto es un CRUD, una aplicación de notas que extrae información de un backend sencillo. Trabajo desarrollado con HTML, CSS y con JS con el framework ANGULAR"
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
    <button class="btn-proyecto"><a href="#" class="a-btn-proyecto">Line</a></button>
    <button class="btn-proyecto"><a href="#" class="a-btn-proyecto">Git</a></button></div>
    </div>
    </div>`


    document.getElementById("proyectos").appendChild(item)
}

const showMenu = () => {
    const navResponsive = document.querySelector(".ul-nav-responsive");
    navResponsive.classList.toggle("d-none")
}