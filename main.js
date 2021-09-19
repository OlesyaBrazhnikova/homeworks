const events = [
	{start: 0, duration: 15, title: 'Exercise'},
	{start: 25, duration: 30, title: 'Travel to work'},
	{start: 30, duration: 30, title: 'Plan day'},
	{start: 60, duration: 15, title: 'Review yesterday\'s commits'},
	{start: 100, duration: 15, title: 'Code review'},
	{start: 180, duration: 90, title: 'Have lunch with John'},
	{start: 360, duration: 30, title: 'Skype call'},
	{start: 370, duration: 45, title: 'Follow up with designer'},
	{start: 405, duration: 30, title: 'Push up branch'},
]

let calendar = function (from, to) {
  let wrapper = document.querySelector('.wrap');
  let startHour = from * 60;
  let countOfHours = to - from;
  for (let i = 0; i <= countOfHours; i++) {
    let halfHour = `<div>${startHour / 60}:30</div>`;
    let html = `<div class='event'>
                   <div class='time'>
                     <div>${startHour / 60}:00</div>
                     ${i === countOfHours ? "" : halfHour}
                   </div>
                  <div class='items' data-count=${i}>
                  </div>
                </div>`;
    startHour += 60;
    wrapper.insertAdjacentHTML('beforeend', html);
  }
}

let addEvents = function (events) {
  document.forms.delete.remove.innerHTML = '';
  let wrapper = Array.from(document.querySelectorAll('.items'));
  wrapper.forEach((item) => (item.innerHTML = ''));
  events.forEach(({ start, duration, title }, idx) => {
    let searchElement = wrapper.find((item) => {
      if (+item.dataset.count === Math.trunc(start / 60)) {
        return item;
      }
    });
    let div = document.createElement('div');
    div.className = 'item';
    div.textContent = title;
    div.style.height = `${duration * 2}px`;
    div.style.top = `${(start % 60) * 2}px`;
    searchElement.append(div);
    document.forms.delete.remove.insertAdjacentHTML('beforeend', `<option value=${idx}>${title}</option>`);
  });
}

let executionForm = function (e) {
  e.preventDefault();
  if (e.target.name === 'add') {
    let titleOfEvent = document.querySelector('#title').value;
    let timeOfEventBeg = document.querySelector('#start').value;
    let timeOfEventEnd = document.querySelector('#end').value;
    let newEvent = {
      start: timeOfEventBeg,
      duration: timeOfEventEnd - timeOfEventBeg,
      title: titleOfEvent || 'Add new event',
    };
    events.push(newEvent);
    addEvents(events);
  }
  if (e.target.name === 'delete') {
    let option = Array.from(remove.options).filter((el) => el.selected);
	console.log(option);
    if (option.length >= 1) {
      option.forEach((el) => events.splice(el.value, 1));
    }
    addEvents(events);
  }
}
document.addEventListener('submit', executionForm);
calendar(8, 17);
addEvents(events);



// const events = [
// 	{start: 0, end: 15, duration: 15, title: 'Exercise'},
// 	{start: 25, end: 55, duration: 30, title: 'Travel to work'},
// 	{start: 30, end: 60, duration: 30, title: 'Plan day'},
// 	{start: 60, end: 75, duration: 15, title: 'Review yesterday\'s commits'},
// 	{start: 100, end: 115, duration: 15, title: 'Code review'},
// 	{start: 180, end: 270, duration: 90, title: 'Have lunch with John'},
// 	{start: 360, end: 390, duration: 30, title: 'Skype call'},
// 	{start: 370, end: 415, duration: 45, title: 'Follow up with designer'},
// 	{start: 405, end: 435, duration: 30, title: 'Push up branch'},
// ]
// const calendar = function (dates) {
// 	factor = 2;
// 	dates.forEach(function (item, idx, obj) {
// 		let itemDuration = factor * (item.end - item.start),
// 		itemTop = factor * item.start,
// 		prevItem = obj[idx - 1],
// 		nextItem = obj[idx + 1],
// 		newDiv = document.createElement('div');
// 		item.direction = 'left';
	
// 		if (nextItem && item.end > nextItem.start) {
// 			item.overlap = true;
// 			nextItem.overlap = true;
// 		}
// 		if (prevItem && prevItem.direction === 'left') {
// 			item.direction = 'right';
// 		}
// 		item.overlap && newDiv.setAttribute('class', 'split ' + item.direction || '');
// 		newDiv.setAttribute('style', 'height:' + itemDuration + 'px; top:' + itemTop + 'px');
		
// 		newDiv.innerText = idx + ': ' + item.title;

// 		document.getElementById('calendar').appendChild(newDiv);
// 	});
// };
// calendar(events);