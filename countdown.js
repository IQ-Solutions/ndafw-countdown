/* Simple vanilla javascript countdown timer. */


// Function for calculating the time.
function timeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');

    function updateClock() {
        var t = timeRemaining(endtime);

        daysSpan.innerHTML = t.days;

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}


// Input the deadline to which we are counting down to. Format: yyyy-mm-dd
var deadline = '2016-12-31';


// Initialize the countdown.
initializeClock('countdown', deadline);