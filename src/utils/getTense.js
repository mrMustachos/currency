import moment from 'moment';
import now from './now';

export default (startDate) => {
	let today = now();
	let isAfter = moment(startDate).isAfter(today);
	let isSame = moment(startDate).isSame(today);

	if (isSame) return 'same';
	return isAfter;
}
