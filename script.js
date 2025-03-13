// بيانات الأفلام (روابط وهمية - يمكنك استبدالها بروابط حقيقية من ok.ru)
const films = {
    arabic: [
        { title: "فيلم عربي 1", image: "https://via.placeholder.com/150x220.png?text=Arabic+1", url: "https://ok.ru/video/12345" },
        { title: "فيلم عربي 2", image: "https://via.placeholder.com/150x220.png?text=Arabic+2", url: "https://ok.ru/video/12346" },
        { title: "فيلم عربي 3", image: "https://via.placeholder.com/150x220.png?text=Arabic+3", url: "https://ok.ru/video/12347" }
    ],
    foreign: [
        { title: "فيلم أجنبي 1", image: "https://via.placeholder.com/150x220.png?text=Foreign+1", url: "https://ok.ru/video/12348" },
        { title: "فيلم أجنبي 2", image: "https://via.placeholder.com/150x220.png?text=Foreign+2", url: "https://ok.ru/video/12349" },
        { title: "فيلم أجنبي 3", image: "https://via.placeholder.com/150x220.png?text=Foreign+3", url: "https://ok.ru/video/12350" }
    ],
    turkish: [
        { title: "فيلم تركي 1", image: "https://via.placeholder.com/150x220.png?text=Turkish+1", url: "https://ok.ru/video/12351" },
        { title: "فيلم تركي 2", image: "https://via.placeholder.com/150x220.png?text=Turkish+2", url: "https://ok.ru/video/12352" },
        { title: "فيلم تركي 3", image: "https://via.placeholder.com/150x220.png?text=Turkish+3", url: "https://ok.ru/video/12353" }
    ],
    indian: [
        { title: "فيلم هندي 1", image: "https://via.placeholder.com/150x220.png?text=Indian+1", url: "https://ok.ru/video/12354" },
        { title: "فيلم هندي 2", image: "https://via.placeholder.com/150x220.png?text=Indian+2", url: "https://ok.ru/video/12355" },
        { title: "فيلم هندي 3", image: "https://via.placeholder.com/150x220.png?text=Indian+3", url: "https://ok.ru/video/12356" }
    ],
    asian: [
        { title: "فيلم أسيوي 1", image: "https://via.placeholder.com/150x220.png?text=Asian+1", url: "https://ok.ru/video/12357" },
        { title: "فيلم أسيوي 2", image: "https://via.placeholder.com/150x220.png?text=Asian+2", url: "https://ok.ru/video/12358" },
        { title: "فيلم أسيوي 3", image: "https://via.placeholder.com/150x220.png?text=Asian+3", url: "https://ok.ru/video/12359" }
    ],
    series: [
        { title: "مسلسل 1", image: "https://via.placeholder.com/150x220.png?text=Series+1", url: "https://ok.ru/video/12360" },
        { title: "مسلسل 2", image: "https://via.placeholder.com/150x220.png?text=Series+2", url: "https://ok.ru/video/12361" },
        { title: "مسلسل 3", image: "https://via.placeholder.com/150x220.png?text=Series+3", url: "https://ok.ru/video/12362" }
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

// دالة لفتح الفيديو في شاشة كاملة عبر `iframe`
function openFullScreen(film) {
    const videoPlayer = document.getElementById("video-player");
    const iframe = document.createElement("iframe");

    // تحديد رابط الفيديو من `ok.ru`
    iframe.src = `https://ok.ru/videoembed/${film.url.split('/').pop()}`;
    iframe.style.width = "100%";
    iframe.style.height = "100vh";
    iframe.style.border = "none";

    // إضافة الـ `iframe` إلى الشاشة
    videoPlayer.innerHTML = ""; // تنظيف محتوى الفيديو
    videoPlayer.appendChild(iframe);

    videoPlayer.style.display = "flex"; // إظهار الفيديو في شاشة كاملة
}

// دالة لإغلاق الفيديو
function closeVideo() {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.style.display = "none"; // إخفاء الفيديو
}

// تحميل الأفلام عند تحميل الصفحة
window.onload = function() {
    showCategory("arabic"); // عرض الأفلام العربية بشكل افتراضي عند تحميل الصفحة
};
