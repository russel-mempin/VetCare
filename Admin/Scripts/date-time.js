const timePicker = document.querySelector('#timepicker');
const datePicker = document.querySelector('#datepicker');

datePicker.addEventListener('change', function (e) {
    console.log('checking to disable dates');
    checkAndUpdateTimePicker();
    timePicker.value = '';
});

function checkAndUpdateTimePicker() {
    if (new Date(datePicker.value).toLocaleDateString() == new Date().toLocaleDateString()) {
        document.querySelectorAll('#timepicker option').forEach(opt => {
            console.log(opt.value);
            let optHour = opt.value.split('.')[0];
            let optMinute = opt.value.split('.')[1];

            let currentHour = new Date().getHours();
            let currentMinute = new Date().getMinutes();
            let currentDate = new Date().getDate();

            if (optHour == currentDate) {
                opt.disabled = true;
            }
            if (optHour < currentHour) {
                opt.disabled = true;
                opt.dataset.description = 'Please scroll to choose a different time, this time has passed.';
            }
        });
    } else {
        document.querySelectorAll('#timepicker option').forEach(opt => {
            opt.disabled = false;
        });
    }
}
datePicker.min = `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().length == 1 ? '0' : ''}${new Date().getMonth() + 1}-${new Date().getDate().toString().length == 1 ? '0' : ''}${new Date().getDate()}`;