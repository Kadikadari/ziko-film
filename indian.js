const  indianFilms: [ 
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
function showIndianFilms() {
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
        
        // إضافة الفيلم إلى الحاوية
        container.appendChild(filmElement);
    });
}

// دالة لفتح صفحة الفيديو
function openVideoPage(url) {
    window.location.href = `player.html?url=${encodeURIComponent(url)}`;
}
