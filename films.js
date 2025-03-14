// استيراد بيانات الأفلام من الملفات المختلفة
import { arabicFilms } from "./arabic.js";
import { foreignFilms } from "./foreign.js";
import { turkishFilms } from "./turkish.js";
import { indianFilms } from "./indian.js";
import { asianFilms } from "./asian.js";
import { seriesFilms } from "./series.js";
import { homeFilms } from "./home.js";

// تجميع الأفلام تحت كائن واحد
const films = {
    arabic: arabicFilms,
    foreign: foreignFilms,
    turkish: turkishFilms,
    indian: indianFilms,
    asian: asianFilms,
    series: seriesFilms,
    home: homeFilms
};

// تصدير الكائن لاستخدامه في script.js
export default films;
