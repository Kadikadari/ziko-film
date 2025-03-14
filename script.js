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
