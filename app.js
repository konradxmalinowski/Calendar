const dayOfWeekHTML = document.getElementById('dayOfWeek');
const dayOfMonthHTML = document.getElementById('dayOfMonth');
const yearHTML = document.getElementById('year');
const monthHTML = document.getElementById('month');

function getMonthName(month) {
    switch (month) {
        case 1: 
            return 'January';
        case 2:
            return 'Fenruary';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'Oktober';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            console.error('Wrong number of month');
            return;
    }
}

function getDayName(dayOfWeek) {
    switch (dayOfWeek) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wendesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            console.error('Wrong number of day');
    }
}

function updateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const dayOfMonth = date.getDate();
    const dayOfWeek = date.getDay();

    monthHTML.textContent = getMonthName(month);
    dayOfWeekHTML.textContent = getDayName(dayOfWeek);
    dayOfMonthHTML.textContent = dayOfMonth;
    yearHTML.textContent = year;
}

updateTime();