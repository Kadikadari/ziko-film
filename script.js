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
 { title: "dear dictator  ", image: "images/dear dictator.jpg", url: "https://ok.ru/videoembed/1872670165631" }, 
        { title: " so much love to give ", image: "images/so much love to give.jpg", url: "https://ok.ru/videoembed/1840947464773" },
        { title: " spanglish ", image: "images/spanglish.jpg", url: "https://games.ok.ru/videoembed/1964927355518" },
        { title: " the brother ", image: "images/the brother.jpg", url: "https://mega.nz/embed/0M52yTra#9oaURsSXiZtVgLw_sZw5BndW3YVsRcqQ8wZVTBD-bgE" },
         { title: "The Martian   ", image: "images/The Martian.jpg", url: "https://ok.ru/videoembed/8050242095857" }, 
        { title: " Nothing   ", image: "images/Nothing.jpg", url: "https://ok.ru/videoembed/1555294456322" },
        { title: " gulivver ", image: "images/gulivver.jpg", url: "https://ok.ru/videoembed/1935460797148" },
        { title: " life  ", image: "images/life.jpg", url: "https://ok.ru/videoembed/1259723229860" },
         { title: " dora   ", image: "images/dora.jpg", url: "https://ok.ru/videoembed/1225607023140" },
        { title: " Rebound ", image: "images/Rebound.jpg", url: "https://ok.ru/videoembed/1555295111682" },
        { title: " everything   ", image: "images/everything.jpg", url: "https://ok.ru/videoembed/480547965544" },
        { title: " أجنبي ", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" } 
    ], 
    turkish: [ 
        { title: "فيلم تركي 1", image: "images/xut.jpg", url: "https://ok.ru/video/12348" }, 
        { title: "فيلم تركي 2", image: "images/xut.jpg", url: "https://ok.ru/video/12349" } 
    ], 
    indian: [ 
        { title: "Pad Man  ", image: "images/Pad Man.jpg", url: "https://www.ok.ru/videoembed/1116129790703" }, 
         { title: "Anokhi  ", image: "images/Anokhi.jpg", url: "https://ok.ru/videoembed/9601974667883" }, 
         { title: "Rebel  ", image: "images/Rebel.jpg", url: "https://ok.ru/videoembed/9602752514667" }, 
         { title: "Joshua  ", image: "images/Joshua.jpg", url: "https://ok.ru/videoembed/9602129726059" }, 
         { title: "Bhairavakona  ", image: "images/Bhairavakona.jpg", url: "https://ok.ru/video/22348" }, 
         { title: "The.Goat.Life.2024  ", image: "images/The.Goat.Life.2024.jpg", url: "https://ok.ru/videoembed/7098530335327" }, 
         { title: "Kabali   ", image: "images/Kabali.jpg", url: "https://ok.ru/videoembed/9684984924779" }, 
         { title: "Khiladi   ", image: "images/Khiladi.jpg", url: "https://ok.ru/videoembed/9682624645739" }, 
         { title: "Pyaari  ", image: "images/Pyaari.jpg", url: "https://ok.ru/videoembed/9545487354475" }, 
         { title: "Nanna  ", image: "images/Nanna.jpg", url: "https://ok.ru/videoembed/9545239759467" }, 
         { title: "Hanuman  ", image: "images/Hanuman.jpg", url: "https://ok.ru/videoembed/9545069693547" }, 
         { title: "Maaya  ", image: "images/Maaya.jpg", url: "https://ok.ru/videoembed/9673437743723" }, 
         { title: "Meiyazhagan   ", image: "images/Meiyazhagan.jpg", url: "https://ok.ru/videoembed/8441740921470" }, 
        { title: "Saindhav  ", image: "images/Saindhav.jpg", url: "https://ok.ru/videoembed/10245762779755" } 
    ], 
    asian: [ 
         { title: "Summer   ", image: "images/Summer.jpg", url: "https://ok.ru/videoembed/10339495578219" },
        { title: "Sleeping ", image: "images/Sleeping.jpg", url: "https://ok.ru/videoembed/10017893583467" }, 
        { title: "Yoko ", image: "images/Yoko.jpg", url: "https://ok.ru/videoembed/10018058078827" },
        { title: "Pilot   ", image: "images/Pilot.jpg", url: "https://ok.ru/videoembed/10016805423723" },
        { title: "  April", image: "images/April.jpg", url: "https://ok.ru/videoembed/10015339514475" },
        { title: "  Ice bar", image: "images/Ice bar.jpg", url: "http://ok.ru/videoembed/2953473362489" },
        { title: "  Seconds  ", image: "images/Seconds.jpg", url: "https://ok.ru/videoembed/1901642386009" },
        { title: "After   ", image: "images/After.jpg", url: "https://ok.ru/videoembed/1898796157529" },
        { title: " Sukdulan ", image: "images/Sukdulan.jpg", url: "https://ok.ru/videoembed/10207481891435" },
        { title: "Karakai   ", image: "images/Karakai.jpg", url: "https://ok.ru/videoembed/10339519105643" },
         { title: " Love  ", image: "images/Love.jpg", url: "https://ok.ru/videoembed/10339550693995" } 
    ], 
    series: [ 
        { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
        { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عوده غوار.html" } 
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
        if (videoUrl.endsWith('.html')) {
            // إذا كان الرابط ينتهي بـ .html، افتحه كصفحة HTML
            window.location.href = videoUrl;
        } else {
            // إذا كان رابط فيديو، افتحه باستخدام video.html
            window.location.href = `video.html?url=${encodeURIComponent(videoUrl)}`;
        }
    } else {
        alert("لا يوجد رابط لهذا الفيديو!");
    }
}

// عند تحميل الصفحة، عرض الأفلام الخاصة بـ "الرئيسية"
document.addEventListener("DOMContentLoaded", () => {
    showCategory('home'); // عرض الأفلام الخاصة بالرئيسية عند تحميل الصفحة
});
