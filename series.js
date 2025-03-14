const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" }
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

 // عند النقر على الصورة، يتم فتح الفيديو في صفحة جديدة
        filmElement.onclick = () => openVideoPage(film.url);

// استدعاء الدالة لعرض المسلسلات عند تحميل الصفحة
showSeries();

