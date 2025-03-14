// home.js
const homeFilms = [
    { title: "فيلم الخط", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
    { title: "فيلم شماريخ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" },
    { title: "فيلم كركون الشارع", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" },
    { title: "فيلم مرجان", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" }
];

function showArabicFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";
    arabicFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
