// /*Task 1*/
let countInputs = () => {
	var qtyInputs = prompt("Enter a number:");
	while (!/^[0-9]+$/.test(qtyInputs)) {
		alert("You did not enter a number.");
		qtyInputs = prompt("Enter a number: ");
	}
	let num = Number(qtyInputs);
	for(let i = 1; i <= num; i++) {
		let input = document.createElement('input');
        input.classList.add('input-item');
        input.value = `Input ${i}`
        if (i === num) {
            input.classList.add('margin-zero');
        }
        if ((i % 2)) {
            input.classList.add('bg-input');
        }
        if (!(i % 3)) {
            input.value = '';
            input.placeholder = 'Some text';
        }
		let btn = document.querySelector('.button');
		btn.before(input);
	}
}
countInputs();


/**Task 2*/
let div = document.createElement('div');
div.classList.add('blockTime');
document.body.append(div);
let h2 = document.createElement('h2');
h2.setAttribute('id', 'updatetime');
let btnStart = document.createElement('button');
btnStart.classList.add('start');
btnStart.innerText = 'Start';
let btnStop = document.createElement('button');
btnStop.classList.add('stop');
btnStop.innerText = 'Stop';
div.append(btnStart, btnStop);
div.append(h2);
const timer = () => {
    document.querySelector('#updatetime').textContent = new Date().toLocaleTimeString();
}
btnStart.addEventListener('click', () => {
    let interval = setInterval(timer, 100);
    btnStop.addEventListener('click', () => {
        clearInterval(interval);
    })
})
timer();

/**Task3 */
const colorBg = () => {
	let main = document.querySelector('#main');
	let lastChild = main.querySelector(':last-of-type');
	lastChild.setAttribute('style', 'background-color: red;');
}
colorBg();

const changeMain = () => {
	let mainChange = document.querySelector('#main');
	let footerChange = document.querySelector('#footer');
	console.log(mainChange);
	mainChange.parentNode.insertBefore(mainChange, footerChange);
}
changeMain();

/**Task4 */
const INGREDIENTS = {
	"cocoa": ["cocoa powder", "milk", "sugar"],
	"cappuccino": ["milk", "coffee"], "smoothie": ["banana", "orange", "sugar"],
	"matcha frappe": ["matcha", "milk", "ice"]
};
let menu = document.querySelector("#menu");
menu.addEventListener('click', function(ev) {
	let ol = ev.target.querySelector('ol');
	if (ol) {
		ol.parentNode.removeChild(ol);
	} else {
		let ulName = ev.target.textContent
		let ingredients = document.createElement('ol');
		ev.target.append(ingredients);

		INGREDIENTS[ulName].forEach(item => {
			let items = document.createElement('li');
			items.innerText = `${item}`;
			ingredients.append(items);
		})
	}
})