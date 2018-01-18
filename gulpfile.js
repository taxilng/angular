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
    
    var data = JSON.stringify()
    fs.writeFile('./app/config.js', data, (err) => {
        if (err) {
            throw err;
        }
        console.log('异步文件被保存');
    })
});