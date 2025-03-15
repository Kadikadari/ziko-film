const turkishFilms = [
    { title: "فيلم تركي 1", image: "images/xut.jpg", url: "https://www.ok.ru/videoembed/1116129790703" },
    { title: "فيلم تركي 2", image: "images/xut.jpg", url: "https://ok.ru/video/12349" }
];

function showTurkishFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    turkishFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
