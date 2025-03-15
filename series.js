const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" }
];

function showSeriesFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    series.forEach(serie => {
        const serieElement = document.createElement("img");
        serieElement.src = serie.image;
        serieElement.alt = serie.title;
        serieElement.classList.add("film-image");

        // إضافة رابط للتوجيه إلى ملف HTML عند الضغط على الصورة
        const link = document.createElement("a");
        link.href = serie.url;  // توجيه المستخدم إلى صفحة المسلسل
        link.target = "_self";   // فتح الرابط في نفس النافذة
        link.appendChild(serieElement);
        
        container.appendChild(link);
    });
}

// استدعاء الدالة لعرض المسلسلات
showSeriesFilms();
