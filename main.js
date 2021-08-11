/**Task 2**/
class Validator {

    checkIsEmail(email) {
        let pattern = /^([\w\d_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return pattern.test(email);
    }

    checkIsDomain(domain) {
		const pattern = /^([\w-]+\.)+\w+$/;
        return pattern.test(domain);
    }

    checkIsDate(date) {
		const pattern = /(?<day>[\d]{2})[.\/](?<month>[\d]{2})[.\/](?<year>[\d]{4})/g
		return pattern.test(date);
    }

    checkIsPhone(phone) {
		const pattern = /^\+38?\s[^\w\d]\d{3}[^\w\d]\s\d{3}[^\w\d]\d{2}[^\w\d]\d{2}$/;
        return pattern.test(phone);
    }
}

let validator = new Validator();
console.log(validator.checkIsEmail('vasya.pupkin@gmail.com'));
console.log(validator.checkIsDomain('google.com'));
console.log(validator.checkIsDate('30.11.2019'));
console.log(validator.checkIsPhone('+38 (066) 937-99-92'));

/**Task 3**/
class CustomString {

	reverse(str) {
		let reverseStr = '';
		for(let i = str.length - 1; i >= 0; i--){
			reverseStr += str[i]
		}
		return reverseStr;
	}

	ucFirst(str) {
		if (!str) {
			return str;
		} else {
			return str[0].toUpperCase() + str.slice(1);
		}
	}

	ucWords(str) {
		const arr = str.split(" ");
		for (var i = 0; i < arr.length; i++) {
			arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		}
		const res = arr.join(" ");
		return res;
	}
}
const myString = new CustomString();
console.log(myString.reverse('qwerty'));
console.log(myString.ucFirst('qwerty'));
console.log(myString.ucWords('qwerty qwerty qwerty'));