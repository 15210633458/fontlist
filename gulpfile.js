var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var clean = require('gulp-clean-css')
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');
var htmlmin = require('gulp-htmlmin');
var server = require('gulp-webserver');


//开发环境
//生成css文件
gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat('all.css'))
        .pipe(clean())
        .pipe(gulp.dest('./src/css/'))
})

//监听scss
gulp.task('watch', function() {
    return gulp.src('./src/scss/*.scss', gulp.series('sass'))
})

//起服务
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: 3500,
            livereload: true,
            proxies: [
                { source: '/api/list', target: 'http://localhost:3000/users/api/list' },
                { source: '/api/add', target: 'http://localhost:3000/users/api/add' },
                { source: '/api/remove', target: 'http://localhost:3000/users/api/remove' },
                { source: '/api/find', target: 'http://localhost:3000/users/api/find' },
                { source: '/api/change', target: 'http://localhost:3000/users/api/change' }
            ]

        }))
})

gulp.task('dev', gulp.series('sass', 'server', 'watch'))





//线上环境