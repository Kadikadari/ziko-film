const asianFilms = [ 
    { title: "Summer", image: "images/Summer.jpg", url: "https://ok.ru/videoembed/10339495578219" },
    { title: "Sleeping", image: "images/Sleeping.jpg", url: "https://ok.ru/videoembed/10017893583467" }, 
    { title: "Yoko", image: "images/Yoko.jpg", url: "https://ok.ru/videoembed/10018058078827" },
    { title: "Pilot", image: "images/Pilot.jpg", url: "https://ok.ru/videoembed/10016805423723" },
    { title: "April", image: "images/April.jpg", url: "https://ok.ru/videoembed/10015339514475" },
    { title: "Ice bar", image: "images/Ice bar.jpg", url: "http://ok.ru/videoembed/2953473362489" },
    { title: "Seconds", image: "images/Seconds.jpg", url: "https://ok.ru/videoembed/1901642386009" },
    { title: "After", image: "images/After.jpg", url: "https://ok.ru/videoembed/1898796157529" },
    { title: "Sukdulan", image: "images/Sukdulan.jpg", url: "https://ok.ru/videoembed/10207481891435" },
    { title: "Karakai", image: "images/Karakai.jpg", url: "https://ok.ru/videoembed/10339519105643" },
    { title: "Love", image: "images/Love.jpg", url: "https://ok.ru/videoembed/10339550693995" } 
];


function showArabicFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";
    arabicFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
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
