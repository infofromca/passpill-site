var gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  { spawn } = require('child_process');
;

const scssPath = __dirname + "/themes/passpill-theme/static/scss/",
  outPath = __dirname + "/themes/passpill-theme/static/css/"
;

gulp.task("scss", function () {
  gulp.src(scssPath + "index.scss")
    .pipe(sass({
        outputStyle : "compressed"
    }))
    .on('error', err => console.log('ERROR', err ) )
    .pipe(autoprefixer({
        browsers : ["last 10 versions"]
    }))
    .pipe(gulp.dest( outPath ))
  ;
})


// Watch asset folder for changes, and start hugo server
gulp.task("watch", ["scss"], function () {
  var ls = spawn('hugo', ['server']);
  ls.stdout.on('data', (data) => {
    console.log(`Hugo: ${data}`);
  });
  gulp.watch(scssPath + "/**/*", ["scss"], () => {
    console.log('SCSS updated. Recompiling...');
  });
});

// The build task to be run before deploying
gulp.task("build", ["scss"], function() {
  var ls = spawn('hugo');
  ls.stdout.on('data', (data) => {
    console.log(`Hugo: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    console.log(`${data}`);
  });
  
  ls.on('close', code => {
    console.log(`Hugo build finished.`);
  })
});

// Set watch as default task
gulp.task("default", ["watch"]);
