$(document).foundation();

var deadline = '11/10/2016';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)) % 24),
        days = Math.floor(t/(1000*60*60*24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime){
    var clock = document.getElementById(id),
        daysSpan = clock.querySelector('.days'),
        hoursSpan = clock.querySelector('.hours'),
        minutesSpan = clock.querySelector('.minutes'),
        secondsSpan = clock.querySelector('.seconds');

    function updateClock(){
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total<=0){
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('countdown', deadline);

var granimInstance = new Granim({
    element: '#radial-gradient',
    name: 'radial-gradient',
    direction: 'radial',
    opacity: [.8, .5, 0],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#A11326', '#EC1C40'],
                ['#F2AE30', '#F28F16'],
                ['#DDE80C', '#749A0D']
            ]
        }
    }
});
