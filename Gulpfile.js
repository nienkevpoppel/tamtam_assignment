var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require ('gulp-concat')
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./css/'));
});


gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});