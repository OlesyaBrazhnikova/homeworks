/**TASK 1**/
for (var i = 1; i <= 10; i++) {
	if (i % 3 === 0) {
		console.log('FizBuz');
	}
	else if (i % 2 == 0) {
		console.log('Fiz');
	} else if (i % 2 != 0) {
		console.log('Buz');
	}
}

/**TASK 2**/
let inputNumber = prompt('Enter an integer');
let total = 1;
for (i = 1; i <= inputNumber; ++i){
	total = total * i;
}
console.log(inputNumber + '! = ' + total);

/**TASK 3**/
const sheetInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let resultReamsOfPaper = (consumptionPerWeek * weeksAmount) / sheetInReamPaper;

/**TASK 4**/
const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
function flat(flatNumber) {
	let porchRoomsNumber = roomsOnFloor * floors;
	let porch = 1 + (flatNumber - 1)/porchRoomsNumber;
	let floor = 1 + ((flatNumber - 1) % porchRoomsNumber)/roomsOnFloor;
	console.log(porch, floor);
}
flat(456);

/**TASK 5**/
function pyramid(numbersOfLine) {
	for(let i = 1; i <= numbersOfLine; i++){
		let str = '-'.repeat(numbersOfLine - i);
		let str2 = '#'.repeat(i * 2 - 1)
		console.log(str + str2 + str);
	}
}
pyramid(8);