// بيانات الأفلام
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "images/1.jpg", url: "https://ok.ru/video/2950580537963" },
        { title: "فيلم عربي 2", image: "images/2.jpg", url: "https://ok.ru/video/1264989833844" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "images/3.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "فيلم أجنبي 2", image: "images/4.jpg", url: "https://ok.ru/videoembed/1264989833844" }
    ],
    turkish: [
        { title: "فيلم تركي 1", image: "images/5.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم تركي 2", image: "images/6.jpg", url: "https://ok.ru/video/12349" }
    ],
    indian: [
        { title: "فيلم هندي 1", image: "images/7.jpg", url: "https://ok.ru/video/22348" },
        { title: "فيلم هندي 2", image: "images/8.jpg", url: "https://ok.ru/video/22349" }
    ],
    asian: [
        { title: "فيلم أسيوي 1", image: "images/9.jpg", url: "https://ok.ru/video/32348" },
        { title: "فيلم أسيوي 2", image: "images/10.jpg", url: "https://ok.ru/video/32349" }
    ],
    series: [
        { title: "مسلسل 1", image: "images/11.jpg", url: "https://ok.ru/video/42348" },
        { title: "مسلسل 2", image: "images/12.jpg", url: "https://ok.ru/video/42349" }
    ]
};

// أفلام مميزة في الصفحة الرئيسية
const featuredFilms = [
    { title: "فيلم مميز 1", image: "images/13.jpg", url: "https://ok.ru/videoembed/2950580537963" },
    { title: "فيلم مميز 2", image: "images/14.jpg", url: "https://ok.ru/videoembed/1264989833844" }
];
function goBack() {
    if (document.referrer.includes(window.location.origin)) {
        history.back(); // الرجوع إلى الصفحة السابقة داخل الموقع
    } else {
        window.location.href = "index.html"; // العودة إلى الصفحة الرئيسية إذا لم يكن هناك سجل سابق
    }
}



// عرض الأفلام حسب التصنيف
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = "";

    if (!films[category]) {
        console.error("التصنيف غير موجود:", category);
        return;
    }

    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

// عرض الأفلام المميزة
function showFeaturedFilms() {
    const container = document.getElementById("featured-films");
    container.innerHTML = "";

    featuredFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

// فتح صفحة تشغيل الفيديو
function openVideoPage(videoUrl) {
    if (videoUrl) {
        window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
    } else {
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}

// عند تحميل الصفحة، عرض الأفلام العربية افتراضيًا والأفلام المميزة
document.addEventListener("DOMContentLoaded", () => {
    showCategory('arabic');
    showFeaturedFilms();
});
