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
        { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "series1.html" }, 
        { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" } 
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

// عرض الأفلام حسب التصنيف في الصفحة الرئيسية
function showHomePage() {
    const container = document.getElementById("home-films");
    container.innerHTML = "";

    // عرض جميع التصنيفات في الصفحة الرئيسية
    Object.keys(films).forEach(category => {
        const categoryTitle = document.createElement("h2");
        categoryTitle.textContent = getCategoryTitle(category);
        container.appendChild(categoryTitle);

        films[category].forEach(film => {
            const filmElement = document.createElement("img");
            filmElement.src = film.image;
            filmElement.alt = film.title;
            filmElement.classList.add("film-image");
            filmElement.onclick = () => openVideoPage(film.url);
            container.appendChild(filmElement);
        });
    });
}

// الحصول على اسم التصنيف المناسب
function getCategoryTitle(category) {
    switch (category) {
        case 'arabic': return 'أفلام عربي';
        case 'foreign': return 'أفلام أجنبي';
        case 'turkish': return 'أفلام تركي';
        case 'indian': return 'أفلام هندي';
        case 'asian': return 'أفلام أسيوي';
        case 'series': return 'مسلسلات';
        default: return '';
    }
}

// فتح صفحة تشغيل الفيديو
function openVideoPage(videoUrl) {
    if (videoUrl) {
        window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
    } else {
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}

// عند تحميل الصفحة، عرض الرئيسية مباشرة
document.addEventListener("DOMContentLoaded", () => {
    showHomePage(); // عرض الأفلام عند تحميل الصفحة
});
