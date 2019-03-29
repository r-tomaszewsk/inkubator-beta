const { src, dest } = require('gulp');
var del = require('del');


function copy() {
  return del([
    './.buildResult/**/*',
    './export/**/*',
    './export/'
  ], src([
    './**/*'
    ,'!./node_modules'   
    ,'!./node_modules/**/*'
    ,'!.gitignore'
    // ,'!builder.bat'
  ])
  .pipe(dest('./export/')));
}

exports.copy = copy;