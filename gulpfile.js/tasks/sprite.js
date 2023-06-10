//* Не конвертирует уже сконвертированные файлы
const newer = require("gulp-newer");
//* Минификация файлов
const svgMinify = require("gulp-svgmin");
//* Создание Svg спрайта
const svgSprire = require("gulp-svg-sprite");

const sprite = () => {
	return $.gulp
		.src([$.path.sprite.src, "!./src/sprite/favicon/*"])
		// .pipe(newer($.path.sprite.dest))
		.pipe(svgMinify())
		.pipe(svgSprire($.config.sprite))
		.pipe($.gulp.dest($.path.sprite.dest))
		.pipe($.browserSync.stream());
};

module.exports = sprite ;

//* Минификация + создание спрайта, всех .svg файлов из директории src, кроме директории faviocon
