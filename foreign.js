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

function showForeignFilms() {
    const container = document.getElementById("film-container");
    container.innerHTML = "";
    foreignFilms.forEach(film => {
        const filmElement = document.createElement("img");
        filmElement.src = film.image;
        filmElement.alt = film.title;
        filmElement.classList.add("film-image");
        filmElement.onclick = () => openVideoPage(film.url);
        container.appendChild(filmElement);
    });
}
