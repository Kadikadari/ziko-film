// script.js
import films from './films.js';

// عرض الأفلام حسب التصنيف
function showCategory(category) {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // تفريغ الحاوية قبل عرض الأفلام الجديدة

    if (!films[category]) {
        console.error("التصنيف غير موجود:", category);
        return;
    }

    // عنوان التصنيف
    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = getCategoryTitle(category);
    container.appendChild(categoryTitle);

    // عرض كل فيلم في التصنيف
    films[category].forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
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
        case 'home': return 'الرئيسية';
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

// عند تحميل الصفحة، عرض الأفلام الخاصة بـ "الرئيسية"
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // عرض الأفلام الخاصة بالرئيسية عند تحميل الصفحة
});
