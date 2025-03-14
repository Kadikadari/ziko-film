const turkishFilms = [
    { title: "فيلم تركي 1", image: "images/xut.jpg", url: "https://ok.ru/video/12348" },
    { title: "فيلم تركي 2", image: "images/xut.jpg", url: "https://ok.ru/video/12349" }
];

// دالة لعرض الأفلام التركية
function showTurkishFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية

    turkishFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image; // تعيين الصورة
        filmElement.alt = film.title; // تعيين النص البديل
        filmElement.classList.add("film-image"); // إضافة صنف CSS لتنسيق الصور

        // عند النقر على الصورة، يتم فتح الفيديو في صفحة جديدة
        filmElement.onclick = () => openVideoPage(film.url);

        // إضافة الصورة إلى الحاوية
        container.appendChild(filmElement);
    });
}

// دالة لفتح صفحة الفيديو
function openVideoPage(url) {
    window.location.href = `player.html?url=${encodeURIComponent(url)}`;
}
