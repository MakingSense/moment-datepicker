$(function () {
    window.prettyPrint && window.prettyPrint();
    moment.lang('en');
    var model = {
        birthday: ko.observable('02/12/1978')
    };
    ko.applyBindings(model);
    $('#dp1').datepicker({
        format: 'MM-DD-YYYY'
    });
    $('#dp2').datepicker();
    $('#dp3').datepicker();
    $('#dp3').datepicker();
    $('#dpYears').datepicker();
    $('#dpMonths').datepicker();
    var startDate = new Date(2012, 1, 20);
    var endDate = new Date(2012, 1, 25);
    var $dp4 = $('#dp4').datepicker();
    $dp4.on('changeDate', function (ev) {
        var date = $dp4.datepicker('getDate');
        if(date.valueOf() > endDate.valueOf()) {
            $('#alert').show().find('strong').text('The start date can not be greater then the end date');
        } else {
            $('#alert').hide();
            startDate = date;
            $('#startDate').text($dp4.datepicker('getFormated'));
        }
        $dp4.datepicker('hide');
    });
    var $dp5 = $('#dp5').datepicker();
    $dp5.on('changeDate', function (ev) {
        var date = $dp5.datepicker('getDate');
        if(date.valueOf() < startDate.valueOf()) {
            $('#alert').show().find('strong').text('The end date can not be less then the start date');
        } else {
            $('#alert').hide();
            endDate = date;
            $('#endDate').text($dp5.datepicker('getFormated'));
        }
        $dp5.datepicker('hide');
    });
});
