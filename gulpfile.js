let gulp = require("gulp"),
rename = require("gulp-rename"),
imagemin = require("gulp-imagemin"),
concat = require("gulp-concat"),
clean = require("gulp-clean-css"),
uglify = require("gulp-uglify"),
sass = require("gulp-sass"),
babel = require("gulp-babel");

gulp.task("js", () => {
    gulp.src("src/js/*.js")
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat("main.min.js"))
    .pipe(gulp.dest("dist/js"))
})
gulp.task("css", () => {
    gulp.src("src/sass/*.scss")    
    .pipe(sass({outputStyle : "expanded"}))
    .pipe(clean())
    .pipe(gulp.dest("dist/css"))
})
gulp.task("img", () => {
    gulp.src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"))
})
gulp.task("default", () => {
    gulp.watch("src/sass/*.scss", ["css"]);
    gulp.watch("src/js/*.js", ["js"]);
    gulp.watch("src/img/*", ["img"]);
})