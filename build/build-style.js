const { series, src, dest }  = require('gulp');

const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));
// const rename = require('gulp-rename');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');

/**
 * task()：定义任务
 * src():源文件
 * pipe():管道流，接通源头文件与目标文件的输出
 * dest():输出文件的目的地
 * watch():监视文件
 */
function compile() {
  return src('../src/styles/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      overrideBrowserslist: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(cssmin())
    // .pipe(rename('ven-ui.css'))
    .pipe(dest('../lib'));
}

function copyfont() {
  return src('../src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(dest('../lib/fonts'));
}

exports.build = series(compile, copyfont);
