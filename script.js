// بيانات الأفلام 
const films = { 
    arabic-film.html: [ 
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
        { title: "مسلسل 1", image: "images/o3407508_16666602.jpg", url: "series1.html" }, 
        { title: "مسلسل 2", image: "images/xut.jpg", url: "https://ok.ru/video/42349" } 
    ] 
}; 

// أفلام مميزة في الصفحة الرئيسية 
const featuredFilms = [ 
    { title: "فيلم مميز 1", image: "images/xut.jpg", url: "https://vkvideo.ru/video_ext.php?oid=791768803&id=456244371&hash=114aa39ab436b197" }, 
    { title: "فيلم مميز 2", image: "images/xut.jpg", url: "https://ok.ru/videoembed/1264989833844" } 
]; 

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

// عرض الأفلام المميزة في الصفحة الرئيسية
function showHomePage() {
    const container = document.getElementById("home-films");
    container.innerHTML = "";

    featuredFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
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

// عند تحميل الصفحة، عرض الأفلام المميزة في الصفحة الرئيسية
document.addEventListener("DOMContentLoaded", () => {
    showHomePage(); // عرض الأفلام المميزة عند تحميل الصفحة
});
