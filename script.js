const homeFilms = [
    { title: "فيلم الخط", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
    { title: "فيلم شماريخ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" },
    { title: "فيلم كركون الشارع", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" },
    { title: "فيلم مرجان", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" }
];

// دالة لعرض الأفلام الرئيسية
function showHomeFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية
    homeFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

const series = [
    { title: "مسلسل 1", image: "images/series1.jpg", url: "https://ok.ru/video/112233" },
    { title: "مسلسل 2", image: "images/series2.jpg", url: "https://ok.ru/video/112234" }
];

// دالة لعرض المسلسلات
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

// دالة لعرض الأفلام بناءً على الفئة المحددة
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح المحتوى الحالي قبل إضافة محتوى جديد

    // تحديد الدالة المناسبة بناءً على الفئة
    switch (category) {
        case 'home':
            showHomeFilms(); // عرض الأفلام الرئيسية
            break;
        case 'arabic':
            showArabicFilms(); // عرض الأفلام العربية
            break;
        case 'foreign':
            showForeignFilms(); // عرض الأفلام الأجنبية
            break;
        case 'turkish':
            showTurkishFilms(); // عرض الأفلام التركية
            break;
        case 'indian':
            showIndianFilms(); // عرض الأفلام الهندية
            break;
        case 'asian':
            showAsianFilms(); // عرض الأفلام الآسيوية
            break;
        case 'series':
            showSeries(); // عرض المسلسلات
            break;
        default:
            console.error('فئة غير معروفة');
    }
}

// دالة لفتح صفحة الفيديو عند النقر على الفيلم
function openVideoPage(videoUrl) {
    if (videoUrl) {
        window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`; // الانتقال إلى صفحة الفيديو
    } else {
        alert("لا يوجد رابط لهذا الفيديو!"); // إذا لم يكن الرابط موجودًا
    }
}

// دالة للرجوع إلى الصفحة السابقة أو الرئيسية
function goBack() {
    if (window.history.length > 1) {
        history.back(); // العودة للصفحة السابقة
    } else {
        window.location.href = "index.html"; // العودة إلى الصفحة الرئيسية
    }
}

// تحميل الصفحة الرئيسية عند تشغيل الموقع
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // تحميل الأفلام الرئيسية عند تحميل الصفحة
});
