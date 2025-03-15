const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "عوده غوار.html" },
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "نورخالد.html" }
];

function showSeriesFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية

    series.forEach(serie => {
        const link = document.createElement("a");
        link.href = serie.url;  // ربط الرابط لصفحة المسلسل

        const serieElement = document.createElement("img");
        serieElement.src = serie.image;
        serieElement.alt = serie.title;
        serieElement.classList.add("film-image");

        // إضافة الصورة إلى الرابط
        link.appendChild(serieElement);

        // إضافة الرابط (وبداخله الصورة) إلى الحاوية
        container.appendChild(link);
    });
}

// استدعاء الدالة لعرض المسلسلات
document.addEventListener("DOMContentLoaded", showSeriesFilms);
