//* Не конвертирует уже сконвертированные файлы
const newer = require("gulp-newer");

const icon = () => {
	return $.gulp
		.src($.path.icon.src)
		.pipe(newer($.path.sprite.dest))
		.pipe($.gulp.dest($.path.icon.dest))
		.pipe($.browserSync.stream());
};

module.exports = icon;
