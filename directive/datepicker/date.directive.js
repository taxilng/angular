(function () {
    'use strict';
    angular
        .module('myApp')
        .directive('dateDir', ['$timeout', timepicker]);

    function timepicker($timeout) {
        var directive = {
            require: '?ngModel',
            restrict: 'E',
            templateUrl: '../directive/datepicker/date.html',
            scope: {
                ngModel: '='
            },
            controller: function ($scope) {

            },
            link: linkfun
        };

        function linkfun(scope, elem, attrs, ngModel) {
            $timeout(function () {   
                $(elem).children().datetimepicker({
                        format: attrs.format,
                        autoclose: true,
                        todayBtn: true,
                        minuteStep: 1,
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
            });
        }
        return directive
    }

})()