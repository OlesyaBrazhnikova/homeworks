/**task 1 */
const searchCandidatesByPhoneNumber = number => {
    return condidateArr.filter(item => item.phone.replace(/\s/g, '').includes(number));
}
console.log(searchCandidatesByPhoneNumber('+1(869)'));

/**task 2 */
const getCandidateById = id => {
    let getCandidate = condidateArr.find(item => item._id === id);
    let dateChange = getCandidate.registered.slice(0,10).split('-').reverse().join('-');
    getCandidate.registered = `${dateChange}`;
    return getCandidate;
}
console.log(getCandidateById('5e216bc9a6059760578aefa4'));


/**task 3 */
const sortCandidatesArr = sortBy => {
    condidateArr.forEach((item) => {
        let itemBalance = +item.balance.replace('$','').replace(',','').split('.')[0];
        item.balance = `${itemBalance}`;
    });

    if (sortBy === 'asc') {
        return condidateArr.sort((a, b) => {
            return a.balance - b.balance;
        })
    } else if (sortBy === 'desc') {
        return condidateArr.sort((a, b) => {
            return b.balance - a.balance;
        })
    } else {
        return condidateArr;
    }
};
console.log(sortCandidatesArr('asc'));

/**task 4 */
const getEyeColorMap = () => {
    let eyeColors = {};
    condidateArr.map(item => {
        if (eyeColors[item.eyeColor] === undefined) {
            Object.defineProperty(eyeColors, item.eyeColor, {enumerable:true, value:[]});
        } else {
            for (let color in eyeColors) {
                if (color === item.eyeColor) {
                    eyeColors[color].push(item);
                }
            }
        }
    });
    return eyeColors;
}
console.log(getEyeColorMap());