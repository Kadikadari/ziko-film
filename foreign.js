// foreign.js
const foreignFilms = [
    { title: "blu", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" },
    { title: "pure lucke", image: "images/pure.jpg", url: "https://ok.ru/videoembed/6106193922801" },
    { title: "shawshank", image: "images/shawshenk.jpg", url: "https://www.ok.ru/videoembed/8281347918517" },
    // المزيد من الأفلام
];

function showForeignFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";
    foreignFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
