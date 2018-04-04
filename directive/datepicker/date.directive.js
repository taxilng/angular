(function () {
    'use strict';
    angular
        .module('myApp')
        .directive('dateDir', ['$timeout', timepicker]);

    function timepicker($timeout) {
        var directive = {
            restrict: 'AE',
            templateUrl: '../directive/datepicker/date.html',
            scope: {
                time: '=',
                readonly: '=',
                maxTime: '=',
                minTime: '=',
            },
            link: linkfun
        };

        function linkfun(scope, elem, attrs) {
            // scope.$watch('time',function(time){
            //     console.log('变化');
                
            // })
            console.log(scope);
            scope.$watch('elem',function(time){
                console.log('selTime变化');
            },true)
            // timeout internals are called once directive rendering is complete
            $timeout(function () {

                $(elem).children().datetimepicker({
                    format: attrs.format,
                    autoclose: true,
                    todayBtn: true,
                    minuteStep: 1,
                    language: 'fr', //中文
                    forceParse: false, //选择框取消后不允许修改
                    todayHighlight: true, //高亮显示今天日期
                    viewSelect: 'year',
                    format: 'yyyy-mm-dd hh:ii'
                    // format:'yyyy-mm-dd hh:ii:ss'
                })
                .on('hide', function () {
                    // console.log(scope);
                    console.log(scope);
                    var _this = $(this.children[0]);
                    // console.log(_this.val());
                    var val = new Date(_this.val()).getTime();
                    scope.time = val
                });
            });
        }
        return directive
    }

})()