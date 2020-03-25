const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    pug = require('gulp-pug') 

  

    gulp.task('estilo', () =>
        gulp.src('./src/scss/styles.scss')
        .pipe(sass({
            outputStyle: 'expanded' 
        }))
        .pipe(autoprefixer({
            version: ['last 3 browsers']
        }))
        .pipe(gulp.dest('./dist/css'))
    );


    gulp.task('estructura', () =>
        gulp.src('./src/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'))
 
    );


    gulp.task('default', function() { 
        gulp.watch('./src/scss/*.scss', gulp.series('estilo'));
        gulp.watch('./src/pages/*.pug', gulp.series('estructura'));

    }); 

 