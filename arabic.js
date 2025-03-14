// مصفوفة الأفلام العربية
const arabicFilms = [
    { title: "فيلم الخط", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
    { title: "فيلم شماريخ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" },
    { title: "فيلم كركون الشارع", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" },
    { title: "فيلم مرجان", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" }
];

// دالة لعرض الأفلام العربية
function showArabicFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية قبل إضافة الأفلام الجديدة

    arabicFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image; // تعيين مصدر الصورة
        filmElement.alt = film.title; // تعيين النص البديل للصورة
        filmElement.classList.add("film-image"); // إضافة صنف CSS لتنسيق الصورة

        // عند النقر على الصورة، يتم فتح الفيديو في صفحة جديدة
        filmElement.onclick = () => openVideoPage(film.url);

        // إضافة الصورة إلى الحاوية
        container.appendChild(filmElement);
    });
}

// دالة لفتح صفحة الفيديو
function openVideoPage(url) {
    if (url) {
        // الانتقال إلى صفحة الفيديو
        window.location.href = `player.html?url=${encodeURIComponent(url)}`;
    } else {
        // إذا لم يكن هناك رابط، عرض تنبيه
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}
