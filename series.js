const series = [
    { title: "مسلسل 1", image: "images/series1.jpg", url: "https://ok.ru/video/112233" },
    { title: "مسلسل 2", image: "images/series2.jpg", url: "https://ok.ru/video/112234" }
];

function showSeries() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    series.forEach(serie => {
        const serieElement = document.createElement("img");
        serieElement.src = serie.image;
        serieElement.alt = serie.title;
        serieElement.classList.add("film-image");
        serieElement.onclick = () => openVideoPage(serie.url);
        container.appendChild(serieElement);
    });
}
