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
                        minuteStep: 5,
                        startDate: new Date(),
                        language: 'zh-CN', //中文
                        forceParse: false, //选择框取消后不允许修改
                        todayHighlight: true, //高亮显示今天日期
                        viewSelect: 'year',
                        format: 'yyyy-mm-dd hh:ii'
                    })
                    .on('change', function () {
                        var _thisVal = $(this.children[0]).val();
                        if (_thisVal) {
                            ngModel.$setViewValue(new Date(_thisVal).getTime());
                        } else {
                            ngModel.$setViewValue('');
                        }

                    });
                scope.$watch('ngModel', function () {
                    console.log(ngModel.$viewValue);
                    if (ngModel.$viewValue)
                        $(elem).children().datetimepicker('update', new Date(ngModel.$viewValue));
                })
            });
        }
        return directive
    }

})()