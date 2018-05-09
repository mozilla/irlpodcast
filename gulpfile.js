var del = require('del');
var gulp = require('gulp');
var hash = require('gulp-hash');
var minify = require('gulp-minify');
var sass = require('gulp-sass');

// gulp task named 'scss' that converts .scss to .css and places the .css files in static/css
gulp.task('scss', function() {
    del(['static/css/**/*']);

    gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(hash())
        .pipe(gulp.dest('static/css'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/css'));
});

gulp.task('js', function() {
    del(['static/js/**/*']);

    gulp.src(['src/js/**/*'])
        // maybe we don't want this in local dev mode??
        // https://www.npmjs.com/package/gulp-environments
        .pipe(minify({
            ext: {
                // the extension to add to the minified files
                min: '-min.js'
            },
            // don't minify already minified files
            ignoreFiles: ['*.min.js'],
            // don't copy the original, un-minified files to the destination dir
            noSource: true
        }))
        .pipe(hash())
        .pipe(gulp.dest('static/js'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/js'));
});

gulp.task('watch', ['scss', 'js'], function() {
    gulp.watch('src/scss/**/*.scss', ['scss']);
    gulp.watch('src/js/**/*', ['js']);
});

// build task for pushing to stage/prod
gulp.task('build', ['scss', 'js']);

gulp.task('default', ['watch']);