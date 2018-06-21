import moment from 'moment';

export default () => {
	let today = moment();
	let timeStr = '12:00:00:00';
	let time = moment(timeStr, 'HH:mm');

	today.set({
		hour:   time.get('hour'),
		minute: time.get('minute'),
		second: time.get('second'),
		millisecond: time.get('millisecond'),
	});
	return today._d;
}
