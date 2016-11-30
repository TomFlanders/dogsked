var gulp = require('gulp');
var git = require('gulp-git');


gulp.task('gitter', function () {
    gulp.src('.')
      .pipe(git.add({args: '*/*'}))
      .pipe(git.commit('schedule updated'))
      ;
      git.push('origin', 'master');
});
