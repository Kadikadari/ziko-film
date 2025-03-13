// بيانات الأفلام
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
        { title: "فيلم عربي 2", image: "images/xut.jpg", url: "https://ok.ru/videoembed/977388243572" },
        { title: "فيلم عربي 3", image: "images/xut.jpg", url: "https://ok.ru/videoembed/979790137972" },
        { title: "فيلم عربي 4", image: "images/xut.jpg", url: "https://ok.ru/videoembed/980295092852" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "images/xut.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "فيلم أجنبي 2", image: "images/xut.jpg", url: "https://ok.ru/videoembed/1264989833844" }
    ],
    turkish: [
        { title: "فيلم تركي 1", image: "images/xut.jpg", url: "https://ok.ru/video/12348" },
        { title: "فيلم تركي 2", image: "images/xut.jpg", url: "https://ok.ru/video/12349" }
    ],
    indian: [
        { title: "فيلم هندي 1", image: "images/xut.jpg", url: "https://ok.ru/video/22348" },
        { title: "فيلم هندي 2", image: "images/xut.jpg", url: "https://ok.ru/video/22349" }
    ],
    asian: [
        { title: "فيلم أسيوي 1", image: "images/xut.jpg", url: "https://ok.ru/video/32348" },
        { title: "فيلم أسيوي 2", image: "images/xut.jpg", url: "https://ok.ru/video/32349" }
    ],
    series: [
        { title: "مسلسل 1", image: "images/xut.jpg", url: "series/series1.html" },
        { title: "مسلسل 2", image: "images/xut.jpg", url: "series/series2.html" }
    ]
};

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
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

// عرض الصفحة الرئيسية
function showHomePage() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";

    const featuredFilms = [
        { title: "فيلم مميز 1", image: "images/xut.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "فيلم مميز 2", image: "images/xut.jpg", url: "https://ok.ru/videoembed/1264989833844" }
    ];

    featuredFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}

// فتح صفحة تشغيل الفيديو أو المسلسل
function openVideoPage(url) {
    window.location.href = url;
}

// الرجوع للصفحة السابقة
function goBack() {
    if (document.referrer.includes(window.location.origin)) {
        history.back(); // الرجوع إلى الصفحة السابقة داخل الموقع
    } else {
        window.location.href = "index.html"; // العودة إلى الصفحة الرئيسية إذا لم يكن هناك سجل سابق
    }
}

// عند تحميل الصفحة، عرض الأفلام العربية افتراضيًا
document.addEventListener("DOMContentLoaded", () => {
    showHomePage(); // عرض الأفلام المميزة على الصفحة الرئيسية
});
