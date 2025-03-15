const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "ghowar.html" }
];

function showSeriesFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    series.forEach(serie => {
        const serieElement = document.createElement("img");
        serieElement.src = serie.image;
        serieElement.alt = serie.title;
        serieElement.classList.add("film-image");

        // عند الضغط على الصورة يتم توجيه المستخدم إلى صفحة المسلسل
        serieElement.onclick = function() {
            window.location.href = serie.url; // فتح صفحة المسلسل في نفس النافذة
        };
        
        container.appendChild(serieElement);
    });
}

// استدعاء الدالة لعرض المسلسلات
showSeriesFilms();
