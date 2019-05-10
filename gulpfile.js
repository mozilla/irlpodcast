/* eslint-env node, commonjs */

'use strict';

var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var hash = require('gulp-hash');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var stylelint = require('gulp-stylelint');
var argv = require('yargs').argv;
var nodeProtocolDir = 'node_modules/@mozilla-protocol/core/protocol';

// gulp build --production
var production = !!argv.production;

// copy protocol assets to public folder
function protocolCopyUI() {

    return  gulp.src(nodeProtocolDir + '/img/icons/ui/**/*.{svg,png,jpg,gif}')
        .pipe(gulp.dest('public/images/protocol/icons/ui'));
}

// concat needed Protocol files and copy to JS directory
function protocolJS() {
    del(['src/js/libs/protocol.js']);

    var protocolModules = [
        'protocol-supports',
        'protocol-utils',
        'protocol-base',
        'protocol-menu',
        'protocol-modal',
        'protocol-navigation'
    ];

    protocolModules = protocolModules.map(function(name) {
        return nodeProtocolDir + '/js/' + name + '.js';
    });

    return gulp.src(protocolModules)
        .pipe(concat('protocol.js'))
        .pipe(gulp.dest('src/js/libs/'));
}

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
    return gulp.src(['src/js/**/*.js', '!src/js/libs/**/*.js'])
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
    gulp.series(protocolJS, protocolCopyUI, scss, scssLint, js, jsLint),
    watch
);

// build task for pushing to stage/prod
gulp.task('build', gulp.series(protocolJS, gulp.parallel(protocolCopyUI, scss, js)));

gulp.task('default', defaultTask);
module.exports = defaultTask;
