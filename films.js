// films.js
import { arabicFilms } from './arabicFilms.js';
import { foreignFilms } from './foreignFilms.js';  // إضافة بقية التصنيفات هنا
import { turkishFilms } from './turkishFilms.js';
import { indianFilms } from './indianFilms.js';
import { asianFilms } from './asianFilms.js';
import { seriesFilms } from './seriesFilms.js';

// تجميع الأفلام تحت كائن واحد
const films = {
    arabic: arabicFilms,
    foreign: foreignFilms,
    turkish: turkishFilms,
    indian: indianFilms,
    asian: asianFilms,
    series: seriesFilms,
};

// تصدير الكائن لاستخدامه في مكان آخر
export default films;
