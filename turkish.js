turkishFilms: [ 
        { title: "فيلم تركي 1", image: "images/xut.jpg", url: "https://ok.ru/video/12348" }, 
        { title: "فيلم تركي 2", image: "images/xut.jpg", url: "https://ok.ru/video/12349" } 
    ], 

function showTurkishFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";
   turkishFilms.forEach(film => {
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
function openVideoPage(url) {
    window.location.href = `player.html?url=${encodeURIComponent(url)}`;
}
