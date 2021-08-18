/**Task 1**/
function counter (num) {
    let result = num;
    counter = function() {
        let arg = arguments[0] ? arguments[0] : 0;
        return result = result + arg;
    };
    return counter();
}
console.log(counter(3));
console.log(counter(5));
console.log(counter(228));


/**Task 2**/
function getUpdateArr(){
    let result = [];
    getUpdateArr = function(value) {
        if(value === null || value === undefined) {
            result = [];
        } else {
            result.push(value);
        }
        return result;
    }
    return getUpdateArr();
}
console.log(getUpdateArr(3));
console.log(getUpdateArr(5));
console.log(getUpdateArr({name: 'Vasya'}));
console.log(getUpdateArr());
console.log(getUpdateArr(4));


/**Task 3**/
function getTime() {
let endTime,
    startTime = 0;
    getTime = function() {
        if (startTime === 0) {
            startTime = new Date().getTime();
            return 'Enabled';
        } else {
            endTime = Math.round((new Date().getTime() - startTime)/ 1000);
            startTime = new Date().getTime();
            return endTime;
        }
    }
}
getTime();


/**Task 4**/
const timer = time => {
    let result = setInterval(() => {
        let minutes = Math.round(time / 60);
        let seconds = time % 60;
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (time === 0) {
            clearInterval(result);
            console.log('Time End');
        } else {
            console.log(minutes + ':' + seconds);
        }
        time--;
    }, 1000);
};
timer();