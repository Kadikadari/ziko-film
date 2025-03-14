const seriesFilms: [ 
        { title: "مسلسل نور خالد", image: "images/o3407508_16666602.jpg", url: "نور خالد.html" }, 
        { title: "مسلسل عودة غوار", image: "images/عودة غوار.jpg", url: "عودة غوار.html" } 
    ],

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
