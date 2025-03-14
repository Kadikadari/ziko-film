const indianFilms = [
    { title: "فيلم هندي 1", image: "images/indian1.jpg", url: "https://ok.ru/video/67890" },
    { title: "فيلم هندي 2", image: "images/indian2.jpg", url: "https://ok.ru/video/67891" }
];

function showIndianFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    indianFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
