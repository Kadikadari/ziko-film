// script.js

function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = "";

    switch (category) {
        case 'arabic':
            showArabicFilms();
            break;
        case 'foreign':
            showForeignFilms();
            break;
        case 'turkish':
            showTurkishFilms();
            break;
        case 'indian':
            showIndianFilms();
            break;
        case 'asian':
            showAsianFilms();
            break;
        case 'series':
            showSeries();
            break;
        default:
            console.error('فئة غير معروفة');
    }
}

// دالة فتح صفحة الفيديو
function openVideoPage(videoUrl) {
    if (videoUrl) {
        window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
    } else {
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}

// وظيفة زر الرجوع
function goBack() {
    if (window.history.length > 1) {
        history.back();
    } else {
        window.location.href = "index.html"; // العودة للصفحة الرئيسية
    }
}

// تحميل الصفحة الرئيسية عند تشغيل الموقع
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home');
});
