ko.bindingHandlers.datepicker = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        var options = allBindingsAccessor().datepickerOptions || {};

        function detectDataType() {
            var initialValue = ko.utils.unwrapObservable(valueAccessor());
            var type = typeof initialValue;
            if (type === 'string') {
                return 'iso';
            } else if (type === 'object' && Object.prototype.toString.call(initialValue) === "[object Date]") {
                return 'date'
            } else if (type === 'object' && initialValue.daysInMonth && initialValue.year && initialValue.toDate) {
                return 'moment';
            }
        }
        var dataType = options.dataType || detectDataType();
        var getMethod = dataType == 'iso' ? 'getIso'
            : dataType == 'moment' ? 'getMoment'
            : dataType == 'text' ? 'getFormated'
            : 'getDate';

        var $el = $(element).datepicker(options);

        ko.utils.registerEventHandler(element, "changeDate", function (event) {
            var accessor = valueAccessor();
            if (ko.isObservable(accessor)) {
                var value = $el.datepicker(getMethod);
                accessor(value);
            }
        });
    },
    update: function (element, valueAccessor) {
        var value = ko.utils.unwrapObservable(valueAccessor());
        $(element).datepicker('set', value);
    }
};