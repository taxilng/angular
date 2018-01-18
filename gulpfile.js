var gulp = require('gulp');
var ngConstant = require('gulp-ng-constant');
var fs = require('fs')
gulp.task('default', function () {
    console.log('哈哈');

});
gulp.task('config', function () {
    // gulp.src('app/config.json')
    //     .pipe(ngConstant({
    //         name: 'my.module.config',
    //         constants: {
    //             myPropCnt: 'hola!'
    //         }
    //     }))
    //     .pipe(gulp.dest('dist'));

    var data = null;
    if (gulp.env.dev) {
        data = '开发环境'
    } else if (gulp.env.uat) {
        data = '测试环境'
    }
    fs.writeFile('./app/config.js', data, (err) => {
        if (err) {
            throw err;
        }
    })
});