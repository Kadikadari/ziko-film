const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" }
];

function showSeriesFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    seriesFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}


// استدعاء الدالة لعرض الأفلام
showAsianFilms();
