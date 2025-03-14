// بيانات الأفلام 
const films = { 
    arabic: [ 
        { title: "فيلم الخط ", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" }, 
        { title: "فيلم شماريخ ", image: "images/شماريخ.jpg", url: "https://vkvideo.ru/video_ext.php?oid=760447746&id=456239383&hash=10d0ecac9fdc52b1" }, 
        { title: "فيلم كركون الشارع ", image: "images/كركون.jpg", url: "https://ok.ru/videoembed/979790137972" }, 
        { title: "فيلم مرجان ", image: "images/مرجان.jpg", url: "https://ok.ru/videoembed/980295092852" } 
    ], 
    foreign: [ 
        { title: "blu  ", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" }, 
        { title: " pure lucke ", image: "images/pure.jpg", url: "https://ok.ru/videoembed/6106193922801" },
        { title: " shawshank ", image: "images/shawshenk.jpg", url: "https://www.ok.ru/videoembed/8281347918517" },
        { title: " cast away ", image: "images/cast.jpg", url: "https://ok.ru/videoembed/4342255258133" },
         { title: "a sunburnt christmas  ", image: "images/a sunburnt christmas.jpg", url: "https://www.ok.ru/videoembed/8155275397813" }, 
        { title: " trumman", image: "images/trumman.jpg", url: "https://www.ok.ru/videoembed/8281369283253" },
        { title: " blue miraclr ", image: "images/miraclr.jpg", url: "https://www.ok.ru/videoembed/8128203328181" },
        { title: " survivants ", image: "images/survivants.jpg", url: "https://www.ok.ru/videoembed/8179675695797" },

         { title: " true spirit ", image: "images/true spirit.jpg", url: "https://www.ok.ru/videoembed/7983728364213" },
        { title: " rango ", image: "images/rango.jpg", url: "https://www.ok.ru/videoembed/8298574187189" },
        { title: " the mountain ", image: "images/the mountain.jpg", url: "https://www.ok.ru/videoembed/2524987787939" },
        { title: "free gaye  ", image: "images/free gaye.jpg", url: "https://www.ok.ru/videoembed/8103229524661" }, 
        { title: " Bookworm", image: "images/Bookworm.jpg", url: "https://ok.ru/videoembed/8965706222187" },
        { title: " Doctor Dolittle ", image: "images/Doctor Dolittle.jpg", url: "https://ok.ru/videoembed/1264989112948" },
        { title: " Meet Dave ", image: "images/Meet Dave.jpg", url: "https://ok.ru/videoembed/1264992979572" },
        { title: " أجنبي ", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" } 
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
        { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
        { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" } 
    ],
    home: [ // أفلام خاصة بالصفحة الرئيسية
        { title: "فيلم مميز 1", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "فيلم مميز 2", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" },
        { title: "فيلم مميز 3", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" }
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
