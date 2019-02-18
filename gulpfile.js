/* eslint-env node, commonjs */

'use strict';

var del = require('del');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var hash = require('gulp-hash');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');
var argv = require('yargs').argv;

// gulp build --production
var production = !!argv.production;

// gulp task named 'scss' that converts .scss to .css and places the .css files in static/css
function scss() {
    del(['static/css/**/*']);

    return gulp.src('src/scss/**/*.scss')
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
}

// lint scss files
function scssLint() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(stylelint({
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
}

function js() {
    del(['static/js/**/*']);

    return gulp.src(['src/js/**/*'])
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
}

// lint JS files
function jsLint() {
    return gulp.src(['src/js/**/*.js', '!src/js/**/*.min.js'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
}

function watch() {
    gulp.watch('src/scss/**/*.scss', gulp.series(scss, scssLint));
    gulp.watch('src/js/**/*', js);
    gulp.watch(['src/js/**/*.js', '!src/js/**/*.min.js'], jsLint);
}

const defaultTask = gulp.series(
    gulp.parallel(scss, scssLint, js, jsLint),
    watch
);

// build task for pushing to stage/prod
gulp.task('build', gulp.parallel(scss, js));

gulp.task('default', defaultTask);
module.exports = defaultTask;
