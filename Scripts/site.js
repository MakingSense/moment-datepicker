/// <reference path="typings/underscore/underscore.d.ts" />
/// <reference path="typings/moment/moment.d.ts" />
/// <reference path="typings/knockout/knockout.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="typings/bootstrap/bootstrap.d.ts" />
/// <reference path="../moment-datepicker/moment-datepicker.d.ts" />

$(function () {
    window.prettyPrint && window.prettyPrint();
    moment.locale('en');

    var model = {
        birthdayIso: ko.observable('1978-12-02'),
        birthdayFormat: ko.observable('2/12/78'),
        birthdayDate: ko.observable(new Date('1978-12-02T00:00:00')),
        birthdayMoment: ko.observable(moment('1978-12-02T00:00:00')),
        birthdayThisYearMoment: ko.observable(moment('2013-12-02T00:00:00'))
    };

    ko.applyBindings(model);

    $('#dp1').datepicker({
        format: 'MM-DD-YYYY',
        autoHide: false
    });
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp3').datepicker();
    $('#dp6').datepicker();
    $('#dpYears').datepicker();
    $('#dpMonths').datepicker();

    var startDate = moment([2012, 1, 20]);
    var endDate = moment([2012, 1, 25]);
    var $dp4 = $('#dp4').datepicker();
    $dp4.on('changeDate', function (ev) {
        var date = $dp4.datepicker('get');
        $('#startDate').text($dp4.datepicker('getAsText'));
        if ((date && date.valueOf()) > (endDate && endDate.valueOf())) {
            $('#alert').show().find('strong').text('The start date cannot be after the end date');
        } else {
            $('#alert').hide();
            startDate = date;
        }
        $dp4.datepicker('hide');
    });
    var $dp5 = $('#dp5').datepicker();
    $dp5.on('changeDate', function (ev) {
        var date = $dp5.datepicker('get');
        $('#endDate').text($dp5.datepicker('getAsText'));
        if ((date && date.valueOf()) < (startDate && startDate.valueOf())) {
            $('#alert').show().find('strong').text('The end date cannot be before the start date');
        } else {
            $('#alert').hide();
            endDate = date;
        }
        $dp5.datepicker('hide');
    });
});
//# sourceMappingURL=site.js.map
