// استيراد الملفات
import { showArabicFilms } from './arabic.js';
import { showForeignFilms } from './foreign.js';
// استيراد الملفات الأخرى حسب الحاجة

// دالة لعرض الأفلام حسب التصنيف
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
            showTurkishFilms(); // يمكنك إنشاء ملف مماثل لفئة الأفلام التركية
            break;
        case 'indian':
            showIndianFilms(); // نفس الشيء للفئة الهندية
            break;
        // إضافة المزيد من الفئات حسب الحاجة
        default:
            console.error('فئة غير معروفة');
    }
}

// الدالة التي تفتح صفحة الفيديو
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

document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // عرض الأفلام الخاصة بالرئيسية عند تحميل الصفحة
});
