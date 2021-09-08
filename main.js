/**Task 1*/
let min = 1;
let max = 6;
const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		let number = Math.floor(Math.random() * (max - min + 1)) + min;
		if (min <= number < max) {
			console.log('Start the game...');
			res(number);
		} else if (number === max) {
			rej('Error');
		}
	}, 2000);
  }).then((value) => {
	  if (value !== min) {
		console.log('Go ' + value + ' steps');
	  } else {
		console.log('Stay here');
	  }
  }).catch(() => console.log('Error'));

/**Task 2*/
class ProductError extends Error {
	constructor(message) {
	  super(message);
	  this.name = 'Product Error';
	}
}
let products = ['bread', 'butter', 'cheese', 'sour cream', 'milk', 'kefir', 'cottage cheese', 'cookies', 'rolls', 'chocolate'];
function goToShop(items) {
	return new Promise((res, rej) => res(items.length)
)};
function makeDinner() {
	return new Promise((res, rej) => {
		setTimeout(()=>{
			res('Bon Appetit')
		}, 3000)
	})
}
goToShop(products).then(quantity => {
	if (quantity < 4) {
		return new Promise((res, rej) => rej('Too low products'));
	} else {
		makeDinner().then(value => console.log(value));
	}
}).catch(error => {
    throw new ProductError(error);
})