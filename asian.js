const asianFilms = [
    { title: "فيلم آسيوي 1", image: "images/asian1.jpg", url: "https://ok.ru/video/112233" },
    { title: "فيلم آسيوي 2", image: "images/asian2.jpg", url: "https://ok.ru/video/112234" }
];

function showAsianFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    asianFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
