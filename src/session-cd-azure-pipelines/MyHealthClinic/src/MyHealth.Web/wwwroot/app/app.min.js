(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _appModule = require('./app.module');

var _appModule2 = _interopRequireDefault(_appModule);

angular.bootstrap(document.getElementById('app'), [_appModule2['default']]);

},{"./app.module":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _componentsSharedSharedModule = require('./components/shared/shared.module');

var _componentsSharedSharedModule2 = _interopRequireDefault(_componentsSharedSharedModule);

var _componentsDashboardDashboardModule = require('./components/dashboard/dashboard.module');

var _componentsDashboardDashboardModule2 = _interopRequireDefault(_componentsDashboardDashboardModule);

var _componentsDoctorsDoctorsModule = require('./components/doctors/doctors.module');

var _componentsDoctorsDoctorsModule2 = _interopRequireDefault(_componentsDoctorsDoctorsModule);

var _componentsPatientsPatientsModule = require('./components/patients/patients.module');

var _componentsPatientsPatientsModule2 = _interopRequireDefault(_componentsPatientsPatientsModule);

var _componentsDailyReportDailyReportModule = require('./components/dailyReport/dailyReport.module');

var _componentsDailyReportDailyReportModule2 = _interopRequireDefault(_componentsDailyReportDailyReportModule);

var _componentsUsersUsersModule = require('./components/users/users.module');

var _componentsUsersUsersModule2 = _interopRequireDefault(_componentsUsersUsersModule);

var _componentsClinicsClinicsModule = require('./components/clinics/clinics.module');

var _componentsClinicsClinicsModule2 = _interopRequireDefault(_componentsClinicsClinicsModule);

var moduleName = 'myHealth';

var app = angular.module(moduleName, ['ui.router', 'ngAnimate', _componentsSharedSharedModule2['default'], _componentsDashboardDashboardModule2['default'], _componentsDoctorsDoctorsModule2['default'], _componentsPatientsPatientsModule2['default'], _componentsDailyReportDailyReportModule2['default'], _componentsUsersUsersModule2['default'], _componentsClinicsClinicsModule2['default']]);

app.run(run);
app.config(config);

function run($state, initialPageService) {
    initialPageService.getInitialState().then(function (initialState) {
        $state.go(initialState, {}, { location: "replace" });
    });
}

function config($stateProvider, $urlRouterProvider, $compileProvider) {

    var defaultUrl = '/';

    $compileProvider.debugInfoEnabled(false);

    $urlRouterProvider.when('', defaultUrl);

    $urlRouterProvider.otherwise('/404');

    $stateProvider.state('default', {
        url: '/',
        template: ''
    }).state('dashboard', {
        url: '/dashboard',
        templateUrl: '/app/components/dashboard/views/main.html',
        controller: 'dashboardController'
    }).state('doctors', {
        url: '/doctors',
        templateUrl: '/app/components/doctors/views/main.html',
        controller: 'doctorsController'
    }).state('doctor', {
        url: '/doctor?id',
        templateUrl: '/app/components/doctors/views/detail.html',
        controller: 'doctorDetailController'
    }).state('patients', {
        url: '/patients',
        templateUrl: '/app/components/patients/views/main.html',
        controller: 'patientsController'
    }).state('dailyReport', {
        url: '/dailyreport',
        templateUrl: '/app/components/dailyReport/views/main.html',
        controller: 'dailyReportController'
    }).state('users', {
        url: '/users',
        templateUrl: '/app/components/users/views/main.html',
        controller: 'usersController'
    }).state('user', {
        url: '/user?username',
        templateUrl: '/app/components/users/views/detail.html',
        controller: 'userDetailController'
    }).state('clinics', {
        url: '/clinics',
        templateUrl: '/app/components/clinics/views/main.html',
        controller: 'clinicsController'
    }).state('clinic', {
        url: '/clinic?id',
        templateUrl: '/app/components/clinics/views/detail.html',
        controller: 'clinicDetailController'
    }).state('error', {
        url: '/404',
        templateUrl: '/app/components/shared/views/error.html'
    });
}

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./components/clinics/clinics.module":3,"./components/dailyReport/dailyReport.module":8,"./components/dashboard/dashboard.module":10,"./components/doctors/doctors.module":16,"./components/patients/patients.module":19,"./components/shared/shared.module":29,"./components/users/users.module":33}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersClinicsController = require('./controllers/clinicsController');

var _controllersClinicsController2 = _interopRequireDefault(_controllersClinicsController);

var _controllersClinicDetailController = require('./controllers/clinicDetailController');

var _controllersClinicDetailController2 = _interopRequireDefault(_controllersClinicDetailController);

var _servicesClinicsService = require('./services/clinicsService');

var _servicesClinicsService2 = _interopRequireDefault(_servicesClinicsService);

var moduleName = 'myHealth.clinics';

angular.module(moduleName, []).controller('clinicsController', _controllersClinicsController2['default']).controller('clinicDetailController', _controllersClinicDetailController2['default']).service('clinicsService', _servicesClinicsService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/clinicDetailController":4,"./controllers/clinicsController":5,"./services/clinicsService":6}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClinicDetailController = function ClinicDetailController($scope, $rootScope, $stateParams, $state, clinicsService, toasterService, modalService) {
    _classCallCheck(this, ClinicDetailController);

    var tenantId = $stateParams.id;
    $scope.editMode = tenantId !== undefined;

    $scope.clinic = {};

    if ($scope.editMode) {
        $rootScope.loading = true;
        clinicsService.getClinic(tenantId).then(function (response) {
            $scope.clinic = response.data;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('clinics');
    };

    $scope.removeClinic = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove clinic',
                body: 'Are you sure you want to remove the clinic?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            clinicsService.remove(tenantId).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if (!$scope.editMode) {
            $rootScope.loading = true;
            $rootScope.loadingInfo = 'Generating example data.\r\nThis could take a while, please wait.';
            clinicsService.add($scope.clinic).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
                $rootScope.loadingInfo = null;
            });
        } else {
            $rootScope.loading = true;
            clinicsService.update($scope.clinic).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = ClinicDetailController;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ClinicsController = function ClinicsController($scope, $rootScope, $state, clinicsService, toasterService, modalService) {
    _classCallCheck(this, ClinicsController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.clinics = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        clinicsService.getList(pageSize, pageCount).then(function (clinics) {
            if (clinics.length < pageSize) {
                $scope.noMoreData = true;
            }
            clinics.forEach(function (clinic) {
                $scope.clinics.push(clinic);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.clinics.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (tenantId) {
        tenantId ? $state.transitionTo('clinic', { id: tenantId }) : $state.transitionTo('clinic');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.clinics.forEach(function (clinic) {
                clinic.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.clinics.some(function (clinic) {
            return clinic.selected;
        });

        $scope.everySelected = $scope.clinics.every(function (clinic) {
            return clinic.selected;
        });
    };

    $scope.remove = function (clinic) {
        var severalClinics = clinic === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove clinic' + (severalClinics ? 's' : ''),
                body: 'Are you sure you want to remove the selected clinic' + (severalClinics ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var tenantIdList;
            if (clinic) {
                tenantIdList = [clinic.tenantId];
            } else {
                tenantIdList = $scope.clinics.map(function (clinicItem) {
                    if (clinicItem.selected) {
                        return clinicItem.tenantId;
                    }
                    return null;
                });
            }

            $rootScope.loading = true;
            $rootScope.loadingInfo = 'Removing the clinic' + (severalClinics ? 's' : '') + ' and all the related data.\r\nThis could take a while, please wait.';

            tenantIdList.forEach(function (tenantId) {
                clinicsService.remove(tenantId).then(function (response) {
                    if (response.status === 200) {
                        $scope.clinics.forEach(function (clinicItem) {
                            if (tenantId === clinicItem.tenantId) {
                                var index = $scope.clinics.indexOf(clinicItem);
                                $scope.clinics.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                })['finally'](function () {
                    $rootScope.loading = false;
                    $rootScope.loadingInfo = null;
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = ClinicsController;
module.exports = exports['default'];

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ClinicsService($http) {
    'use strict';

    var clinics;

    return {
        getClinic: getClinic,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getClinic(tenantId) {
        var url = '/api/tenants/' + tenantId;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            clinics = response.data;
            return clinics;
        };
        var url = '/api/tenants/list';
        return $http({
            method: 'GET',
            url: url,
            params: {
                pageSize: pageSize,
                pageCount: pageCount
            }
        }).then(handleSuccess);
    }

    function add(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function update(tenant) {
        var url = '/api/tenants/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                tenant: tenant,
                password: tenant.password || null
            }
        });
    }

    function remove(tenantId) {
        var url = '/api/tenants/' + tenantId;
        return $http({
            method: 'DELETE',
            url: url
        });
    }
}

exports['default'] = ClinicsService;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DailyReportController = function DailyReportController() {
    _classCallCheck(this, DailyReportController);
};

/* empty */
exports["default"] = DailyReportController;
module.exports = exports["default"];

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDailyReportController = require('./controllers/dailyReportController');

var _controllersDailyReportController2 = _interopRequireDefault(_controllersDailyReportController);

var moduleName = 'myHealth.dailyReport';

angular.module(moduleName, []).controller('dailyReportController', _controllersDailyReportController2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/dailyReportController":7}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DashboardController = function DashboardController($scope, $rootScope, dashboardService, toasterService) {
    _classCallCheck(this, DashboardController);

    var year = new Date().getFullYear();

    $scope.incomesExpensesYear = year;
    $scope.patientsYear = year;
    $scope.currentYear = year;

    $scope.addYearIncomesExpenses = function () {
        if ($scope.currentYear > $scope.incomesExpensesYear) {
            $scope.incomesExpensesYear += 1;
        }
    };

    $scope.reduceYearIncomesExpenses = function () {
        $scope.incomesExpensesYear -= 1;
    };

    $scope.addYearPatients = function () {
        if ($scope.currentYear > $scope.patientsYear) {
            $scope.patientsYear += 1;
        }
    };

    $scope.reduceYearPatients = function () {
        $scope.patientsYear -= 1;
    };

    $scope.correctYear = function () {
        if ($scope.currentYear < $scope.patientsYear) {
            $scope.patientsYear = $scope.currentYear;
        }
        if ($scope.currentYear < $scope.incomesExpensesYear) {
            $scope.incomesExpensesYear = $scope.currentYear;
        }
    };

    var createChartDataIncomesExpenses = function createChartDataIncomesExpenses(expenses, incomes) {
        $scope.chartDataIncomesExpenses = {
            scaleLabel: function scaleLabel(valuePayload) {
                return Number(valuePayload.value).toFixed.replace('.', ',') + '$';
            },
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'INCOMES',
                fillColor: 'rgba(0,216,204,0.2)',
                strokeColor: 'rgba(0,216,204,1)',
                pointColor: 'rgba(0,216,204,1)',
                pointStrokeColor: 'rgba(0,216,204,1)',
                pointHighlightFill: 'rgba(0,216,204,1)',
                pointHighlightStroke: '#fff',
                data: incomes
            }, {
                label: 'EXPENSES',
                fillColor: 'rgba(255,23,112,0.2)',
                strokeColor: 'rgba(255,23,112,1)',
                pointColor: 'rgba(255,23,112,1)',
                pointStrokeColor: 'rgba(255,23,112,1)',
                pointHighlightFill: 'rgba(255,23,112,1)',
                pointHighlightStroke: '#fff',
                data: expenses
            }]
        };
    };
    var createChartDataPatients = function createChartDataPatients(patients) {
        $scope.chartDataPatients = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'PATIENTS',
                fillColor: 'rgba(0,216,204,1)',
                strokeColor: 'rgba(0,216,204,1)',
                pointColor: 'rgba(0,216,204,1)',
                pointStrokeColor: 'rgba(0,216,204,1)',
                pointHighlightFill: 'rgba(0,216,204,1)',
                pointHighlightStroke: '#fff',
                data: patients
            }]
        };
    };

    $rootScope.loading = true;
    dashboardService.getSummary().then(function (summary) {
        $scope.summary = summary;
    })['catch'](function (error) {
        toasterService.showServerError(error);
    })['finally'](function () {
        $rootScope.loading = false;
    });

    $scope.$watch('incomesExpensesYear', function (newValue, oldValue) {
        if (newValue || oldValue) {
            var expenses = new Array(12);
            expenses.fill(0, 0, 13);
            var incomes = new Array(12);
            incomes.fill(0, 0, 13);

            dashboardService.getExpenses($scope.incomesExpensesYear).then(function (allExpenses) {
                allExpenses.forEach(function (elem, index) {
                    expenses[index] = elem.expenses;
                    incomes[index] = elem.incomes;
                });

                createChartDataIncomesExpenses(expenses, incomes);
            })['catch'](function (error) {
                toasterService.showServerError(error);
            });
        }
    });

    $scope.$watch('patientsYear', function (newValue, oldValue) {
        if (newValue || oldValue) {
            var patients = new Array(12);
            patients.fill(0, 0, 13);

            dashboardService.getPatients($scope.patientsYear).then(function (allPatients) {
                allPatients.forEach(function (elem, index) {
                    patients[index] = elem.patientsCount;
                });

                createChartDataPatients(patients);
            })['catch'](function (error) {
                toasterService.showServerError(error);
            });
        }
    });
};

exports['default'] = DashboardController;
module.exports = exports['default'];

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDashboardController = require('./controllers/dashboardController');

var _controllersDashboardController2 = _interopRequireDefault(_controllersDashboardController);

var _servicesDashboardService = require('./services/dashboardService');

var _servicesDashboardService2 = _interopRequireDefault(_servicesDashboardService);

var _directivesMHChartDirective = require('./directives/MHChartDirective');

var _directivesMHChartDirective2 = _interopRequireDefault(_directivesMHChartDirective);

var moduleName = 'myHealth.dashboard';

angular.module(moduleName, []).directive('chart', _directivesMHChartDirective2['default']).controller('dashboardController', _controllersDashboardController2['default']).service('dashboardService', _servicesDashboardService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/dashboardController":9,"./directives/MHChartDirective":11,"./services/dashboardService":12}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FILTER = new WeakMap();

var MHChart = (function () {
    function MHChart($filter) {
        _classCallCheck(this, MHChart);

        this.restrict = 'A';
        this.scope = {
            'chartdata': '=',
            'kind': '@'
        };
        FILTER.set(this, $filter);
    }

    _createClass(MHChart, [{
        key: 'link',
        value: function link(scope, element) {
            var numberFilter = FILTER.get(MHChart.instance)('number');

            var options = {
                scaleShowGridLines: true,
                scaleGridLineColor: 'rgba(0,0,0,.05)',
                scaleGridLineWidth: 1,
                scaleShowHorizontalLines: true,
                scaleShowVerticalLines: false,
                scaleLabel: function scaleLabel(valuePayload) {
                    return numberFilter(valuePayload.value);
                },
                bezierCurve: true,
                bezierCurveTension: 0.4,
                pointDot: false,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: true,
                datasetStrokeWidth: 2,
                datasetFill: true,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
                tooltipFontColor: '#7c7c81',
                maintainAspectRatio: true,
                responsive: true,
                animation: true,
                animationEasing: 'easeOutQuint',
                customTooltips: function customTooltips(tooltip) {

                    var $tooltip = $('#chart-customtooltip');

                    if (!$tooltip[0]) {
                        $('body').append('<div id="chart-customtooltip" class="chart-customtooltip"></div>');
                        $tooltip = $('#chartjs-customtooltip');
                    }

                    if (!tooltip) {
                        $tooltip.css({
                            opacity: 0
                        });
                        return;
                    }

                    $tooltip.removeClass('above below no-transform');
                    if (tooltip.yAlign) {
                        $tooltip.addClass(tooltip.yAlign);
                    } else {
                        $tooltip.addClass('no-transform');
                    }

                    if (tooltip.text) {
                        $tooltip.html(tooltip.text);
                    } else {
                        var innerHtml = '<div class="title">' + tooltip.title + '</div>';
                        for (var i = 0; i < tooltip.labels.length; i++) {
                            innerHtml += ['<div class="section">', '   <span class="key" style="background-color:' + tooltip.legendColors[i].fill + '"></span>', '   <span class="value">$' + numberFilter(tooltip.labels[i]) + '</span>', '</div>'].join('');
                        }
                        $tooltip.html(innerHtml);
                    }

                    var top = 0;
                    if (tooltip.yAlign) {
                        if (tooltip.yAlign === 'above') {
                            top = tooltip.y - tooltip.caretHeight - tooltip.caretPadding;
                        } else {
                            top = tooltip.y + tooltip.caretHeight + tooltip.caretPadding;
                        }
                    }

                    var offset = $(tooltip.chart.canvas).offset();

                    $tooltip.css({
                        opacity: 1,
                        width: tooltip.width ? tooltip.width + 'px' : 'auto',
                        left: offset.left + tooltip.x + 'px',
                        top: offset.top + top + 'px',
                        fontFamily: tooltip.fontFamily,
                        fontSize: tooltip.fontSize,
                        fontStyle: tooltip.fontStyle,
                        backgroundColor: 'rgb(255, 255, 255)',
                        boxShadow: '0 2px 6px 0 rgba(0, 0, 0, .8)'
                    });
                }
            };

            var ctx = element.get(0).getContext('2d');

            scope.$watch('chartdata', function (newValue, oldValue) {

                if (newValue && !oldValue) {
                    if (scope.kind === 'line') {
                        ctx.canvas.height = 80;
                        scope.incomeExpensesChart = new Chart(ctx).Line(scope.chartdata, options);
                        var legend = scope.incomeExpensesChart.generateLegend();
                        document.getElementById('legendIncomeExpenses').innerHTML = legend;
                    }

                    if (scope.kind === 'bar') {
                        ctx.canvas.height = 80;
                        scope.patientsChart = new Chart(ctx).Bar(scope.chartdata, options);
                    }
                }

                if (newValue && oldValue) {
                    if (scope.kind === 'line') {
                        scope.chartdata.datasets[0].data.forEach(function (elem, index) {
                            scope.incomeExpensesChart.datasets[0].points[index].value = elem;
                        });

                        scope.chartdata.datasets[1].data.forEach(function (elem, index) {
                            scope.incomeExpensesChart.datasets[1].points[index].value = elem;
                        });

                        scope.incomeExpensesChart.update();
                    }

                    if (scope.kind === 'bar') {
                        scope.chartdata.datasets[0].data.forEach(function (elem, index) {
                            scope.patientsChart.datasets[0].bars[index].value = elem;
                        });
                        scope.patientsChart.update();
                    }
                }
            });

            Chart.defaults.global.responsive = true;
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory($filter) {
            MHChart.instance = new MHChart($filter);
            return MHChart.instance;
        }
    }]);

    return MHChart;
})();

MHChart.directiveFactory.$inject = ['$filter'];

exports['default'] = MHChart.directiveFactory;
module.exports = exports['default'];

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function DashboardService($http) {
    'use strict';

    return {
        getSummary: getSummary,
        getExpenses: getExpenses,
        getPatients: getPatients
    };

    function getSummary() {
        var handleSuccess = function handleSuccess(response) {
            var summary = response.data;
            return summary;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/clinicsummary';
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getExpenses(year) {
        var handleSuccess = function handleSuccess(response) {
            var expenses = response.data;
            return expenses;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/expenses/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function getPatients(year) {
        var handleSuccess = function handleSuccess(response) {
            var patients = response.data;
            return patients;
        };

        var tenantId = '';

        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        }).then(function (response) {
            tenantId = response.data;
            var url = '/api/reports/patients/' + year;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }
}

exports['default'] = DashboardService;
module.exports = exports['default'];

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DoctorDetailController = function DoctorDetailController($scope, $rootScope, $stateParams, $state, doctorsService, toasterService, modalService) {
    _classCallCheck(this, DoctorDetailController);

    var doctorId = $stateParams.id;
    $scope.editMode = doctorId !== undefined;
    var tenantId;

    $scope.doctor = {
        CreatedAt: new Date()
    };

    if ($scope.editMode) {
        $rootScope.loading = true;
        doctorsService.getDoctor(doctorId).then(function (response) {
            $scope.doctor = response.data;
            $scope.doctor.picture = 'data:image/png;base64,' + $scope.doctor.picture;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    } else {
        $rootScope.loading = true;
        doctorsService.getTenant().then(function (response) {
            tenantId = response.data;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('doctors');
    };

    $scope.nagivateToPatientList = function () {
        $state.transitionTo('patients');
    };

    $scope.removeDoctor = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove doctor',
                body: 'Are you sure you want to remove the doctor?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            doctorsService.remove(doctorId).then(function (response) {
                if (response.status === 200) {
                    $state.transitionTo('doctors');
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if ($scope.doctor.picture) {
            $scope.doctor.picture = $scope.doctor.picture.split(',')[1];
        }

        if (!$scope.editMode) {
            $scope.doctor.tenantId = tenantId;
            $rootScope.loading = true;
            doctorsService.add($scope.doctor).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        } else {
            $rootScope.loading = true;
            doctorsService.update($scope.doctor).then(function (response) {
                if (response.status === 200) {
                    $scope.navigateBack();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = DoctorDetailController;
module.exports = exports['default'];

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DoctorsController = function DoctorsController($scope, $rootScope, $state, doctorsService, toasterService, modalService) {
    _classCallCheck(this, DoctorsController);

    var pageSize = 4;
    var pageCount = 0;
    $scope.doctors = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        doctorsService.getList(pageSize, pageCount).then(function (doctors) {
            if (doctors.length < pageSize) {
                $scope.noMoreData = true;
            }
            doctors.forEach(function (doctor) {
                $scope.doctors.push(doctor);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.doctors.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (doctorId) {
        doctorId ? $state.transitionTo('doctor', { id: doctorId }) : $state.transitionTo('doctor');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.doctors.forEach(function (doctor) {
                doctor.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.doctors.some(function (doctor) {
            return doctor.selected;
        });

        $scope.everySelected = $scope.doctors.every(function (doctor) {
            return doctor.selected;
        });
    };

    $scope.remove = function (doctor) {
        var severalDoctors = doctor === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove doctor' + (severalDoctors ? 's' : ''),
                body: 'Are you sure you want to remove the selected doctor' + (severalDoctors ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var doctorIdList;
            if (doctor) {
                doctorIdList = [doctor.doctorId];
            } else {
                doctorIdList = $scope.doctors.map(function (doctorItem) {
                    if (doctorItem.selected) {
                        return doctorItem.doctorId;
                    }
                    return null;
                });
            }

            doctorIdList.forEach(function (doctorId) {
                doctorsService.remove(doctorId).then(function (response) {
                    if (response.status === 200) {
                        $scope.doctors.forEach(function (doctorItem) {
                            if (doctorId === doctorItem.doctorId) {
                                var index = $scope.doctors.indexOf(doctorItem);
                                $scope.doctors.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = DoctorsController;
module.exports = exports['default'];

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FileBase64 = (function () {
    function FileBase64() {
        _classCallCheck(this, FileBase64);

        this.restrict = 'A';
        this.scope = {
            'b64': '='
        };
    }

    _createClass(FileBase64, [{
        key: 'link',
        value: function link(scope, element) {

            element.on('change', function () {
                var file = element.get(0).files[0];
                var reader = new FileReader();

                reader.onloadend = function () {
                    scope.$apply(function () {
                        scope.b64 = reader.result;
                    });
                };

                if (file) {
                    reader.readAsDataURL(file);
                } else {
                    scope.b64 = '';
                }
            });
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            FileBase64.instance = new FileBase64();
            return FileBase64.instance;
        }
    }]);

    return FileBase64;
})();

exports['default'] = FileBase64.directiveFactory;
module.exports = exports['default'];

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersDoctorsController = require('./controllers/doctorsController');

var _controllersDoctorsController2 = _interopRequireDefault(_controllersDoctorsController);

var _controllersDoctorDetailController = require('./controllers/doctorDetailController');

var _controllersDoctorDetailController2 = _interopRequireDefault(_controllersDoctorDetailController);

var _servicesDoctorsService = require('./services/doctorsService');

var _servicesDoctorsService2 = _interopRequireDefault(_servicesDoctorsService);

var _directivesFileDirective = require('./directives/fileDirective');

var _directivesFileDirective2 = _interopRequireDefault(_directivesFileDirective);

var moduleName = 'myHealth.doctors';

angular.module(moduleName, []).controller('doctorsController', _controllersDoctorsController2['default']).controller('doctorDetailController', _controllersDoctorDetailController2['default']).service('doctorsService', _servicesDoctorsService2['default']).directive('fileBase64', _directivesFileDirective2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/doctorDetailController":13,"./controllers/doctorsController":14,"./directives/fileDirective":15,"./services/doctorsService":17}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function DoctorsService($http) {
    'use strict';

    var doctors;

    return {
        getTenant: getTenant,
        getDoctor: getDoctor,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getDoctor(doctorId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/' + doctorId;
            return $http({
                method: 'GET',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            doctors = response.data;
            return doctors;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function add(doctor) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'POST',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function update(doctor) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/';
            return $http({
                method: 'PUT',
                url: url,
                data: doctor,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }

    function remove(doctorId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/doctors/' + doctorId;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = DoctorsService;
module.exports = exports['default'];

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PatientsController = function PatientsController($scope, $rootScope, patientsService, toasterService, modalService) {
    _classCallCheck(this, PatientsController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.patients = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        patientsService.getList(pageSize, pageCount).then(function (patients) {
            if (patients.length < pageSize) {
                $scope.noMoreData = true;
            }
            patients.forEach(function (patient) {
                $scope.patients.push(patient);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.patients.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.patients.forEach(function (patient) {
                patient.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.patients.some(function (patient) {
            return patient.selected;
        });

        $scope.everySelected = $scope.patients.every(function (patient) {
            return patient.selected;
        });
    };

    $scope.remove = function (patient) {
        var severalPatients = patient === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove patient' + (severalPatients ? 's' : ''),
                body: 'Are you sure you want to remove the selected patient' + (severalPatients ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var patientIdList;
            if (patient) {
                patientIdList = [patient.patientId];
            } else {
                patientIdList = $scope.patients.map(function (patientItem) {
                    if (patientItem.selected) {
                        return patientItem.patientId;
                    }
                    return null;
                });
            }

            patientIdList.forEach(function (patientId) {
                patientsService.remove(patientId).then(function (response) {
                    if (response.status === 200) {
                        $scope.patients.forEach(function (patientItem) {
                            if (patientId === patientItem.patientId) {
                                var index = $scope.patients.indexOf(patientItem);
                                $scope.patients.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = PatientsController;
module.exports = exports['default'];

},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersPatientsController = require('./controllers/patientsController');

var _controllersPatientsController2 = _interopRequireDefault(_controllersPatientsController);

var _servicesPatientsService = require('./services/patientsService');

var _servicesPatientsService2 = _interopRequireDefault(_servicesPatientsService);

var moduleName = 'myHealth.patients';

angular.module(moduleName, []).controller('patientsController', _controllersPatientsController2['default']).service('patientsService', _servicesPatientsService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/patientsController":18,"./services/patientsService":20}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function PatientsService($http) {
    'use strict';

    var patients;

    return {
        getList: getList,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            patients = response.data;
            return patients;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/patients';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function remove(patientId) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/patients/' + patientId;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = PatientsService;
module.exports = exports['default'];

},{}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var STATE = new WeakMap();

var HeaderController = function HeaderController($state, $rootScope, $http, $timeout) {
    var _this = this;

    _classCallCheck(this, HeaderController);

    var vm = this;
    STATE.set(this, $state);

    var stateChangeCalled = false;

    $timeout(function () {
        if (stateChangeCalled) {
            return;
        }
        _this.title = $state.current.name !== 'default' ? $state.current.name : '';
        vm.viewName = $state.current.name;
    }, 100);

    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
        stateChangeCalled = true;
        _this.title = toState.name !== 'default' ? toState.name : '';
        vm.viewName = toState.name;
        $rootScope.menuOpen = false;
    });

    $http({
        method: 'GET',
        url: '/api/users/current/user'
    }).then(function (response) {
        vm.userName = response.data;
    });

    $http({
        method: 'GET',
        url: '/api/users/current/claims'
    }).then(function (response) {
        vm.canManageUsers = response.data.ManageUsers || false;
        vm.canManageTenants = response.data.ManageTenants || false;
    });
};

HeaderController.$inject = ['$state', '$rootScope', '$http', '$timeout'];
exports['default'] = HeaderController;
module.exports = exports['default'];

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HeaderBar = (function () {
    function HeaderBar() {
        _classCallCheck(this, HeaderBar);

        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/headerBar/headerBarTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    _createClass(HeaderBar, [{
        key: 'link',
        value: function link(scope) {
            $(document).bind('click', function (event) {
                if (!scope.menuOpen) {
                    event.stopPropagation();
                } else {
                    scope.$apply(function () {
                        scope.menuOpen = false;
                    });
                }
            });

            $('.header-hamburguer, #sidebar-container').bind('click', function (event) {
                event.stopPropagation();
            });
        }
    }], [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            HeaderBar.instance = new HeaderBar();
            return HeaderBar.instance;
        }
    }]);

    return HeaderBar;
})();

exports['default'] = HeaderBar.directiveFactory;
module.exports = exports['default'];

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LeftMenu = (function () {
    function LeftMenu() {
        _classCallCheck(this, LeftMenu);

        this.restrict = 'E';
        this.templateUrl = '/app/components/shared/directives/leftMenu/leftMenuTemplate.html';
        this.controller = 'headerController';
        this.controllerAs = 'vm';
    }

    _createClass(LeftMenu, null, [{
        key: 'directiveFactory',
        value: function directiveFactory() {
            LeftMenu.instance = new LeftMenu();
            return LeftMenu.instance;
        }
    }]);

    return LeftMenu;
})();

exports['default'] = LeftMenu.directiveFactory;
module.exports = exports['default'];

},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function CamelCaseFilter() {
    'use strict';
    return function (input) {
        if (!input) {
            return input;
        }

        var list = input.match(/[A-Za-z][a-z]*/g);

        if (!list) {
            return input;
        }
        var result = list.join(' ');
        result = result.substr(0, 1).toUpperCase() + result.substr(1);
        return result;
    };
}

exports['default'] = CamelCaseFilter;
module.exports = exports['default'];

},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ExceptionHandler($injector) {
    'use strict';

    var handledExceptions = [];

    return function (exception) {
        if (handledExceptions.indexOf(exception) === -1) {
            appInsights.trackException(exception);
            $injector.get('toasterService').showServerError();
            handledExceptions.push(exception);
            console.warn('Unhandled Exception', exception);
        }
    };
}

exports['default'] = ExceptionHandler;
module.exports = exports['default'];

},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function InitialPage($http, $q) {
    'use strict';

    return {
        getInitialState: getInitialState
    };

    function getInitialState() {
        return $q(function (resolve, reject) {
            $http({
                method: 'GET',
                url: '/api/users/current/claims'
            }).then(function (response) {

                if (response.data.ManageUsers) {
                    resolve('users');
                } else if (response.data.ManageTenants) {
                    resolve('clinics');
                } else {
                    resolve('dashboard');
                }
            });
        });
    }
}

exports['default'] = InitialPage;
module.exports = exports['default'];

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ModalService($modal) {
    'use strict';

    return {
        showConfirmModal: showConfirmModal
    };

    function showConfirmModal(opts) {
        return $modal.open({

            templateUrl: '/app/components/shared/views/confirmModal.html',

            controller: ['$scope', '$modalInstance', function ($scope, $modalInstance) {

                $scope.messages = opts.messages;

                $scope.ok = function () {
                    $modalInstance.close();
                };

                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }]

        }).result;
    }
}

exports['default'] = ModalService;
module.exports = exports['default'];

},{}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function ToasterService(toaster) {
    'use strict';

    return {
        showServerError: showServerError
    };

    function showServerError(error) {
        toaster.pop('error', 'Error', typeof error === 'string' && error ? error : 'Oops! Something went wrong!');
    }
}

exports['default'] = ToasterService;
module.exports = exports['default'];

},{}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _directivesLeftMenuLeftMenuDirective = require('./directives/leftMenu/leftMenuDirective');

var _directivesLeftMenuLeftMenuDirective2 = _interopRequireDefault(_directivesLeftMenuLeftMenuDirective);

var _directivesHeaderBarHeaderBarDirective = require('./directives/headerBar/headerBarDirective');

var _directivesHeaderBarHeaderBarDirective2 = _interopRequireDefault(_directivesHeaderBarHeaderBarDirective);

var _controllersHeaderController = require('./controllers/headerController');

var _controllersHeaderController2 = _interopRequireDefault(_controllersHeaderController);

var _servicesToasterService = require('./services/toasterService');

var _servicesToasterService2 = _interopRequireDefault(_servicesToasterService);

var _servicesModalService = require('./services/modalService');

var _servicesModalService2 = _interopRequireDefault(_servicesModalService);

var _servicesInitialPageService = require('./services/initialPageService');

var _servicesInitialPageService2 = _interopRequireDefault(_servicesInitialPageService);

var _servicesExceptionHandler = require('./services/exceptionHandler');

var _servicesExceptionHandler2 = _interopRequireDefault(_servicesExceptionHandler);

var _filtersCamelCaseFilter = require('./filters/camelCaseFilter');

var _filtersCamelCaseFilter2 = _interopRequireDefault(_filtersCamelCaseFilter);

var moduleName = 'myHealth.shared';

angular.module(moduleName, ['ui.bootstrap', 'toaster']).directive('leftMenu', _directivesLeftMenuLeftMenuDirective2['default']).directive('headerBar', _directivesHeaderBarHeaderBarDirective2['default']).controller('headerController', _controllersHeaderController2['default']).service('toasterService', _servicesToasterService2['default']).service('modalService', _servicesModalService2['default']).service('initialPageService', _servicesInitialPageService2['default']).factory('$exceptionHandler', _servicesExceptionHandler2['default']).filter('camelCase', _filtersCamelCaseFilter2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/headerController":21,"./directives/headerBar/headerBarDirective":22,"./directives/leftMenu/leftMenuDirective":23,"./filters/camelCaseFilter":24,"./services/exceptionHandler":25,"./services/initialPageService":26,"./services/modalService":27,"./services/toasterService":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UserDetailController = function UserDetailController($scope, $rootScope, $stateParams, $state, usersService, toasterService, modalService) {
    _classCallCheck(this, UserDetailController);

    var username = $stateParams.username;
    $scope.editMode = username !== undefined;

    $scope.user = {};

    if ($scope.editMode) {
        $rootScope.loading = true;
        usersService.getUser(username).then(function (response) {
            $scope.user = response.data;
            $scope.user.Picture = 'data:image/png;base64,' + $scope.user.Picture;
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    }

    $scope.navigateBack = function () {
        $state.transitionTo('users');
    };

    $scope.removeUser = function () {
        modalService.showConfirmModal({
            messages: {
                title: 'Remove user',
                body: 'Are you sure you want to remove the user?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            $rootScope.loading = true;
            usersService.remove(username).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $state.transitionTo('users');
                } else {
                    toasterService.showServerError();
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        });
    };

    $scope.save = function () {
        if ($scope.user.Picture) {
            $scope.user.Picture = $scope.user.Picture.split(',')[1];
        }

        if (!$scope.editMode) {
            $rootScope.loading = true;
            usersService.add($scope.user).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        } else {
            $rootScope.loading = true;
            usersService.update($scope.user).then(function (response) {
                if (response.status === 200 && response.data.status) {
                    $scope.navigateBack();
                } else {
                    toasterService.showServerError(response.data.message);
                }
            })['catch'](function (error) {
                toasterService.showServerError(error);
            })['finally'](function () {
                $rootScope.loading = false;
            });
        }
    };
};

exports['default'] = UserDetailController;
module.exports = exports['default'];

},{}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var UsersController = function UsersController($scope, $rootScope, $state, usersService, toasterService, modalService) {
    _classCallCheck(this, UsersController);

    var pageSize = 4;
    var pageCount = 0;

    $scope.users = [];

    $scope.getList = function () {
        $rootScope.loading = true;
        usersService.getList(pageSize, pageCount).then(function (users) {
            if (users.length < pageSize) {
                $scope.noMoreData = true;
            }
            users.forEach(function (user) {
                $scope.users.push(user);
            });
            pageCount++;
            $scope.refreshSelectedItems();

            if (!$scope.users.length) {
                $scope.noData = true;
            }
        })['catch'](function (error) {
            toasterService.showServerError(error);
        })['finally'](function () {
            $rootScope.loading = false;
        });
    };

    $scope.nagivateToDetail = function (username) {
        username ? $state.transitionTo('user', { username: username }) : $state.transitionTo('user');
    };

    $scope.refreshSelectedItems = function (all) {
        if (all) {
            $scope.users.forEach(function (user) {
                user.selected = $scope.everySelected;
            });
        }

        $scope.anySelected = $scope.users.some(function (user) {
            return user.selected;
        });

        $scope.everySelected = $scope.users.every(function (user) {
            return user.selected;
        });
    };

    $scope.remove = function (user) {
        var severalUsers = user === undefined;

        modalService.showConfirmModal({
            messages: {
                title: 'Remove user' + (severalUsers ? 's' : ''),
                body: 'Are you sure you want to remove the selected user' + (severalUsers ? 's' : '') + '?',
                ok: 'Yes, remove',
                cancel: 'Cancel'
            }
        }).then(function () {
            var usernameList;
            if (user) {
                usernameList = [user.UserName];
            } else {
                usernameList = $scope.users.map(function (userItem) {
                    if (userItem.selected) {
                        return userItem.UserName;
                    }
                    return null;
                });
            }

            usernameList.forEach(function (username) {
                usersService.remove(username).then(function (response) {
                    if (response.status === 200) {
                        $scope.users.forEach(function (userItem) {
                            if (username === userItem.UserName) {
                                var index = $scope.users.indexOf(userItem);
                                $scope.users.splice(index, 1);
                            }
                        });
                    }
                })['catch'](function (error) {
                    toasterService.showServerError(error);
                });
            });

            $scope.refreshSelectedItems();
        });
    };

    $scope.getList();
};

exports['default'] = UsersController;
module.exports = exports['default'];

},{}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
function UsersService($http) {
    'use strict';

    var users;

    return {
        getUser: getUser,
        getList: getList,
        add: add,
        update: update,
        remove: remove
    };

    function getTenant() {
        return $http({
            method: 'GET',
            url: '/api/users/current/tenant'
        });
    }

    function getUser(username) {
        var url = '/api/users/' + username;
        return $http({
            method: 'GET',
            url: url
        });
    }

    function getList(pageSize, pageCount) {
        var handleSuccess = function handleSuccess(response) {
            users = response.data;
            return users;
        };

        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/users';
            return $http({
                method: 'GET',
                url: url,
                params: {
                    pageSize: pageSize,
                    pageCount: pageCount
                },
                headers: {
                    TenantId: tenantId
                }
            }).then(handleSuccess);
        });
    }

    function add(user) {
        var url = '/api/users/';
        return $http({
            method: 'POST',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function update(user) {
        var url = '/api/users/';
        return $http({
            method: 'PUT',
            url: url,
            data: {
                user: user,
                password: user.newPassword || null
            }
        });
    }

    function remove(username) {
        return getTenant().then(function (response) {
            var tenantId = response.data;
            var url = '/api/users/' + username;
            return $http({
                method: 'DELETE',
                url: url,
                headers: {
                    TenantId: tenantId
                }
            });
        });
    }
}

exports['default'] = UsersService;
module.exports = exports['default'];

},{}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _controllersUsersController = require('./controllers/usersController');

var _controllersUsersController2 = _interopRequireDefault(_controllersUsersController);

var _controllersUserDetailController = require('./controllers/userDetailController');

var _controllersUserDetailController2 = _interopRequireDefault(_controllersUserDetailController);

var _servicesUsersService = require('./services/usersService');

var _servicesUsersService2 = _interopRequireDefault(_servicesUsersService);

var moduleName = 'myHealth.users';

angular.module(moduleName, []).controller('usersController', _controllersUsersController2['default']).controller('userDetailController', _controllersUserDetailController2['default']).service('usersService', _servicesUsersService2['default']);

exports['default'] = moduleName;
module.exports = exports['default'];

},{"./controllers/userDetailController":30,"./controllers/usersController":31,"./services/usersService":32}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9hcHAuYm9vdHN0cmFwcGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvYXBwLm1vZHVsZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvY2xpbmljcy9jbGluaWNzLm1vZHVsZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvY2xpbmljcy9jb250cm9sbGVycy9jbGluaWNEZXRhaWxDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9jbGluaWNzL2NvbnRyb2xsZXJzL2NsaW5pY3NDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9jbGluaWNzL3NlcnZpY2VzL2NsaW5pY3NTZXJ2aWNlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kYWlseVJlcG9ydC9jb250cm9sbGVycy9kYWlseVJlcG9ydENvbnRyb2xsZXIuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2RhaWx5UmVwb3J0L2RhaWx5UmVwb3J0Lm1vZHVsZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2NvbnRyb2xsZXJzL2Rhc2hib2FyZENvbnRyb2xsZXIuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGlyZWN0aXZlcy9NSENoYXJ0RGlyZWN0aXZlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvc2VydmljZXMvZGFzaGJvYXJkU2VydmljZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9jb250cm9sbGVycy9kb2N0b3JEZXRhaWxDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2NvbnRyb2xsZXJzL2RvY3RvcnNDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9kb2N0b3JzL2RpcmVjdGl2ZXMvZmlsZURpcmVjdGl2ZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLm1vZHVsZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvZG9jdG9ycy9zZXJ2aWNlcy9kb2N0b3JzU2VydmljZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvY29udHJvbGxlcnMvcGF0aWVudHNDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9wYXRpZW50cy9wYXRpZW50cy5tb2R1bGUuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3BhdGllbnRzL3NlcnZpY2VzL3BhdGllbnRzU2VydmljZS5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbnRyb2xsZXJzL2hlYWRlckNvbnRyb2xsZXIuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3NoYXJlZC9kaXJlY3RpdmVzL2hlYWRlckJhci9oZWFkZXJCYXJEaXJlY3RpdmUuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3NoYXJlZC9kaXJlY3RpdmVzL2xlZnRNZW51L2xlZnRNZW51RGlyZWN0aXZlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvZmlsdGVycy9jYW1lbENhc2VGaWx0ZXIuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3NoYXJlZC9zZXJ2aWNlcy9leGNlcHRpb25IYW5kbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvaW5pdGlhbFBhZ2VTZXJ2aWNlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvbW9kYWxTZXJ2aWNlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvdG9hc3RlclNlcnZpY2UuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21wb25lbnRzL3NoYXJlZC9zaGFyZWQubW9kdWxlLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy91c2Vycy9jb250cm9sbGVycy91c2VyRGV0YWlsQ29udHJvbGxlci5qcyIsIkM6L1RlbXAvX2RlbGV0ZS9NeUhlYWx0aENsaW5pYy9zcmMvTXlIZWFsdGguV2ViL2NvbnRlbnQvYXBwL2NvbXBvbmVudHMvdXNlcnMvY29udHJvbGxlcnMvdXNlcnNDb250cm9sbGVyLmpzIiwiQzovVGVtcC9fZGVsZXRlL015SGVhbHRoQ2xpbmljL3NyYy9NeUhlYWx0aC5XZWIvY29udGVudC9hcHAvY29tcG9uZW50cy91c2Vycy9zZXJ2aWNlcy91c2Vyc1NlcnZpY2UuanMiLCJDOi9UZW1wL19kZWxldGUvTXlIZWFsdGhDbGluaWMvc3JjL015SGVhbHRoLldlYi9jb250ZW50L2FwcC9jb21w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O0FBQ25DLG1CQUFPLEtBQUssQ0FBQztBQUNULHNCQUFNLEVBQUUsUUFBUTtBQUNoQixtQkFBRyxFQUFFLEdBQUc7QUFDUix1QkFBTyxFQUFFO0FBQ0wsNEJBQVEsRUFBRSxRQUFRO2lCQUNyQjthQUNKLENBQUMsQ0FBQztTQUNOLENBQUMsQ0FBQztLQUNOO0NBQ0o7O3FCQUVjLFlBQVk7Ozs7Ozs7Ozs7OzswQ0N4RkMsK0JBQStCOzs7OytDQUMxQixvQ0FBb0M7Ozs7b0NBQzVDLHlCQUF5Qjs7OztBQUpqRCxJQUFJLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQzs7QUFNbkMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQzFCLFVBQVUsQ0FBQyxpQkFBaUIsMENBQWtCLENBQzlDLFVBQVUsQ0FBQyxzQkFBc0IsK0NBQXVCLENBQ3hELE9BQU8sQ0FBQyxjQUFjLG9DQUFlLENBQUM7O3FCQUUzQixVQUFVIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIu+7v2ltcG9ydCB7IGRlZmF1bHQgYXMgbXlIZWFsdGhNb2R1bGV9IGZyb20gJy4vYXBwLm1vZHVsZSc7XHJcblxyXG5hbmd1bGFyLmJvb3RzdHJhcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyksIFtteUhlYWx0aE1vZHVsZV0pOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoJztcclxuXHJcbmltcG9ydCBzaGFyZWRNb2R1bGVOYW1lIGZyb20gJy4vY29tcG9uZW50cy9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XHJcbmltcG9ydCBkYXNoYm9hcmRNb2R1bGVOYW1lIGZyb20gJy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZSc7XHJcbmltcG9ydCBkb2N0b3JzTW9kdWxlTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvZG9jdG9ycy9kb2N0b3JzLm1vZHVsZSc7XHJcbmltcG9ydCBwYXRpZW50c01vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL3BhdGllbnRzL3BhdGllbnRzLm1vZHVsZSc7XHJcbmltcG9ydCBkYWlseVJlcG9ydE1vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL2RhaWx5UmVwb3J0L2RhaWx5UmVwb3J0Lm1vZHVsZSc7XHJcbmltcG9ydCB1c2Vyc01vZHVsZU5hbWUgZnJvbSAnLi9jb21wb25lbnRzL3VzZXJzL3VzZXJzLm1vZHVsZSc7XHJcbmltcG9ydCBjbGluaWNzTW9kdWxlTmFtZSBmcm9tICcuL2NvbXBvbmVudHMvY2xpbmljcy9jbGluaWNzLm1vZHVsZSc7XHJcblxyXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgWyd1aS5yb3V0ZXInLCAnbmdBbmltYXRlJywgc2hhcmVkTW9kdWxlTmFtZSwgZGFzaGJvYXJkTW9kdWxlTmFtZSwgZG9jdG9yc01vZHVsZU5hbWUsIHBhdGllbnRzTW9kdWxlTmFtZSwgZGFpbHlSZXBvcnRNb2R1bGVOYW1lLCB1c2Vyc01vZHVsZU5hbWUsIGNsaW5pY3NNb2R1bGVOYW1lXSk7XHJcblxyXG5hcHAucnVuKHJ1bik7XHJcbmFwcC5jb25maWcoY29uZmlnKTtcclxuXHJcbmZ1bmN0aW9uIHJ1bigkc3RhdGUsIGluaXRpYWxQYWdlU2VydmljZSkge1xyXG4gICAgaW5pdGlhbFBhZ2VTZXJ2aWNlLmdldEluaXRpYWxTdGF0ZSgpLnRoZW4oZnVuY3Rpb24oaW5pdGlhbFN0YXRlKXtcclxuICAgICAgICAkc3RhdGUuZ28oaW5pdGlhbFN0YXRlLCB7fSwge2xvY2F0aW9uOiBcInJlcGxhY2VcIn0pOyBcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWcoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlciwgJGNvbXBpbGVQcm92aWRlcikge1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRVcmwgPSAnLyc7XHJcblxyXG4gICAgJGNvbXBpbGVQcm92aWRlci5kZWJ1Z0luZm9FbmFibGVkKGZhbHNlKTtcclxuXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIud2hlbignJywgZGVmYXVsdFVybCk7XHJcblxyXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLzQwNCcpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcbiAgICAgICAgLnN0YXRlKCdkZWZhdWx0Jywge1xyXG4gICAgICAgICAgICB1cmw6ICcvJyxcclxuICAgICAgICAgICAgdGVtcGxhdGU6ICcnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2Rhc2hib2FyZCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC92aWV3cy9tYWluLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOidkYXNoYm9hcmRDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdkb2N0b3JzJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvZG9jdG9ycycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL2RvY3RvcnMvdmlld3MvbWFpbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjonZG9jdG9yc0NvbnRyb2xsZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ2RvY3RvcicsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2RvY3Rvcj9pZCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL2RvY3RvcnMvdmlld3MvZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOidkb2N0b3JEZXRhaWxDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdwYXRpZW50cycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhdGllbnRzJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvcGF0aWVudHMvdmlld3MvbWFpbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjoncGF0aWVudHNDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdkYWlseVJlcG9ydCcsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2RhaWx5cmVwb3J0JyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvZGFpbHlSZXBvcnQvdmlld3MvbWFpbi5odG1sJyxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogJ2RhaWx5UmVwb3J0Q29udHJvbGxlcidcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgndXNlcnMnLCB7XHJcbiAgICAgICAgICAgIHVybDogJy91c2VycycsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3VzZXJzL3ZpZXdzL21haW4uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICd1c2Vyc0NvbnRyb2xsZXInXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuc3RhdGUoJ3VzZXInLCB7XHJcbiAgICAgICAgICAgIHVybDogJy91c2VyP3VzZXJuYW1lJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvdXNlcnMvdmlld3MvZGV0YWlsLmh0bWwnLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOid1c2VyRGV0YWlsQ29udHJvbGxlcidcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnY2xpbmljcycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2NsaW5pY3MnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9jbGluaWNzL3ZpZXdzL21haW4uaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjbGluaWNzQ29udHJvbGxlcidcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5zdGF0ZSgnY2xpbmljJywge1xyXG4gICAgICAgICAgICB1cmw6ICcvY2xpbmljP2lkJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvYXBwL2NvbXBvbmVudHMvY2xpbmljcy92aWV3cy9kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdjbGluaWNEZXRhaWxDb250cm9sbGVyJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXRlKCdlcnJvcicsIHtcclxuICAgICAgICAgICAgdXJsOiAnLzQwNCcsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL2FwcC9jb21wb25lbnRzL3NoYXJlZC92aWV3cy9lcnJvci5odG1sJ1xyXG4gICAgICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoLmNsaW5pY3MnO1xyXG5cclxuaW1wb3J0IENsaW5pY3NDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvY2xpbmljc0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgQ2xpbmljRGV0YWlsQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2NsaW5pY0RldGFpbENvbnRyb2xsZXInO1xyXG5pbXBvcnQgQ2xpbmljc1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9jbGluaWNzU2VydmljZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSkuXHJcbiAgICBjb250cm9sbGVyKCdjbGluaWNzQ29udHJvbGxlcicsIENsaW5pY3NDb250cm9sbGVyKS5cclxuICAgIGNvbnRyb2xsZXIoJ2NsaW5pY0RldGFpbENvbnRyb2xsZXInLCBDbGluaWNEZXRhaWxDb250cm9sbGVyKS5cclxuICAgIHNlcnZpY2UoJ2NsaW5pY3NTZXJ2aWNlJywgQ2xpbmljc1NlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTsiLCLvu79jbGFzcyBDbGluaWNEZXRhaWxDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlUGFyYW1zLCAkc3RhdGUsIGNsaW5pY3NTZXJ2aWNlLCB0b2FzdGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHZhciB0ZW5hbnRJZCA9ICRzdGF0ZVBhcmFtcy5pZDtcclxuICAgICAgICAkc2NvcGUuZWRpdE1vZGUgPSB0ZW5hbnRJZCAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAkc2NvcGUuY2xpbmljID0ge307XHJcblxyXG4gICAgICAgIGlmICgkc2NvcGUuZWRpdE1vZGUpIHtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2xpbmljc1NlcnZpY2UuZ2V0Q2xpbmljKHRlbmFudElkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNsaW5pYyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkc3RhdGUudHJhbnNpdGlvblRvKCdjbGluaWNzJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlbW92ZUNsaW5pYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWxTZXJ2aWNlLnNob3dDb25maXJtTW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlbW92ZSBjbGluaWMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBjbGluaWM/JyxcclxuICAgICAgICAgICAgICAgICAgICBvazogJ1llcywgcmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICBjbGluaWNzU2VydmljZS5yZW1vdmUodGVuYW50SWQpXHJcbiAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuc2F2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCEkc2NvcGUuZWRpdE1vZGUpIHtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmdJbmZvID0gYEdlbmVyYXRpbmcgZXhhbXBsZSBkYXRhLlxcclxcblRoaXMgY291bGQgdGFrZSBhIHdoaWxlLCBwbGVhc2Ugd2FpdC5gO1xyXG4gICAgICAgICAgICAgICAgY2xpbmljc1NlcnZpY2UuYWRkKCRzY29wZS5jbGluaWMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZ0luZm8gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNsaW5pY3NTZXJ2aWNlLnVwZGF0ZSgkc2NvcGUuY2xpbmljKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpbmljRGV0YWlsQ29udHJvbGxlcjsiLCLvu79jbGFzcyBDbGluaWNzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgY2xpbmljc1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSA0O1xyXG4gICAgICAgIHZhciBwYWdlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAkc2NvcGUuY2xpbmljcyA9IFtdO1xyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2xpbmljc1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGNsaW5pY3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xpbmljcy5sZW5ndGggPCBwYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9Nb3JlRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaW5pY3MuZm9yRWFjaCgoY2xpbmljKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWNzLnB1c2goY2xpbmljKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmNsaW5pY3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUubmFnaXZhdGVUb0RldGFpbCA9ICh0ZW5hbnRJZCkgPT4ge1xyXG4gICAgICAgICAgICB0ZW5hbnRJZCA/ICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2NsaW5pYycsIHsgaWQ6IHRlbmFudElkIH0pIDogJHN0YXRlLnRyYW5zaXRpb25UbygnY2xpbmljJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zID0gKGFsbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuY2xpbmljcy5mb3JFYWNoKChjbGluaWMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjbGluaWMuc2VsZWN0ZWQgPSAkc2NvcGUuZXZlcnlTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuYW55U2VsZWN0ZWQgPSAkc2NvcGUuY2xpbmljcy5zb21lKChjbGluaWMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbGluaWMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmV2ZXJ5U2VsZWN0ZWQgPSAkc2NvcGUuY2xpbmljcy5ldmVyeSgoY2xpbmljKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xpbmljLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVtb3ZlID0gKGNsaW5pYykgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2V2ZXJhbENsaW5pY3MgPSBjbGluaWMgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBSZW1vdmUgY2xpbmljJHtzZXZlcmFsQ2xpbmljcz8ncyc6Jyd9YCxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgc2VsZWN0ZWQgY2xpbmljJHtzZXZlcmFsQ2xpbmljcz8ncyc6Jyd9P2AsXHJcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVuYW50SWRMaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsaW5pYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudElkTGlzdCA9IFtjbGluaWMudGVuYW50SWRdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW5hbnRJZExpc3QgPSAkc2NvcGUuY2xpbmljc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChjbGluaWNJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2xpbmljSXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjbGluaWNJdGVtLnRlbmFudElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmdJbmZvID0gYFJlbW92aW5nIHRoZSBjbGluaWMke3NldmVyYWxDbGluaWNzPydzJzonJ30gYW5kIGFsbCB0aGUgcmVsYXRlZCBkYXRhLlxcclxcblRoaXMgY291bGQgdGFrZSBhIHdoaWxlLCBwbGVhc2Ugd2FpdC5gO1xyXG5cclxuICAgICAgICAgICAgICAgIHRlbmFudElkTGlzdC5mb3JFYWNoKCh0ZW5hbnRJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaW5pY3NTZXJ2aWNlLnJlbW92ZSh0ZW5hbnRJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuY2xpbmljcy5mb3JFYWNoKChjbGluaWNJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZW5hbnRJZCA9PT0gY2xpbmljSXRlbS50ZW5hbnRJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gJHNjb3BlLmNsaW5pY3MuaW5kZXhPZihjbGluaWNJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGluaWNzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmdJbmZvID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmdldExpc3QoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaW5pY3NDb250cm9sbGVyOyIsIu+7v2Z1bmN0aW9uIENsaW5pY3NTZXJ2aWNlKCRodHRwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGNsaW5pY3M7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDbGluaWMsXHJcbiAgICAgICAgZ2V0TGlzdCxcclxuICAgICAgICBhZGQsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUZW5hbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGluaWModGVuYW50SWQpIHtcclxuICAgICAgICBsZXQgdXJsID0gYC9hcGkvdGVuYW50cy8ke3RlbmFudElkfWA7XHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpIHtcclxuICAgICAgICBsZXQgaGFuZGxlU3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjbGluaWNzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGNsaW5pY3M7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvdGVuYW50cy9saXN0JztcclxuICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICBwYWdlQ291bnQ6cGFnZUNvdW50XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KS50aGVuKGhhbmRsZVN1Y2Nlc3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZCh0ZW5hbnQpIHtcclxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvdGVuYW50cy8nO1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdGVuYW50OiB0ZW5hbnQsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGVuYW50LnBhc3N3b3JkIHx8IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSh0ZW5hbnQpIHtcclxuICAgICAgICB2YXIgdXJsID0gJy9hcGkvdGVuYW50cy8nO1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB0ZW5hbnQ6IHRlbmFudCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0ZW5hbnQucGFzc3dvcmQgfHwgbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRlbmFudElkKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAvYXBpL3RlbmFudHMvJHt0ZW5hbnRJZH1gO1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENsaW5pY3NTZXJ2aWNlOyIsIu+7v2NsYXNzIERhaWx5UmVwb3J0Q29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKiBlbXB0eSAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEYWlseVJlcG9ydENvbnRyb2xsZXI7Iiwi77u/dmFyIG1vZHVsZU5hbWUgPSAnbXlIZWFsdGguZGFpbHlSZXBvcnQnO1xyXG5cclxuaW1wb3J0IERhaWx5UmVwb3J0Q29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2RhaWx5UmVwb3J0Q29udHJvbGxlcic7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSkuXHJcbiAgICBjb250cm9sbGVyKCdkYWlseVJlcG9ydENvbnRyb2xsZXInLCBEYWlseVJlcG9ydENvbnRyb2xsZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTsiLCLvu79jbGFzcyBEYXNoYm9hcmRDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgZGFzaGJvYXJkU2VydmljZSwgdG9hc3RlclNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIgPSB5ZWFyO1xyXG4gICAgICAgICRzY29wZS5wYXRpZW50c1llYXIgPSB5ZWFyO1xyXG4gICAgICAgICRzY29wZS5jdXJyZW50WWVhciA9IHllYXI7XHJcblxyXG4gICAgICAgICRzY29wZS5hZGRZZWFySW5jb21lc0V4cGVuc2VzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRZZWFyID4gJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5pbmNvbWVzRXhwZW5zZXNZZWFyICs9IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVkdWNlWWVhckluY29tZXNFeHBlbnNlcyA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIgLT0gMTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuYWRkWWVhclBhdGllbnRzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmN1cnJlbnRZZWFyID4gJHNjb3BlLnBhdGllbnRzWWVhcikge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBhdGllbnRzWWVhciArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlZHVjZVllYXJQYXRpZW50cyA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLnBhdGllbnRzWWVhciAtPSAxO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5jb3JyZWN0WWVhciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5jdXJyZW50WWVhciA8ICRzY29wZS5wYXRpZW50c1llYXIpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5wYXRpZW50c1llYXIgPSAkc2NvcGUuY3VycmVudFllYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCRzY29wZS5jdXJyZW50WWVhciA8ICRzY29wZS5pbmNvbWVzRXhwZW5zZXNZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuaW5jb21lc0V4cGVuc2VzWWVhciA9ICRzY29wZS5jdXJyZW50WWVhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBjcmVhdGVDaGFydERhdGFJbmNvbWVzRXhwZW5zZXMgPSAoZXhwZW5zZXMsIGluY29tZXMpID0+IHtcclxuICAgICAgICAgICAgJHNjb3BlLmNoYXJ0RGF0YUluY29tZXNFeHBlbnNlcyA9IHtcclxuICAgICAgICAgICAgICAgIHNjYWxlTGFiZWw6IGZ1bmN0aW9uICh2YWx1ZVBheWxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlUGF5bG9hZC52YWx1ZSkudG9GaXhlZC5yZXBsYWNlKCcuJywgJywnKSArICckJztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbHM6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddLFxyXG4gICAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSU5DT01FUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICdyZ2JhKDAsMjE2LDIwNCwwLjIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogJ3JnYmEoMCwyMTYsMjA0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGluY29tZXNcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdFWFBFTlNFUycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogICdyZ2JhKDI1NSwyMywxMTIsMC4yKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmdiYSgyNTUsMjMsMTEyLDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRDb2xvcjogJ3JnYmEoMjU1LDIzLDExMiwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICdyZ2JhKDI1NSwyMywxMTIsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodEZpbGw6ICdyZ2JhKDI1NSwyMywxMTIsMSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZXhwZW5zZXNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY3JlYXRlQ2hhcnREYXRhUGF0aWVudHMgPSBmdW5jdGlvbiAocGF0aWVudHMpIHtcclxuICAgICAgICAgICAgJHNjb3BlLmNoYXJ0RGF0YVBhdGllbnRzID0ge1xyXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXSxcclxuICAgICAgICAgICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BBVElFTlRTJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAgJ3JnYmEoMCwyMTYsMjA0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50Q29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50U3Ryb2tlQ29sb3I6ICdyZ2JhKDAsMjE2LDIwNCwxKScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50SGlnaGxpZ2h0RmlsbDogJ3JnYmEoMCwyMTYsMjA0LDEpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRIaWdobGlnaHRTdHJva2U6ICAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHBhdGllbnRzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZGFzaGJvYXJkU2VydmljZS5nZXRTdW1tYXJ5KClcclxuICAgICAgICAgICAgLnRoZW4oKHN1bW1hcnkpID0+IHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5zdW1tYXJ5ID0gc3VtbWFyeTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgJHNjb3BlLiR3YXRjaCgnaW5jb21lc0V4cGVuc2VzWWVhcicsIChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlIHx8IG9sZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZXhwZW5zZXMgPSBuZXcgQXJyYXkoMTIpO1xyXG4gICAgICAgICAgICAgICAgZXhwZW5zZXMuZmlsbCgwLCAwLCAxMyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5jb21lcyA9IG5ldyBBcnJheSgxMik7XHJcbiAgICAgICAgICAgICAgICBpbmNvbWVzLmZpbGwoMCwgMCwgMTMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZFNlcnZpY2UuZ2V0RXhwZW5zZXMoJHNjb3BlLmluY29tZXNFeHBlbnNlc1llYXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGFsbEV4cGVuc2VzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbEV4cGVuc2VzLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlbnNlc1tpbmRleF0gPSBlbGVtLmV4cGVuc2VzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jb21lc1tpbmRleF0gPSBlbGVtLmluY29tZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ2hhcnREYXRhSW5jb21lc0V4cGVuc2VzKGV4cGVuc2VzLCBpbmNvbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkc2NvcGUuJHdhdGNoKCdwYXRpZW50c1llYXInLCAobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSB8fCBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhdGllbnRzID0gbmV3IEFycmF5KDEyKTtcclxuICAgICAgICAgICAgICAgIHBhdGllbnRzLmZpbGwoMCwgMCwgMTMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZFNlcnZpY2UuZ2V0UGF0aWVudHMoJHNjb3BlLnBhdGllbnRzWWVhcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoYWxsUGF0aWVudHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUGF0aWVudHMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGllbnRzW2luZGV4XSA9IGVsZW0ucGF0aWVudHNDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVDaGFydERhdGFQYXRpZW50cyhwYXRpZW50cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udHJvbGxlcjsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC5kYXNoYm9hcmQnO1xyXG5cclxuaW1wb3J0IERhc2hib2FyZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9kYXNoYm9hcmRDb250cm9sbGVyJztcclxuaW1wb3J0IERhc2hib2FyZFNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kYXNoYm9hcmRTZXJ2aWNlJztcclxuaW1wb3J0IE1IQ2hhcnQgZnJvbSAnLi9kaXJlY3RpdmVzL01IQ2hhcnREaXJlY3RpdmUnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pLlxyXG4gICAgZGlyZWN0aXZlKCdjaGFydCcsIE1IQ2hhcnQpLlxyXG4gICAgY29udHJvbGxlcignZGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpLlxyXG4gICAgc2VydmljZSgnZGFzaGJvYXJkU2VydmljZScsIERhc2hib2FyZFNlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTsiLCLvu79jb25zdCBGSUxURVIgPSBuZXcgV2Vha01hcCgpO1xyXG5cclxuY2xhc3MgTUhDaGFydCB7XHJcbiAgICBjb25zdHJ1Y3RvcigkZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcclxuICAgICAgICB0aGlzLnNjb3BlID0ge1xyXG4gICAgICAgICAgICAnY2hhcnRkYXRhJyA6ICc9JyxcclxuICAgICAgICAgICAgJ2tpbmQnOiAnQCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIEZJTFRFUi5zZXQodGhpcywgJGZpbHRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbGluayAoc2NvcGUsIGVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJGaWx0ZXIgPSBGSUxURVIuZ2V0KE1IQ2hhcnQuaW5zdGFuY2UpKCdudW1iZXInKTtcclxuXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHNjYWxlU2hvd0dyaWRMaW5lcyA6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlR3JpZExpbmVDb2xvciA6ICdyZ2JhKDAsMCwwLC4wNSknLFxyXG4gICAgICAgICAgICBzY2FsZUdyaWRMaW5lV2lkdGggOiAxLFxyXG4gICAgICAgICAgICBzY2FsZVNob3dIb3Jpem9udGFsTGluZXM6IHRydWUsXHJcbiAgICAgICAgICAgIHNjYWxlU2hvd1ZlcnRpY2FsTGluZXM6IGZhbHNlLFxyXG4gICAgICAgICAgICBzY2FsZUxhYmVsOiBmdW5jdGlvbiAodmFsdWVQYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyRmlsdGVyKHZhbHVlUGF5bG9hZC52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJlemllckN1cnZlIDogdHJ1ZSxcclxuICAgICAgICAgICAgYmV6aWVyQ3VydmVUZW5zaW9uIDogMC40LFxyXG4gICAgICAgICAgICBwb2ludERvdCA6IGZhbHNlLFxyXG4gICAgICAgICAgICBwb2ludERvdFJhZGl1cyA6IDMsXHJcbiAgICAgICAgICAgIHBvaW50RG90U3Ryb2tlV2lkdGggOiAxLFxyXG4gICAgICAgICAgICBwb2ludEhpdERldGVjdGlvblJhZGl1cyA6IDIwLFxyXG4gICAgICAgICAgICBkYXRhc2V0U3Ryb2tlIDogdHJ1ZSxcclxuICAgICAgICAgICAgZGF0YXNldFN0cm9rZVdpZHRoIDogMixcclxuICAgICAgICAgICAgZGF0YXNldEZpbGwgOiB0cnVlLFxyXG4gICAgICAgICAgICBsZWdlbmRUZW1wbGF0ZSA6ICc8dWwgY2xhc3M9XCI8JT1uYW1lLnRvTG93ZXJDYXNlKCklPi1sZWdlbmRcIj48JSBmb3IgKHZhciBpPTA7IGk8ZGF0YXNldHMubGVuZ3RoOyBpKyspeyU+PGxpPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjo8JT1kYXRhc2V0c1tpXS5zdHJva2VDb2xvciU+XCI+PC9zcGFuPjwlaWYoZGF0YXNldHNbaV0ubGFiZWwpeyU+PCU9ZGF0YXNldHNbaV0ubGFiZWwlPjwlfSU+PC9saT48JX0lPjwvdWw+JyxcclxuICAgICAgICAgICAgdG9vbHRpcEZvbnRDb2xvcjogJyM3YzdjODEnLFxyXG4gICAgICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxyXG4gICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICBhbmltYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbkVhc2luZzogJ2Vhc2VPdXRRdWludCcsXHJcbiAgICAgICAgICAgIGN1c3RvbVRvb2x0aXBzOiAgZnVuY3Rpb24gY3VzdG9tVG9vbHRpcHModG9vbHRpcCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciAkdG9vbHRpcCA9ICQoJyNjaGFydC1jdXN0b210b29sdGlwJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEkdG9vbHRpcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoJzxkaXYgaWQ9XCJjaGFydC1jdXN0b210b29sdGlwXCIgY2xhc3M9XCJjaGFydC1jdXN0b210b29sdGlwXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAgPSAkKCcjY2hhcnRqcy1jdXN0b210b29sdGlwJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0b29sdGlwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5yZW1vdmVDbGFzcygnYWJvdmUgYmVsb3cgbm8tdHJhbnNmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9vbHRpcC55QWxpZ24pIHtcclxuICAgICAgICAgICAgICAgICAgICAkdG9vbHRpcC5hZGRDbGFzcyh0b29sdGlwLnlBbGlnbik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICR0b29sdGlwLmFkZENsYXNzKCduby10cmFuc2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodG9vbHRpcC50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAuaHRtbCh0b29sdGlwLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5uZXJIdG1sID0gYDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dG9vbHRpcC50aXRsZX08L2Rpdj5gO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9vbHRpcC5sYWJlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIdG1sICs9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2VjdGlvblwiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICAgPHNwYW4gY2xhc3M9XCJrZXlcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6JHt0b29sdGlwLmxlZ2VuZENvbG9yc1tpXS5maWxsfVwiPjwvc3Bhbj5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4kJHtudW1iZXJGaWx0ZXIodG9vbHRpcC5sYWJlbHNbaV0pfTwvc3Bhbj5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcclxuICAgICAgICAgICAgICAgICAgICAgICAgXS5qb2luKCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJHRvb2x0aXAuaHRtbChpbm5lckh0bWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvb2x0aXAueUFsaWduKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvb2x0aXAueUFsaWduID09PSAnYWJvdmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCA9IHRvb2x0aXAueSAtIHRvb2x0aXAuY2FyZXRIZWlnaHQgLSB0b29sdGlwLmNhcmV0UGFkZGluZztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPSB0b29sdGlwLnkgKyB0b29sdGlwLmNhcmV0SGVpZ2h0ICsgdG9vbHRpcC5jYXJldFBhZGRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAkKHRvb2x0aXAuY2hhcnQuY2FudmFzKS5vZmZzZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRvb2x0aXAud2lkdGggPyB0b29sdGlwLndpZHRoICsgJ3B4JyA6ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBvZmZzZXQubGVmdCArIHRvb2x0aXAueCArICdweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBvZmZzZXQudG9wICsgdG9wICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiB0b29sdGlwLmZvbnRGYW1pbHksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IHRvb2x0aXAuZm9udFNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFN0eWxlOiB0b29sdGlwLmZvbnRTdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjU1LCAyNTUsIDI1NSknLFxyXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgLjgpJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgY3R4ID0gZWxlbWVudC5nZXQoMCkuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgc2NvcGUuJHdhdGNoKCdjaGFydGRhdGEnLCBmdW5jdGlvbihuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiAhb2xkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5raW5kID09PSAnbGluZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdHguY2FudmFzLmhlaWdodCA9IDgwO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQgPSBuZXcgQ2hhcnQoY3R4KS5MaW5lKHNjb3BlLmNoYXJ0ZGF0YSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZ2VuZCA9IHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQuZ2VuZXJhdGVMZWdlbmQoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGVnZW5kSW5jb21lRXhwZW5zZXMnKS5pbm5lckhUTUwgPSBsZWdlbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmtpbmQgPT09ICdiYXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4LmNhbnZhcy5oZWlnaHQgPSA4MDtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5wYXRpZW50c0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCkuQmFyKHNjb3BlLmNoYXJ0ZGF0YSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAmJiBvbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmtpbmQgPT09ICdsaW5lJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoYXJ0ZGF0YS5kYXRhc2V0c1swXS5kYXRhLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQuZGF0YXNldHNbMF0ucG9pbnRzW2luZGV4XS52YWx1ZSA9IGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmNoYXJ0ZGF0YS5kYXRhc2V0c1sxXS5kYXRhLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQuZGF0YXNldHNbMV0ucG9pbnRzW2luZGV4XS52YWx1ZSA9IGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmluY29tZUV4cGVuc2VzQ2hhcnQudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmtpbmQgPT09ICdiYXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuY2hhcnRkYXRhLmRhdGFzZXRzWzBdLmRhdGEuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucGF0aWVudHNDaGFydC5kYXRhc2V0c1swXS5iYXJzW2luZGV4XS52YWx1ZSA9IGVsZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGF0aWVudHNDaGFydC51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBDaGFydC5kZWZhdWx0cy5nbG9iYWwucmVzcG9uc2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoJGZpbHRlcikge1xyXG4gICAgICAgIE1IQ2hhcnQuaW5zdGFuY2UgPSBuZXcgTUhDaGFydCgkZmlsdGVyKTtcclxuICAgICAgICByZXR1cm4gTUhDaGFydC5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuTUhDaGFydC5kaXJlY3RpdmVGYWN0b3J5LiRpbmplY3QgPSBbJyRmaWx0ZXInXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1IQ2hhcnQuZGlyZWN0aXZlRmFjdG9yeTsiLCLvu79mdW5jdGlvbiBEYXNoYm9hcmRTZXJ2aWNlKCRodHRwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRTdW1tYXJ5LFxyXG4gICAgICAgIGdldEV4cGVuc2VzLFxyXG4gICAgICAgIGdldFBhdGllbnRzXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1bW1hcnkoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdmFyIHN1bW1hcnkgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VtbWFyeTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdGVuYW50SWQgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvY2xpbmljc3VtbWFyeSc7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oaGFuZGxlU3VjY2Vzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RXhwZW5zZXMoeWVhcikge1xyXG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBleHBlbnNlcyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBleHBlbnNlcztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdGVuYW50SWQgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvZXhwZW5zZXMvJyArIHllYXI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oaGFuZGxlU3VjY2Vzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UGF0aWVudHMoeWVhcikge1xyXG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBwYXRpZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRpZW50cztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgdGVuYW50SWQgPSAnJztcclxuXHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL3JlcG9ydHMvcGF0aWVudHMvJyArIHllYXI7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oaGFuZGxlU3VjY2Vzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFNlcnZpY2U7Iiwi77u/Y2xhc3MgRG9jdG9yRGV0YWlsQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZVBhcmFtcywgJHN0YXRlLCBkb2N0b3JzU2VydmljZSwgdG9hc3RlclNlcnZpY2UsIG1vZGFsU2VydmljZSkge1xyXG5cclxuICAgICAgICB2YXIgZG9jdG9ySWQgPSAkc3RhdGVQYXJhbXMuaWQ7XHJcbiAgICAgICAgJHNjb3BlLmVkaXRNb2RlID0gZG9jdG9ySWQgIT09IHVuZGVmaW5lZDtcclxuICAgICAgICB2YXIgdGVuYW50SWQ7XHJcblxyXG4gICAgICAgICRzY29wZS5kb2N0b3IgPSB7XHJcbiAgICAgICAgICAgIENyZWF0ZWRBdDogbmV3IERhdGUoKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICgkc2NvcGUuZWRpdE1vZGUpIHtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UuZ2V0RG9jdG9yKGRvY3RvcklkKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRvY3RvciA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmRvY3Rvci5waWN0dXJlID0gYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwkeyRzY29wZS5kb2N0b3IucGljdHVyZX1gO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGRvY3RvcnNTZXJ2aWNlLmdldFRlbmFudCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRzY29wZS5uYXZpZ2F0ZUJhY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2RvY3RvcnMnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUubmFnaXZhdGVUb1BhdGllbnRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkc3RhdGUudHJhbnNpdGlvblRvKCdwYXRpZW50cycpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5yZW1vdmVEb2N0b3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZW1vdmUgZG9jdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgZG9jdG9yPycsXHJcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UucmVtb3ZlKGRvY3RvcklkKVxyXG4gICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2RvY3RvcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUuZG9jdG9yLnBpY3R1cmUpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5kb2N0b3IucGljdHVyZSA9ICRzY29wZS5kb2N0b3IucGljdHVyZS5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISRzY29wZS5lZGl0TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRvY3Rvci50ZW5hbnRJZCA9IHRlbmFudElkO1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3RvcnNTZXJ2aWNlLmFkZCgkc2NvcGUuZG9jdG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkb2N0b3JzU2VydmljZS51cGRhdGUoJHNjb3BlLmRvY3RvcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JEZXRhaWxDb250cm9sbGVyOyIsIu+7v2NsYXNzIERvY3RvcnNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHJvb3RTY29wZSwgJHN0YXRlLCBkb2N0b3JzU2VydmljZSwgdG9hc3RlclNlcnZpY2UsIG1vZGFsU2VydmljZSkge1xyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplID0gNDtcclxuICAgICAgICB2YXIgcGFnZUNvdW50ID0gMDtcclxuICAgICAgICAkc2NvcGUuZG9jdG9ycyA9IFtdO1xyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZG9jdG9yc1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRvY3RvcnMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ycy5sZW5ndGggPCBwYWdlU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9Nb3JlRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcnMuZm9yRWFjaCgoZG9jdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kb2N0b3JzLnB1c2goZG9jdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLmRvY3RvcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUubmFnaXZhdGVUb0RldGFpbCA9IChkb2N0b3JJZCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N0b3JJZCA/ICRzdGF0ZS50cmFuc2l0aW9uVG8oJ2RvY3RvcicsIHsgaWQ6IGRvY3RvcklkIH0pIDogJHN0YXRlLnRyYW5zaXRpb25UbygnZG9jdG9yJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zID0gKGFsbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUuZG9jdG9ycy5mb3JFYWNoKChkb2N0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3Iuc2VsZWN0ZWQgPSAkc2NvcGUuZXZlcnlTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuYW55U2VsZWN0ZWQgPSAkc2NvcGUuZG9jdG9ycy5zb21lKChkb2N0b3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N0b3Iuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmV2ZXJ5U2VsZWN0ZWQgPSAkc2NvcGUuZG9jdG9ycy5ldmVyeSgoZG9jdG9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdG9yLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVtb3ZlID0gKGRvY3RvcikgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2V2ZXJhbERvY3RvcnMgPSBkb2N0b3IgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBSZW1vdmUgZG9jdG9yJHtzZXZlcmFsRG9jdG9ycz8ncyc6Jyd9YCxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgc2VsZWN0ZWQgZG9jdG9yJHtzZXZlcmFsRG9jdG9ycz8ncyc6Jyd9P2AsXHJcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZG9jdG9ySWRMaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcklkTGlzdCA9IFtkb2N0b3IuZG9jdG9ySWRdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N0b3JJZExpc3QgPSAkc2NvcGUuZG9jdG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKChkb2N0b3JJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ySXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N0b3JJdGVtLmRvY3RvcklkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGRvY3RvcklkTGlzdC5mb3JFYWNoKChkb2N0b3JJZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3RvcnNTZXJ2aWNlLnJlbW92ZShkb2N0b3JJZClcclxuICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZG9jdG9ycy5mb3JFYWNoKChkb2N0b3JJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdG9ySWQgPT09IGRvY3Rvckl0ZW0uZG9jdG9ySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAkc2NvcGUuZG9jdG9ycy5pbmRleE9mKGRvY3Rvckl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5kb2N0b3JzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5nZXRMaXN0KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzQ29udHJvbGxlcjsiLCLvu79jbGFzcyBGaWxlQmFzZTY0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgJ2I2NCcgOiAnPSdcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsgKHNjb3BlLCBlbGVtZW50KSB7XHJcblxyXG4gICAgICAgIGVsZW1lbnQub24oJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZpbGUgPSBlbGVtZW50LmdldCgwKS5maWxlc1swXTtcclxuICAgICAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmI2NCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNjb3BlLmI2NCA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGRpcmVjdGl2ZUZhY3RvcnkoKSB7XHJcbiAgICAgICAgRmlsZUJhc2U2NC5pbnN0YW5jZSA9IG5ldyBGaWxlQmFzZTY0KCk7XHJcbiAgICAgICAgcmV0dXJuIEZpbGVCYXNlNjQuaW5zdGFuY2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVCYXNlNjQuZGlyZWN0aXZlRmFjdG9yeTsiLCLvu792YXIgbW9kdWxlTmFtZSA9ICdteUhlYWx0aC5kb2N0b3JzJztcclxuXHJcbmltcG9ydCBEb2N0b3JzQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL2RvY3RvcnNDb250cm9sbGVyJztcclxuaW1wb3J0IERvY3RvckRldGFpbENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9kb2N0b3JEZXRhaWxDb250cm9sbGVyJztcclxuaW1wb3J0IERvY3RvcnNTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvZG9jdG9yc1NlcnZpY2UnO1xyXG5pbXBvcnQgRmlsZUJhc2U2NCBmcm9tICcuL2RpcmVjdGl2ZXMvZmlsZURpcmVjdGl2ZSc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZShtb2R1bGVOYW1lLCBbXSkuXHJcbiAgICBjb250cm9sbGVyKCdkb2N0b3JzQ29udHJvbGxlcicsIERvY3RvcnNDb250cm9sbGVyKS5cclxuICAgIGNvbnRyb2xsZXIoJ2RvY3RvckRldGFpbENvbnRyb2xsZXInLCBEb2N0b3JEZXRhaWxDb250cm9sbGVyKS5cclxuICAgIHNlcnZpY2UoJ2RvY3RvcnNTZXJ2aWNlJywgRG9jdG9yc1NlcnZpY2UpLlxyXG4gICAgZGlyZWN0aXZlKCdmaWxlQmFzZTY0JywgRmlsZUJhc2U2NCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2R1bGVOYW1lOyIsIu+7v2Z1bmN0aW9uIERvY3RvcnNTZXJ2aWNlKCRodHRwKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGRvY3RvcnM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRUZW5hbnQsXHJcbiAgICAgICAgZ2V0RG9jdG9yLFxyXG4gICAgICAgIGdldExpc3QsXHJcbiAgICAgICAgYWRkLFxyXG4gICAgICAgIHVwZGF0ZSxcclxuICAgICAgICByZW1vdmVcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGVuYW50KCkge1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcnMvY3VycmVudC90ZW5hbnQnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0RG9jdG9yKGRvY3RvcklkKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgL2FwaS9kb2N0b3JzLyR7ZG9jdG9ySWR9YDtcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZVN1Y2Nlc3MgPSAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgZG9jdG9ycyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N0b3JzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycyc7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OnBhZ2VDb3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihoYW5kbGVTdWNjZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQoZG9jdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFRlbmFudCgpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIHRlbmFudElkID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgdmFyIHVybCA9ICcvYXBpL2RvY3RvcnMvJztcclxuICAgICAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkb2N0b3IsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZShkb2N0b3IpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycy8nO1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZG9jdG9yLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRlbmFudElkOiB0ZW5hbnRJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoZG9jdG9ySWQpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvZG9jdG9ycy8nICsgZG9jdG9ySWQ7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb2N0b3JzU2VydmljZTsiLCLvu79jbGFzcyBQYXRpZW50c0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCBwYXRpZW50c1NlcnZpY2UsIHRvYXN0ZXJTZXJ2aWNlLCBtb2RhbFNlcnZpY2UpIHtcclxuXHJcbiAgICAgICAgY29uc3QgcGFnZVNpemUgPSA0O1xyXG4gICAgICAgIHZhciBwYWdlQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAkc2NvcGUucGF0aWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgJHNjb3BlLmdldExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHBhdGllbnRzU2VydmljZS5nZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocGF0aWVudHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGF0aWVudHMubGVuZ3RoIDwgcGFnZVNpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5vTW9yZURhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50cy5mb3JFYWNoKChwYXRpZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5wYXRpZW50cy5wdXNoKHBhdGllbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudCArKztcclxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEkc2NvcGUucGF0aWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVmcmVzaFNlbGVjdGVkSXRlbXMgPSAoYWxsKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhbGwpIHtcclxuICAgICAgICAgICAgICAgICRzY29wZS5wYXRpZW50cy5mb3JFYWNoKChwYXRpZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudC5zZWxlY3RlZCA9ICRzY29wZS5ldmVyeVNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRzY29wZS5hbnlTZWxlY3RlZCA9ICRzY29wZS5wYXRpZW50cy5zb21lKChwYXRpZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aWVudC5zZWxlY3RlZDtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZXZlcnlTZWxlY3RlZCA9ICRzY29wZS5wYXRpZW50cy5ldmVyeSgocGF0aWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhdGllbnQuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICRzY29wZS5yZW1vdmUgPSAocGF0aWVudCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgc2V2ZXJhbFBhdGllbnRzID0gcGF0aWVudCA9PT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAgICAgbW9kYWxTZXJ2aWNlLnNob3dDb25maXJtTW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYFJlbW92ZSBwYXRpZW50JHtzZXZlcmFsUGF0aWVudHM/J3MnOicnfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgdGhlIHNlbGVjdGVkIHBhdGllbnQke3NldmVyYWxQYXRpZW50cz8ncyc6Jyd9P2AsXHJcbiAgICAgICAgICAgICAgICAgICAgb2s6ICdZZXMsIHJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGF0aWVudElkTGlzdDtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRpZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aWVudElkTGlzdCA9IFtwYXRpZW50LnBhdGllbnRJZF07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGllbnRJZExpc3QgPSAkc2NvcGUucGF0aWVudHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgocGF0aWVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXRpZW50SXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXRpZW50SXRlbS5wYXRpZW50SWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcGF0aWVudElkTGlzdC5mb3JFYWNoKChwYXRpZW50SWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRpZW50c1NlcnZpY2UucmVtb3ZlKHBhdGllbnRJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHMuZm9yRWFjaCgocGF0aWVudEl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdGllbnRJZCA9PT0gcGF0aWVudEl0ZW0ucGF0aWVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAkc2NvcGUucGF0aWVudHMuaW5kZXhPZihwYXRpZW50SXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUucGF0aWVudHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5yZWZyZXNoU2VsZWN0ZWRJdGVtcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudHNDb250cm9sbGVyOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoLnBhdGllbnRzJztcclxuXHJcbmltcG9ydCBQYXRpZW50c0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9wYXRpZW50c0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgUGF0aWVudHNTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvcGF0aWVudHNTZXJ2aWNlJztcclxuXHJcbmFuZ3VsYXIubW9kdWxlKG1vZHVsZU5hbWUsIFtdKS5cclxuICAgIGNvbnRyb2xsZXIoJ3BhdGllbnRzQ29udHJvbGxlcicsIFBhdGllbnRzQ29udHJvbGxlcikuXHJcbiAgICBzZXJ2aWNlKCdwYXRpZW50c1NlcnZpY2UnLCBQYXRpZW50c1NlcnZpY2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9kdWxlTmFtZTsiLCLvu79mdW5jdGlvbiBQYXRpZW50c1NlcnZpY2UoJGh0dHApIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgICB2YXIgcGF0aWVudHM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRMaXN0LFxyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUZW5hbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMaXN0KHBhZ2VTaXplLCBwYWdlQ291bnQpIHtcclxuICAgICAgICBsZXQgaGFuZGxlU3VjY2VzcyA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBwYXRpZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRpZW50cztcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gJy9hcGkvcGF0aWVudHMnO1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VDb3VudDpwYWdlQ291bnRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGVuYW50SWQ6IHRlbmFudElkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oaGFuZGxlU3VjY2Vzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHBhdGllbnRJZCkge1xyXG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIGxldCB1cmwgPSBgL2FwaS9wYXRpZW50cy8ke3BhdGllbnRJZH1gO1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRlbmFudElkOiB0ZW5hbnRJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGF0aWVudHNTZXJ2aWNlOyIsIu+7v2NvbnN0IFNUQVRFID0gbmV3IFdlYWtNYXAoKTtcclxuXHJcbmNsYXNzIEhlYWRlckNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHN0YXRlLCAkcm9vdFNjb3BlLCAkaHR0cCwgJHRpbWVvdXQpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG4gICAgICAgIFNUQVRFLnNldCh0aGlzLCAkc3RhdGUpO1xyXG5cclxuICAgICAgICB2YXIgc3RhdGVDaGFuZ2VDYWxsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgJHRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzdGF0ZUNoYW5nZUNhbGxlZCl7cmV0dXJuO31cclxuICAgICAgICAgICAgdGhpcy50aXRsZSA9ICRzdGF0ZS5jdXJyZW50Lm5hbWUgIT09ICdkZWZhdWx0JyA/ICRzdGF0ZS5jdXJyZW50Lm5hbWUgOiAnJztcclxuICAgICAgICAgICAgdm0udmlld05hbWUgPSAkc3RhdGUuY3VycmVudC5uYW1lO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsXHJcbiAgICAgICAgICAgIChlLCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZUNoYW5nZUNhbGxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gdG9TdGF0ZS5uYW1lICE9PSAnZGVmYXVsdCcgPyB0b1N0YXRlLm5hbWUgOiAnJztcclxuICAgICAgICAgICAgICAgIHZtLnZpZXdOYW1lID0gdG9TdGF0ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5tZW51T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6ICcvYXBpL3VzZXJzL2N1cnJlbnQvdXNlcidcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB2bS51c2VyTmFtZSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L2NsYWltcydcclxuICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB2bS5jYW5NYW5hZ2VVc2VycyA9IHJlc3BvbnNlLmRhdGEuTWFuYWdlVXNlcnMgfHwgZmFsc2U7XHJcbiAgICAgICAgICAgIHZtLmNhbk1hbmFnZVRlbmFudHMgPSByZXNwb25zZS5kYXRhLk1hbmFnZVRlbmFudHMgfHwgZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkhlYWRlckNvbnRyb2xsZXIuJGluamVjdCA9IFsnJHN0YXRlJywgJyRyb290U2NvcGUnLCAnJGh0dHAnLCAnJHRpbWVvdXQnXTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyQ29udHJvbGxlcjsiLCLvu79jbGFzcyBIZWFkZXJCYXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdFJztcclxuICAgICAgICB0aGlzLnRlbXBsYXRlVXJsID0gJy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZGlyZWN0aXZlcy9oZWFkZXJCYXIvaGVhZGVyQmFyVGVtcGxhdGUuaHRtbCc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gJ2hlYWRlckNvbnRyb2xsZXInO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgJChkb2N1bWVudCkuYmluZCgnY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFzY29wZS5tZW51T3Blbikge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzY29wZS4kYXBwbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLm1lbnVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuaGVhZGVyLWhhbWJ1cmd1ZXIsICNzaWRlYmFyLWNvbnRhaW5lcicpLmJpbmQoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBkaXJlY3RpdmVGYWN0b3J5KCkge1xyXG4gICAgICAgIEhlYWRlckJhci5pbnN0YW5jZSA9IG5ldyBIZWFkZXJCYXIoKTtcclxuICAgICAgICByZXR1cm4gSGVhZGVyQmFyLmluc3RhbmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJCYXIuZGlyZWN0aXZlRmFjdG9yeTsiLCLvu79jbGFzcyBMZWZ0TWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0UnO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVVcmwgPSAnL2FwcC9jb21wb25lbnRzL3NoYXJlZC9kaXJlY3RpdmVzL2xlZnRNZW51L2xlZnRNZW51VGVtcGxhdGUuaHRtbCc7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gJ2hlYWRlckNvbnRyb2xsZXInO1xyXG4gICAgICAgIHRoaXMuY29udHJvbGxlckFzID0gJ3ZtJztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGlyZWN0aXZlRmFjdG9yeSgpIHtcclxuICAgICAgICBMZWZ0TWVudS5pbnN0YW5jZSA9IG5ldyBMZWZ0TWVudSgpO1xyXG4gICAgICAgIHJldHVybiBMZWZ0TWVudS5pbnN0YW5jZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdE1lbnUuZGlyZWN0aXZlRmFjdG9yeTsiLCLvu79mdW5jdGlvbiBDYW1lbENhc2VGaWx0ZXIoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oaW5wdXQpIHtcclxuICAgICAgICBpZiAoIWlucHV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsaXN0ID0gaW5wdXQubWF0Y2goL1tBLVphLXpdW2Etel0qL2cpO1xyXG5cclxuICAgICAgICBpZiAoIWxpc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gbGlzdC5qb2luKCcgJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnN1YnN0cigxKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtZWxDYXNlRmlsdGVyOyIsIu+7v2Z1bmN0aW9uIEV4Y2VwdGlvbkhhbmRsZXIoJGluamVjdG9yKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgdmFyIGhhbmRsZWRFeGNlcHRpb25zID0gW107XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xyXG4gICAgICAgIGlmIChoYW5kbGVkRXhjZXB0aW9ucy5pbmRleE9mKGV4Y2VwdGlvbikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGFwcEluc2lnaHRzLnRyYWNrRXhjZXB0aW9uKGV4Y2VwdGlvbik7XHJcbiAgICAgICAgICAgICRpbmplY3Rvci5nZXQoJ3RvYXN0ZXJTZXJ2aWNlJykuc2hvd1NlcnZlckVycm9yKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZWRFeGNlcHRpb25zLnB1c2goZXhjZXB0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdVbmhhbmRsZWQgRXhjZXB0aW9uJywgZXhjZXB0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb25IYW5kbGVyOyIsIu+7v2Z1bmN0aW9uIEluaXRpYWxQYWdlKCRodHRwLCAkcSkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SW5pdGlhbFN0YXRlXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4gJHEoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuICAgICAgICAgICAgJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgIHVybDogJy9hcGkvdXNlcnMvY3VycmVudC9jbGFpbXMnXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuTWFuYWdlVXNlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCd1c2VycycpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2UuZGF0YS5NYW5hZ2VUZW5hbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnY2xpbmljcycpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgnZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbml0aWFsUGFnZTsiLCLvu79mdW5jdGlvbiBNb2RhbFNlcnZpY2UoJG1vZGFsKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93Q29uZmlybU1vZGFsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dDb25maXJtTW9kYWwob3B0cykge1xyXG4gICAgICAgIHJldHVybiAkbW9kYWwub3Blbih7XHJcblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9zaGFyZWQvdmlld3MvY29uZmlybU1vZGFsLmh0bWwnLFxyXG5cclxuICAgICAgICAgICAgY29udHJvbGxlcjogWyckc2NvcGUnLCAnJG1vZGFsSW5zdGFuY2UnLCBmdW5jdGlvbiAoJHNjb3BlLCAkbW9kYWxJbnN0YW5jZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlcyA9IG9wdHMubWVzc2FnZXM7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNjb3BlLm9rID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5jYW5jZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XVxyXG5cclxuICAgICAgICB9KS5yZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsU2VydmljZTsiLCLvu79mdW5jdGlvbiBUb2FzdGVyU2VydmljZSh0b2FzdGVyKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93U2VydmVyRXJyb3JcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd1NlcnZlckVycm9yKGVycm9yKSB7XHJcbiAgICAgICAgdG9hc3Rlci5wb3AoJ2Vycm9yJywgJ0Vycm9yJywgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgJiYgZXJyb3IpID8gZXJyb3IgOiAnT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvYXN0ZXJTZXJ2aWNlOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoLnNoYXJlZCc7XHJcblxyXG5pbXBvcnQgTGVmdE1lbnVEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmVzL2xlZnRNZW51L2xlZnRNZW51RGlyZWN0aXZlJztcclxuaW1wb3J0IEhlYWRlckJhckRpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvaGVhZGVyQmFyL2hlYWRlckJhckRpcmVjdGl2ZSc7XHJcbmltcG9ydCBIZWFkZXJDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvaGVhZGVyQ29udHJvbGxlcic7XHJcbmltcG9ydCBUb2FzdGVyU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL3RvYXN0ZXJTZXJ2aWNlJztcclxuaW1wb3J0IE1vZGFsU2VydmljZSBmcm9tICcuL3NlcnZpY2VzL21vZGFsU2VydmljZSc7XHJcbmltcG9ydCBJbml0aWFsUGFnZVNlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9pbml0aWFsUGFnZVNlcnZpY2UnO1xyXG5pbXBvcnQgRXhjZXB0aW9uSGFuZGxlciBmcm9tICcuL3NlcnZpY2VzL2V4Y2VwdGlvbkhhbmRsZXInO1xyXG5pbXBvcnQgQ2FtZWxDYXNlRmlsdGVyIGZyb20gJy4vZmlsdGVycy9jYW1lbENhc2VGaWx0ZXInO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgWyd1aS5ib290c3RyYXAnLCAndG9hc3RlciddKS5cclxuICAgIGRpcmVjdGl2ZSgnbGVmdE1lbnUnLCBMZWZ0TWVudURpcmVjdGl2ZSkuXHJcbiAgICBkaXJlY3RpdmUoJ2hlYWRlckJhcicsIEhlYWRlckJhckRpcmVjdGl2ZSkuXHJcbiAgICBjb250cm9sbGVyKCdoZWFkZXJDb250cm9sbGVyJywgSGVhZGVyQ29udHJvbGxlcikuXHJcbiAgICBzZXJ2aWNlKCd0b2FzdGVyU2VydmljZScsIFRvYXN0ZXJTZXJ2aWNlKS5cclxuICAgIHNlcnZpY2UoJ21vZGFsU2VydmljZScsIE1vZGFsU2VydmljZSkuXHJcbiAgICBzZXJ2aWNlKCdpbml0aWFsUGFnZVNlcnZpY2UnLCBJbml0aWFsUGFnZVNlcnZpY2UpLlxyXG4gICAgZmFjdG9yeSgnJGV4Y2VwdGlvbkhhbmRsZXInLCBFeGNlcHRpb25IYW5kbGVyKS5cclxuICAgIGZpbHRlcignY2FtZWxDYXNlJywgQ2FtZWxDYXNlRmlsdGVyKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Iiwi77u/Y2xhc3MgVXNlckRldGFpbENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkcm9vdFNjb3BlLCAkc3RhdGVQYXJhbXMsICRzdGF0ZSwgdXNlcnNTZXJ2aWNlLCB0b2FzdGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHZhciB1c2VybmFtZSA9ICRzdGF0ZVBhcmFtcy51c2VybmFtZTtcclxuICAgICAgICAkc2NvcGUuZWRpdE1vZGUgPSB1c2VybmFtZSAhPT0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICAkc2NvcGUudXNlciA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoJHNjb3BlLmVkaXRNb2RlKSB7XHJcbiAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHVzZXJzU2VydmljZS5nZXRVc2VyKHVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnVzZXIgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS51c2VyLlBpY3R1cmUgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7JHNjb3BlLnVzZXIuUGljdHVyZX1gO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjayA9ICgpID0+IHtcclxuICAgICAgICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbygndXNlcnMnKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVtb3ZlVXNlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWxTZXJ2aWNlLnNob3dDb25maXJtTW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1JlbW92ZSB1c2VyJyxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSB0aGUgdXNlcj8nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rOiAnWWVzLCByZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgIHVzZXJzU2VydmljZS5yZW1vdmUodXNlcm5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgJiYgcmVzcG9uc2UuZGF0YS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJHN0YXRlLnRyYW5zaXRpb25UbygndXNlcnMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnNhdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkc2NvcGUudXNlci5QaWN0dXJlKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudXNlci5QaWN0dXJlID0gJHNjb3BlLnVzZXIuUGljdHVyZS5zcGxpdCgnLCcpWzFdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoISRzY29wZS5lZGl0TW9kZSkge1xyXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHVzZXJzU2VydmljZS5hZGQoJHNjb3BlLnVzZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCAmJiByZXNwb25zZS5kYXRhLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNjb3BlLm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3RlclNlcnZpY2Uuc2hvd1NlcnZlckVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdXNlcnNTZXJ2aWNlLnVwZGF0ZSgkc2NvcGUudXNlcilcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IocmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJEZXRhaWxDb250cm9sbGVyOyIsIu+7v2NsYXNzIFVzZXJzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICRyb290U2NvcGUsICRzdGF0ZSwgdXNlcnNTZXJ2aWNlLCB0b2FzdGVyU2VydmljZSwgbW9kYWxTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhZ2VTaXplID0gNDtcclxuICAgICAgICB2YXIgcGFnZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgJHNjb3BlLnVzZXJzID0gW107XHJcblxyXG4gICAgICAgICRzY29wZS5nZXRMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAkcm9vdFNjb3BlLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB1c2Vyc1NlcnZpY2UuZ2V0TGlzdChwYWdlU2l6ZSwgcGFnZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHVzZXJzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJzLmxlbmd0aCA8IHBhZ2VTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5ub01vcmVEYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcnMucHVzaCh1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlQ291bnQgKys7XHJcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghJHNjb3BlLnVzZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUubm9EYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ZXJTZXJ2aWNlLnNob3dTZXJ2ZXJFcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLm5hZ2l2YXRlVG9EZXRhaWwgPSAodXNlcm5hbWUpID0+IHtcclxuICAgICAgICAgICAgdXNlcm5hbWUgPyAkc3RhdGUudHJhbnNpdGlvblRvKCd1c2VyJywgeyB1c2VybmFtZTogdXNlcm5hbWUgfSkgOiAkc3RhdGUudHJhbnNpdGlvblRvKCd1c2VyJyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJHNjb3BlLnJlZnJlc2hTZWxlY3RlZEl0ZW1zID0gKGFsbCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWxsKSB7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUudXNlcnMuZm9yRWFjaCgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXIuc2VsZWN0ZWQgPSAkc2NvcGUuZXZlcnlTZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuYW55U2VsZWN0ZWQgPSAkc2NvcGUudXNlcnMuc29tZSgodXNlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXIuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJHNjb3BlLmV2ZXJ5U2VsZWN0ZWQgPSAkc2NvcGUudXNlcnMuZXZlcnkoKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUucmVtb3ZlID0gKHVzZXIpID0+IHtcclxuICAgICAgICAgICAgdmFyIHNldmVyYWxVc2VycyA9IHVzZXIgPT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsU2VydmljZS5zaG93Q29uZmlybU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGBSZW1vdmUgdXNlciR7c2V2ZXJhbFVzZXJzPydzJzonJ31gLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVtb3ZlIHRoZSBzZWxlY3RlZCB1c2VyJHtzZXZlcmFsVXNlcnM/J3MnOicnfT9gLFxyXG4gICAgICAgICAgICAgICAgICAgIG9rOiAnWWVzLCByZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJuYW1lTGlzdDtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWVMaXN0ID0gW3VzZXIuVXNlck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZUxpc3QgPSAkc2NvcGUudXNlcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodXNlckl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VySXRlbS5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VySXRlbS5Vc2VyTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZUxpc3QuZm9yRWFjaCgodXNlcm5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB1c2Vyc1NlcnZpY2UucmVtb3ZlKHVzZXJuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS51c2Vycy5mb3JFYWNoKCh1c2VySXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUgPT09IHVzZXJJdGVtLlVzZXJOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAkc2NvcGUudXNlcnMuaW5kZXhPZih1c2VySXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUudXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2FzdGVyU2VydmljZS5zaG93U2VydmVyRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICRzY29wZS5yZWZyZXNoU2VsZWN0ZWRJdGVtcygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkc2NvcGUuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNDb250cm9sbGVyOyIsIu+7v2Z1bmN0aW9uIFVzZXJzU2VydmljZSgkaHR0cCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIHZhciB1c2VycztcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldFVzZXIsXHJcbiAgICAgICAgZ2V0TGlzdCxcclxuICAgICAgICBhZGQsXHJcbiAgICAgICAgdXBkYXRlLFxyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUZW5hbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgdXJsOiAnL2FwaS91c2Vycy9jdXJyZW50L3RlbmFudCdcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRVc2VyKHVzZXJuYW1lKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAvYXBpL3VzZXJzLyR7dXNlcm5hbWV9YDtcclxuICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICB1cmw6IHVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldExpc3QocGFnZVNpemUsIHBhZ2VDb3VudCkge1xyXG4gICAgICAgIGxldCBoYW5kbGVTdWNjZXNzID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJzID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJldHVybiBnZXRUZW5hbnQoKS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW5hbnRJZCA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSAnL2FwaS91c2Vycyc7XHJcbiAgICAgICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OnBhZ2VDb3VudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBUZW5hbnRJZDogdGVuYW50SWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihoYW5kbGVTdWNjZXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGQodXNlcikge1xyXG4gICAgICAgIHZhciB1cmwgPSAnL2FwaS91c2Vycy8nO1xyXG4gICAgICAgIHJldHVybiAkaHR0cCh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlcixcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB1c2VyLm5ld1Bhc3N3b3JkIHx8IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZSh1c2VyKSB7XHJcbiAgICAgICAgdmFyIHVybCA9ICcvYXBpL3VzZXJzLyc7XHJcbiAgICAgICAgcmV0dXJuICRodHRwKHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5uZXdQYXNzd29yZCB8fCBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUodXNlcm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZ2V0VGVuYW50KCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2YXIgdGVuYW50SWQgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gYC9hcGkvdXNlcnMvJHt1c2VybmFtZX1gO1xyXG4gICAgICAgICAgICByZXR1cm4gJGh0dHAoe1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFRlbmFudElkOiB0ZW5hbnRJZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNTZXJ2aWNlOyIsIu+7v3ZhciBtb2R1bGVOYW1lID0gJ215SGVhbHRoLnVzZXJzJztcclxuXHJcbmltcG9ydCBVc2Vyc0NvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91c2Vyc0NvbnRyb2xsZXInO1xyXG5pbXBvcnQgVXNlckRldGFpbENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy91c2VyRGV0YWlsQ29udHJvbGxlcic7XHJcbmltcG9ydCBVc2Vyc1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy91c2Vyc1NlcnZpY2UnO1xyXG5cclxuYW5ndWxhci5tb2R1bGUobW9kdWxlTmFtZSwgW10pLlxyXG4gICAgY29udHJvbGxlcigndXNlcnNDb250cm9sbGVyJywgVXNlcnNDb250cm9sbGVyKS5cclxuICAgIGNvbnRyb2xsZXIoJ3VzZXJEZXRhaWxDb250cm9sbGVyJywgVXNlckRldGFpbENvbnRyb2xsZXIpLlxyXG4gICAgc2VydmljZSgndXNlcnNTZXJ2aWNlJywgVXNlcnNTZXJ2aWNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZHVsZU5hbWU7Il19
