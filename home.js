// مصفوفة الأفلام الخاصة بالصفحة الرئيسية
const homeFilms = [
    { title: "فيلم الخط", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
    { title: "فيلم شماريخ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" },
    { title: "فيلم كركون الشارع", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" },
    { title: "فيلم مرجان", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" }
];

// دالة لعرض الأفلام الرئيسية
function showHomeFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية قبل إضافة الأفلام الجديدة

    homeFilms.forEach(film => {
        // إنشاء عنصر صورة للفيلم
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        
        // عند النقر على الفيلم، فتح الرابط في صفحة جديدة
        filmElement.onclick = () => openVideoPage(film.url);

        // إضافة الفيلم إلى الحاوية
        container.appendChild(filmElement);
    });
}

// دالة لفتح الفيديو عند النقر عليه
function openVideoPage(videoUrl) {
    if (videoUrl) {
        // الانتقال إلى صفحة الفيديو
        window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
    } else {
        // إذا لم يكن هناك رابط، عرض تنبيه
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}
