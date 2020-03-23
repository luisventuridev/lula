const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug'),
    watch = require('gulp-watch')



gulp.task('estilo', () =>
    gulp.src('./src/scss/styles.scss')
    .pipe(sass({
        outputStyle: "compressed" 
    }))
    .pipe(autoprefixer({
        version: ['last 3 browsers']
    }))
    .pipe(gulp.dest('./dist/css/styles.css'))

);


gulp.task('default', () => {
    gulp.watch('./src/scss/styles.scss', ['estilo']);
});