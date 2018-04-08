(function () {
    'use strict';
    angular
        .module('myApp')
        .directive('dateDir', ['$timeout', timepicker]);

    function timepicker($timeout) {
        var directive = {
            require: '?ngModel', //可以获取模板的ng-model里面的值，作为link的第四参数
            restrict: 'E',
            templateUrl: '../directive/datepicker/date.html',
            scope: {
                ngModel: '=',
                minTime: '=',
                maxTime: '='
            },
            controller: function ($scope) {

            },
            link: linkfun
        };

        function linkfun(scope, elem, attrs, ngModel) {


            $(elem).children().datetimepicker({
                    format: attrs.format,
                    autoclose: true,
                    todayBtn: true,
                    minuteStep: 1,
                    // startDate: '2018-4-6',   //限制起始时间
                    setStartDate: new Date(),
                    language: 'zh-CN', //中文
                    forceParse: false, //选择框取消后不允许修改
                    todayHighlight: true, //高亮显示今天日期
                    viewSelect: 'year',
                    format: 'yyyy-mm-dd hh:ii'
                })
                .on('change', function () {
                    var _this = $(this.children[0]);
                    ngModel.$setViewValue(_this.val());
                });

            scope.$watch('minTime', function (time) {
                $(elem).children().datetimepicker('setStartDate', time)
            })
            scope.$watch('maxTime', function (time) {
                $(elem).children().datetimepicker('setEndDate', time)
                $(elem).children().datetimepicker('setLang', 'en')
            })
        }
        return directive
    }

})()