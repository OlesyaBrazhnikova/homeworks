/**TASK 1 hw2**/
const citiesAndCountries = {
	'Киев': 'Украина',
	'Нью-Йорк': 'США',
	'Амстердам': 'Нидерланды',
	'Берлин': 'Германия',
	'Париж': 'Франция',
	'Лиссабон': 'Португалия',
	'Вена': 'Австрия',
};
let result = [];
for (let capital of Object.keys(citiesAndCountries)) {
    var country = citiesAndCountries[capital];
	let temp = capital +' - это ' + country; 
	result.push(temp);
}
console.log(result);

/**TASK 2 hw2**/
function getArray(num){
	const array = [], result = [], length = 3;
	for (let i = 1; i <= num; i++) {
		array.push(i);
	} while(array.length) {
		result.push(array.splice(0,length));
	}
	console.log(result);
}
getArray(9);

/**TASK 3 hw2**/
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' , 'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}
function getNameOfDay(lang, day) {
	return namesOfDays[lang][day - 1];
}
console.log(getNameOfDay('en', 5));
console.log(getNameOfDay('ru', 5));

/**TASK 4 hw2**/
function minSumOfPair(arr) {
	let min = Number.MAX_VALUE,
		secondMin = Number.MAX_VALUE;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			secondMin = min;
			min = arr[i];
		} else if ((arr[i] < secondMin) && arr[i] !== min) {
			secondMin = arr[i];
		}
	}
	return secondMin + min;
}
console.log((minSumOfPair([ 19, 5, 42, 2, 77 ])));

/**TASK 5 hw2**/
const binaryToDecimal = (arr) => {
	let result = 0;
    let bits = 1;
    for(let i = 0; i < arr.length; i++) {
        let currrentNum = +(arr[arr.length - i - 1]);
        if(currrentNum === 1) {
            result += bits;
        }
        bits *= 2;
    }
    return result;
}
console.log(binaryToDecimal([1,1,1,1]));