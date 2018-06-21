import moment from 'moment';

export default (startDate, total) => {
	let newEndDate = moment(startDate).add(total, 'days');
	return newEndDate._d;
}
