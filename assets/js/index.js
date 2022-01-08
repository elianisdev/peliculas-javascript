
const peliculas = [
    {
        title: 'Gagarine',
        description: 'Yuri, de 16 años, ha pasado toda su vida en las Torres Gagarin, un proyecto de viviendas situado en las afueras de París y sueña con ser astronauta. Cuando se plantea la demolición de las Torres, Yuri se une a la resistencia. Con sus amigos Diana y Houssam, se embarca en la misión por salvar su hogar',
        image: 'assets/images/movies/gagarine.jpg',
        duration: '60 min'
    },
    {
        title: 'La Dama y el Vagabundo',
        description: 'La historia de amor entre una mimada Cocker Spaniel llamada Reina y un cruzado callejero llamado Golfo. Reina se encuentra en la calle después de que sus dueños tengan un bebé y es salvada de la perrera por Golfo, quien trata de mostrarle que viva su vida libre y sin collar.',
        image: 'assets/images/movies/LaDamayVagabundo.jpg',
        duration: '50 min'
    },
    {
        title: 'Zootopia',
        description: 'La moderna metrópoli mamífera de Zootrópolis es una ciudad absolutamente única. Está compuesta de barrios con diferentes hábitats como la lujosa Sahara Square y la gélida Tundratown. Es un crisol donde los animales de cada entorno conviven, un lugar donde no importa lo que seas.',
        image: 'assets/images/movies/zootopia.jpg',
        duration: '60 min'
    },
    {
        title: 'El Refugio',
        description: '¿Qué sucedería si un temporal de nieve deja aisladas a un grupo de personas en un hotel de montaña durante un fin de semana navideño? Pues que, para bien o para mal, la locura está servida.',
        image: 'assets/images/movies/ElRefugio.jpg',
        duration: '180 min'
    },
    {
        title: 'Unas Navidades junto a ti',
        description: 'Con las fechas navideñas a la vuelta de la esquina, Frank le pide a su hija que lo acompañe en un viaje para reencontrarse con un amor de la infancia.',
        image: 'assets/images/movies/Unasnavidadesjuntoati.jpg',
        duration: '80 min'
    },
    {
        title: 'Lejos del arbol',
        description: 'En una playa idílica en el noroeste del Pacífico, la curiosidad se apodera de un mapache joven cuyo padre frustrado intenta mantenerlos a ambos a salvo.',
        image: 'assets/images/movies/LejosdelArbol.jpg',
        duration: '40 min'
    },
    {
        title: 'Spider-Man: Sin camino a casa',
        description: 'Peter Parker está desenmascarado y ya no puede separar su vida normal de las altas apuestas de ser un superhéroe. Cuando le pide ayuda al Doctor Strange, lo que está en juego se vuelve aún más peligroso, lo que lo obliga a descubrir lo que realmente significa ser Spider-Man.',
        image: 'assets/images/movies/spiderman.jpg',
        duration: '210 min'

    },
    {
        title: 'Encanto',
        description: 'Encanto, te traslada a Colombia, donde una mágica familia vive en una casa llena de magia.',
        image: 'assets/images/movies/Encanto.jpg',
        duration: '160 min'
    },
];

const container = document.getElementById('container');

// constante es un dato inmodificable
// variable es un dato modificable
let peliculasHtml = document.createElement('div'); // tipo de dato es un nodo html
peliculasHtml.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3";

let listaPeliculas = '';
peliculas.forEach((item, index) => {
    // += esto lo uso para concatenar una variable
    // `` estas comillas leen mas facilmente el hatml dentro de un archivo JS
    listaPeliculas += `<div class="col-2">
              <div class="card shadow-sm">
                <img alt="${item.title}" src="${item.image}" class="imagenPelicula"/>
                <div class="card-body">
                  <p class="card-text"><strong>${item.title}</strong></p>
                  <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${item.duration}</small>
                  </div>
                </div>
              </div>
            </div>`;
});

peliculasHtml.innerHTML = listaPeliculas;
container.appendChild(peliculasHtml);
