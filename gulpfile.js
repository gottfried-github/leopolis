const gulp = require('gulp')
// const watch = require('gulp-watch')
const sass = require('gulp-sass')

gulp.task('scss', function(done) {
  gulp.src('./src/**/index.scss')
  .pipe(sass()).on('error', sass.logError)
    // .pipe(() => {
    //   console.log('sass piped in this')
    // })
    .pipe(gulp.dest('./dist'))
    .on('end', () => {
      console.log('dest end');
      done()
    })
})
//
// gulp.task('stream', function () {
//     // Endless stream mode
//     return watch('./src/**/*.scss', ['sass']) // { ignoreInitial: false },
//       // .pipe(sass())
//       // .pipe(gulp.dest('./dist/'))
// })

gulp.task('html:cp', function(done) {
  gulp.src('./src/**/*.html')
  .pipe(gulp.dest('./dist'))
  .on('end', done)
})

gulp.task('see', function() {
  gulp.watch('./src/**/*.scss', gulp.parallel('scss', function(done) {
    done()
  }))

  gulp.watch('./src/**/*.html', gulp.parallel('html:cp', function(done) {
    done()
  }))
})

gulp.task('look', function() {
  gulp.watch('./src/index.html')
})
