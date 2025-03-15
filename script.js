const homeFilms = [
    { title: "فيلم الخط", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" },
    { title: "فيلم شماريخ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" },
    { title: "فيلم كركون الشارع", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" },
    { title: "فيلم مرجان", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" }
];

const series = [
    { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "nor-xaled.html" },
    { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "ghowar.html" }
];

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








// دالة عامة لإنشاء وعرض الأفلام أو المسلسلات
function displayItems(items) {
    const container = document.getElementById("film-container");
    container.innerHTML = ""; // مسح الحاوية قبل الإضافة
    
    items.forEach(item => {
        const linkElement = document.createElement("a");
        linkElement.href = item.url;
        linkElement.classList.add("film-link");

        const itemElement = document.createElement("img");
        itemElement.src = item.image;
        itemElement.alt = item.title;
        itemElement.classList.add("film-image");
        
        linkElement.appendChild(itemElement);
        container.appendChild(linkElement);
    });
}

// دالة لعرض المحتوى حسب الفئة
function showCategory(category) {
    switch (category) {
        case 'home':
            displayItems(homeFilms);
            break;
        case 'series':
            displayItems(series);
            break;
        default:
            console.error('فئة غير معروفة');
    }
}

// دالة للرجوع إلى الصفحة السابقة أو الرئيسية
function goBack() {
    if (window.history.length > 1) {
        history.back();
    } else {
        window.location.href = "index.html";
    }
}

// تحميل الصفحة الرئيسية عند تشغيل الموقع
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // عرض الأفلام الرئيسية عند التحميل
});
