/** 1 **/
function Employee(employee) {
    Object.assign(this, employee);
}
const employeeObj = new Employee(employeeArr[0]);

/** 2 **/
Employee.prototype.getFullName = function () {
    return this.surname + ' ' + this.name;
}
employeeObj.getFullName();

/** 3 **/
let createEmployeesFromArr = (arr) => {
    let newEmployeeArr = [];
    for (let key of arr) {
        const oneEmployee = new Employee(key);
        newEmployeeArr.push(oneEmployee);
    }
    return newEmployeeArr;
};
const employeeConstructArr = createEmployeesFromArr(employeeArr);

/** 4 **/
const getFullNamesFromArr = (arr) => {
    let fullNamesArr = [];
    for (let key of arr) {
        fullNamesArr.push(key.getFullName());
    }
    return fullNamesArr;
}
const arrayOfFullNames = getFullNamesFromArr(employeeConstructArr);

/** 5 **/
const getMiddleSalary = (arr) => {
     return Math.round(arr.reduce((accumulator, currentValue) => {return accumulator + currentValue.salary},0)/arr.length);
}
const middleSalaryOfEmployee = getMiddleSalary(employeeConstructArr);

/** 6 **/
const getRandomEmployee = (arr) => {
     return arr[Math.floor(Math.random() * arr.length)];
}
const randomElement = getRandomEmployee(employeeConstructArr);

/** 7 **/
class Emploee {
    constructor() {
        Object.assign(this, employeeArr[0]);
    }
    get fullInfo() {
        const array = [];
        for (let key in this) {
            array.push(key + ' - ' + this[key])
        }
        return array.join(", ")
    }
    set fullInfo(value) {
        for (let key in value) {
            if (this.hasOwnProperty(key)) {
                this[key] = value[key]
            }
        }
    }
}
const employeeObject = new Emploee(employeeArr[0]);
employeeObject.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'}