global.$ = {
	gulp: require("gulp"),
	browserSync: require("browser-sync").create(),

	path: require("./settings/path"),
	config: require("./settings/config"),
};

//* Импорт отдельных задач
const clear = require("./tasks/clear");
const html = require("./tasks/html");
const scss = require("./tasks/scss");
const js = require("./tasks/js");
const img = require("./tasks/img");
const sprite = require("./tasks/sprite");
const icon = require("./tasks/icon");
const font = require("./tasks/font");
const server = require("./tasks/server");

//* Слежение за изменениями в файлах
const watcher = () => {
	$.gulp.watch($.path.html.watch, html);
	$.gulp.watch($.path.scss.watch, scss);
	$.gulp.watch($.path.js.watch, js);
	$.gulp.watch($.path.img.watch, img);
	$.gulp.watch($.path.sprite.watch, sprite);
	$.gulp.watch($.path.font.watch, font);
	$.gulp.watch($.path.icon.watch, icon);
};

//* Prod Сборка
const prod = $.gulp.series(
	clear,
	$.gulp.parallel(html, scss, js, icon, img, sprite, font)
);

//* Dev Сборка
const dev = $.gulp.series(prod, $.gulp.parallel(watcher, server));

//* Создание отдельных задач
exports.watch = watcher;
exports.clear = clear;
exports.html = html;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.sprite = sprite;
exports.font = font;
exports.icon = icon;

exports.prod = prod;
exports.dev = dev;
