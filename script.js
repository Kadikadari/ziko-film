// بيانات الأفلام (روابط وصور وهمية - استبدلها بروابط حقيقية)
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "https://www2.0zz0.com/2025/03/13/01/962661120.jpg", url: "https://ok.ru/videoembed/1264989833844" },
        { title: "فيلم عربي 2", image: "https://www2.0zz0.com/2025/03/13/01/681225901.jpg", url: "https://ok.ru/videoembed/2950580537963" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "images/foreign1.jpg", url: "https://ok.ru/video/12347" },
        { title: "فيلم أجنبي 2", image: "images/foreign2.jpg", url: "https://ok.ru/video/12348" }
    ],
    turkish: [
        { title: "فيلم تركي 1", image: "images/turkish1.jpg", url: "https://ok.ru/video/12349" },
        { title: "فيلم تركي 2", image: "images/turkish2.jpg", url: "https://ok.ru/video/12350" }
    ],
    indian: [
        { title: "فيلم هندي 1", image: "images/indian1.jpg", url: "https://ok.ru/video/12351" },
        { title: "فيلم هندي 2", image: "images/indian2.jpg", url: "https://ok.ru/video/12352" }
    ],
    asian: [
        { title: "فيلم أسيوي 1", image: "images/asian1.jpg", url: "https://ok.ru/video/12353" },
        { title: "فيلم أسيوي 2", image: "images/asian2.jpg", url: "https://ok.ru/video/12354" }
    ],
    series: [
        { title: "مسلسل 1", image: "images/series1.jpg", url: "https://ok.ru/video/12355" },
        { title: "مسلسل 2", image: "images/series2.jpg", url: "https://ok.ru/video/12356" }
    ]
};

// دالة لعرض الأفلام حسب الفئة المختارة
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح المحتوى القديم

    // إضافة الأفلام الخاصة بالفئة المختارة
    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.onclick = () => openVideoPage(film.url); // عند الضغط على الصورة، يفتح الفيديو في صفحة جديدة
        container.appendChild(filmElement);
    });
}

// دالة لفتح الفيديو في صفحة جديدة (video.html)
function openVideoPage(videoUrl) {
    window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
}

// عند تحميل الصفحة، عرض الأفلام العربية تلقائيًا
document.addEventListener("DOMContentLoaded", function () {
    showCategory('arabic');
});

// تحسين زر الرجوع ليعود خطوة واحدة للخلف داخل الموقع
window.onpopstate = function () {
    history.back();
};
