///<reference path="moment.d.ts" />
///<reference path='jquery.d.ts' />
///<reference path="Knockout.d.ts" />
///<reference path="../moment-datepicker/moment-datepicker.d.ts" />


interface Window extends ViewCSS, MSEventAttachmentTarget, MSWindowExtensions, WindowPerformance, ScreenView, EventTarget, WindowLocalStorage, WindowSessionStorage, WindowTimers {
    prettyPrint: () => void;
}

$(function () {
    window.prettyPrint && window.prettyPrint();
    moment.lang('en');
    //moment.lang('es');

    var model = {
        birthday: ko.observable('02/12/1978')
        };

    //ko.applyBindings(model);

    $('#dp1').datepicker({
        format: 'MM-DD-YYYY'
    });
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp3').datepicker();
    $('#dpYears').datepicker();
    $('#dpMonths').datepicker();


    var startDate = moment([2012, 1, 20]);
    var endDate = moment([2012, 1, 25]);
    var $dp4 = $('#dp4').datepicker();
    $dp4.on('changeDate', function (ev) {
        var date = $dp4.datepicker('get');
        $('#startDate').text($dp4.datepicker('getAsText'));
        if ((date && date.valueOf()) > (endDate && endDate.valueOf())) {
            $('#alert').show().find('strong').text('The start date can not be greater then the end date');
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
            $('#alert').show().find('strong').text('The end date can not be less then the start date');
        } else {
            $('#alert').hide();
            endDate = date;
        }
        $dp5.datepicker('hide');
    });
});