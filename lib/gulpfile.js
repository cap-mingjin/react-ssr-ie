var gulp = require('gulp');
var uglify = require('gulp-uglify');
// var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
const path = require('path');
var es3ify = require('gulp-es3ify');
const __basename = path.dirname(__dirname);
console.log(__basename);
var paths = {
  anu: [
    path.resolve(__basename, 'lib/anu/ReactIE.js'),
    // path.resolve(__basename, 'lib/anu/ReactPropTypes.js'),
    // path.resolve(__basename, 'lib/anu//createClass.js'),
    // path.resolve(__basename, 'lib/anu/injectTapEventPlugin.js'),
    path.resolve(__basename, 'lib/anu/Rematch.js'),
    path.resolve(__basename, 'lib/anu/ReduxIE.js')
  ],
  polyfill: [
    path.resolve(__basename, 'lib/common-polyfill/es5-shim.js'),
    path.resolve(__basename, 'lib/common-polyfill/object-create-ie8.js'),
    path.resolve(__basename, 'lib/common-polyfill/object-defineproperty-ie8.js'),
    path.resolve(__basename, 'lib/common-polyfill/console-polyfill.js'),
    path.resolve(__basename, 'lib/common-polyfill/json3.js'),
    path.resolve(__basename, 'lib/common-polyfill/bluebird.js'),
    path.resolve(__basename, 'lib/common-polyfill/fetch-polyfill-0.0.3/index.js'),
    path.resolve(__basename, 'lib/common-polyfill/fetch-polyfill-0.0.3/avalon.js')
  ]
};

gulp.task('default', function() {
  gulp
    .src(paths.anu)
    // .pipe(uglify())
    .pipe(concat('anu.full.min.js'))
    .pipe(es3ify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('polyfill', function() {
  gulp
    .src(paths.polyfill)
    // .pipe(uglify())
    .pipe(concat('common.polyfill.min.js'))
    // .pipe(es3ify())
    .pipe(gulp.dest('./dist'));
});
