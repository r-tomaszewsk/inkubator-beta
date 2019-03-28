const { src, dest } = require('gulp');

function copy() {
  return src([
    './**/*'
    ,'!./node_modules'   
    ,'!./node_modules/**/*'
    ,'!.gitignore'
    // ,'!builder.bat'
  ])
  .pipe(dest('./export/'));
}

exports.copy = copy;