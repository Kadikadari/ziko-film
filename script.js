// بيانات الأفلام (روابط وهمية - يمكنك استبدالها بروابط حقيقية من ok.ru)
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "path/to/arabic1.jpg", url: "https://ok.ru/video/12345" },
        { title: "فيلم عربي 2", image: "path/to/arabic2.jpg", url: "https://ok.ru/video/12346" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "path/to/foreign1.jpg", url: "https://ok.ru/video/12347" },
        { title: "فيلم أجنبي 2", image: "path/to/foreign2.jpg", url: "https://ok.ru/video/12348" }
    ],
    turkish: [
        { title: "فيلم تركي 1", image: "path/to/turkish1.jpg", url: "https://ok.ru/video/12349" },
        { title: "فيلم تركي 2", image: "path/to/turkish2.jpg", url: "https://ok.ru/video/12350" }
    ],
    indian: [
        { title: "فيلم هندي 1", image: "path/to/indian1.jpg", url: "https://ok.ru/video/12351" },
        { title: "فيلم هندي 2", image: "path/to/indian2.jpg", url: "https://ok.ru/video/12352" }
    ],
    asian: [
        { title: "فيلم أسيوي 1", image: "path/to/asian1.jpg", url: "https://ok.ru/video/12353" },
        { title: "فيلم أسيوي 2", image: "path/to/asian2.jpg", url: "https://ok.ru/video/12354" }
    ],
    series: [
        { title: "مسلسل 1", image: "path/to/series1.jpg", url: "https://ok.ru/video/12355" },
        { title: "مسلسل 2", image: "path/to/series2.jpg", url: "https://ok.ru/video/12356" }
    ]
};

// دالة لعرض الأفلام حسب التصنيف
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح المحتوى الحالي

    // إضافة الأفلام حسب التصنيف
    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.onclick = () => openFullScreen(film); // عند الضغط على الصورة، يتم تشغيل الفيديو في شاشة كاملة
        container.appendChild(filmElement);
    });
}

// دالة لفتح الفيديو في شاشة كاملة
function openFullScreen(film) {
    const videoPlayer = document.getElementById("video-player");
    const videoElement = document.getElementById("video");
    const videoSource = document.getElementById("video-source");

    // تحديد مصدر الفيديو
    videoSource.src = film.url;
    videoElement.load(); // تحميل الفيديو

    videoPlayer.style.display = "flex"; // إظهار الفيديو في شاشة كاملة
}

// دالة لإغلاق الفيديو
function closeVideo() {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.style.display = "none"; // إخفاء الفيديو
}
window.onpopstate = function () {
    // عند الضغط على زر الرجوع، العودة للصفحة السابقة دون الخروج من الموقع
    history.back();
};
