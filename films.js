// films.js
import { arabicFilms } from './arabicFilms.js';
import { foreignFilms } from './foreignFilms.js';  // إضافة بقية التصنيفات هنا

// تجميع الأفلام تحت كائن واحد
const films = {
    arabic: arabicFilms,
    foreign: foreignFilms,
    // أضف التصنيفات الأخرى هنا...
};

// تصدير الكائن لاستخدامه في مكان آخر
export default films;
