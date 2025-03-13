// بيانات الأفلام
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "images/1.jpg", url: "https://ok.ru/video/2950580537963" },
        { title: "فيلم عربي 2", image: "images/2.jpg", url: "https://ok.ru/video/1264989833844" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "images/3.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم أجنبي 2", image: "images/4.jpg", url: "https://ok.ru/video/12349" }
    ]

   

turkish: [
        { title: "فيلم تركي 1", image: "images/3.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم تركي 2", image: "images/4.jpg", url: "https://ok.ru/video/12349" }
    ]

indian: [
        { title: "فيلم هندي 1", image: "images/3.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم هندي 2", image: "images/4.jpg", url: "https://ok.ru/video/12349" }
    ]

asian: [
        { title: "فيلم أسيوي 1", image: "images/3.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم أسيوي 2", image: "images/4.jpg", url: "https://ok.ru/video/12349" }
    ]
 series: [
        { title: "مسلسلات  1", image: "images/3.jpg", url: "https://ok.ru/video/12348" },
        { title: " مسلسلات 2", image: "images/4.jpg", url: "https://ok.ru/video/12349" }
    ]
};

// أفلام مميزة في الصفحة الرئيسية
const featured-films = [
    { title: "فيلم مميز 1", image: "images/1.jpg", url: "https://ok.ru/videoembed/2950580537963" },
    { title: "فيلم مميز 2", image: "images/2.jpg", url: "https://ok.ru/videoembed/1264989833844" }
];

// عرض الأفلام حسب التصنيف
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = "";

    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

// عرض الأفلام المميزة في الصفحة الرئيسية
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
    window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
}

// عند تحميل الصفحة، عرض الأفلام العربية افتراضيًا والأفلام المميزة
document.addEventListener("DOMContentLoaded", () => {
    showCategory('arabic');
    showFeaturedFilms();
});
