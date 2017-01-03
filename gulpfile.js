// Gulp Imports
var gulp        = require ('gulp');
var sass        = require ('gulp-sass');
var prefix      = require ('gulp-autoprefixer');
var uglify      = require ('gulp-uglify');
var cleanCSS    = require ('gulp-clean-css');
var typescript  = require ('gulp-typescript');
var tsProject   = typescript.createProject("tsconfig.json");
var sourcemaps  = require ('gulp-sourcemaps');
var packageData = require ('./package.json');

// Set Theme Paths
var paths = {
    styles:     ['css/sass/*.scss'],
    scripts:    ['js/src/**/*.ts'],
    gulp:       ['gulpfile.js']
}

// Tasks
gulp.task( 'styles', function(){

    return gulp.src( paths.styles )
        .pipe( sourcemaps.init() )                        // initialize sourcemaps
        .pipe( sass().on('error', sass.logError) )        // compile sass
        .pipe( prefix({
            browsers: ['last 2 versions']
        }))                                               // browser-prefix CSS
        .pipe( cleanCSS() )                               // compress 
        .pipe( sourcemaps.write() )                       // write sourcemaps to disk
        .pipe( gulp.dest( './css/' ) );                   // save to disk

});

gulp.task( 'scripts', function(){

    return gulp.src( paths.scripts )
        .pipe( sourcemaps.init() )                        // init sourcemaps
        .pipe( tsProject() )                     
        .pipe( uglify() )                                 // compress
        .pipe( sourcemaps.write() )                       // write sourcemaps to disk
        .pipe( gulp.dest( './js/' ) );                    // save to disk

});    

gulp.task( 'watch', function(){
   
    gulp.watch( paths.styles, ['styles'] );               // watch styles to recompile
    gulp.watch( paths.scripts, ['scripts'] );             // watch scripts to recompile

});

gulp.task( 'default', ['styles', 'scripts', 'watch']);    // initial task