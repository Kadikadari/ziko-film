 ],
    home: [ // أفلام خاصة بالصفحة الرئيسية
        { title: "فيلم مميز 1", image: "images/blu.jpg", url: "https://ok.ru/videoembed/2950580537963" },
        { title: "فيلم مميز 2", image: "images/mstrchersh.jpg", url: "https://ok.ru/videoembed/1264989833844" },
        { title: "فيلم مميز 3", image: "images/xut.jpg", url: "https://ok.ru/videoembed/973282806388" }
    ]

// دالة عرض الأفلام الأجنبية
function showForeignFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";  // مسح المحتوى السابق
    
    foreignFilms.forEach(film => {
        // إنشاء العنصر الخاص بالفيلم
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        
        // إضافة الحدث عند النقر على الفيلم
        filmElement.onclick = () => openVideoPage(film.url);
        
        // إضافة الفيلم إلى الحاوية
        container.appendChild(filmElement);
    });
}

// دالة لفتح صفحة الفيديو
function openVideoPage(url) {
    window.location.href = `player.html?url=${encodeURIComponent(url)}`;
}
