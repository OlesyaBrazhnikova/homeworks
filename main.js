/**Task 1 */
const removeUser = (arr, value) => {
	arr.splice(value, 1);
	console.log(arr);
}
removeUser(['Vasya', 'Petya', 'Alexey'], 0);

/**Task 2 */
const getAllKeys = (obj) => {
	return Object.keys(obj);
}
getAllKeys({ name: 'Vasya', age: 1});

/**Task 3 */
const getAllValues = (obj) => {
	return Object.values(obj);
}
getAllValues({ name: 'Vasya', age: 1});

/*Task 5*/
class Condidate {
    constructor(condidate) {
        this.condidate = condidate;
    }

    get state() {
        return this.getState();
    }

    getState() {
        return this.condidate.address.split(',')[2]
    }
}
const condidate = new Condidate(condidateArr[0]);
console.log(condidate.state);

/*Task 6*/
const getCompanyNames = (arr) => {
    const companyNames = [];
    for (let value of arr) {
        if (!companyNames.includes(value.company)) {
            companyNames.push(value.company)
        }
    }
    return companyNames;
}
console.log(getCompanyNames(condidateArr));

/*Task 7*/
const getUsersByYear = (year) => {
    const id = [];
    for (let value of condidateArr) {
        if (String(year) === value.registered.split('-')[0]) {
            id.push(value._id);
        } else {
            return 'This year not found';
        }
    }
    return id;
}
console.log(getUsersByYear(2017));

/*Task 8*/
const getCondidatesByUnreadMsg = (msg) => {
    let candidates = [];
    for (let value of condidateArr) {
        let temp = '';
		value.greeting.split(' ').map(item => {
            if (Number(item)) {
                temp = item;
            } else {
				return true;
			}
        });
        if (msg === +temp) {
            candidates.push(value)
        }
    }

    return candidates;
}
console.log(getCondidatesByUnreadMsg(8));

/*Task 9*/
const getCondidatesByGender = (gender) => {
	const getGender = [];
    condidateArr.map(item => {
        if (item.gender === gender) {
            getGender.push(item);
        }
    })
    return getGender;
}
console.log(getCondidatesByGender('male'));