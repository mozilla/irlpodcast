var del = require('del');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var eslint = require('gulp-eslint');
var hash = require('gulp-hash');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');
var argv = require('yargs').argv;

// gulp build --production
var production = !!argv.production;

// gulp task named 'scss' that converts .scss to .css and places the .css files in static/css
gulp.task('scss', function() {
    del(['static/css/**/*']);

    gulp.src('src/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        // only add hash to file name for production builds
        .pipe(hash({
            template: production ? '<%= name %>-<%= hash %><%= ext %>' : '<%= name %><%= ext %>'
        }))
        .pipe(gulp.dest('static/css'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/css'));
});

// lint scss files
gulp.task('scss:lint', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
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
        // only add hash to file name for production builds
        .pipe(hash({
            template: production ? '<%= name %>-<%= hash %><%= ext %>' : '<%= name %><%= ext %>'
        }))
        .pipe(gulp.dest('static/js'))
        .pipe(hash.manifest('hash.json'))
        .pipe(gulp.dest('data/js'));
});

// lint JS files
gulp.task('js:lint', function() {
    return gulp.src(['src/js/**/*.js', '!src/js/**/*.min.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


gulp.task('watch', ['scss', 'scss:lint', 'js', 'js:lint'], function() {
    gulp.watch('src/scss/**/*.scss', ['scss', 'scss:lint']);
    gulp.watch('src/js/**/*', ['js']);
    gulp.watch(['src/js/**/*.js', '!src/js/**/*.min.js'] ['js:lint']);
});

// build task for pushing to stage/prod
gulp.task('build', ['scss', 'js']);

gulp.task('default', ['watch']);
