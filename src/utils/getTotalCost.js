import moment from 'moment';

export default (start, totalDays) => {
	let totalCost = 0;

	for (var i = 0; i < totalDays; i++) {
		let isWeekend = moment(start).format('dddd') !== 'Saturday' && moment(start).format('dddd') !== 'Sunday';
		let date = moment(start).format('DD');

		if (isWeekend) {
			if (date > 0 && date <= 7) {
				totalCost += 0.05;
			} else if (date > 7 && date <= 14) {
				totalCost += 0.10;
			} else if (date > 14 && date <= 21) {
				totalCost += 0.15;
			} else if (date > 21 && date <= 28) {
				totalCost += 0.20;
			} else {
				totalCost += 0.25;
			}
		}

		let nextDay = moment(start).add(1, 'days');
		start = nextDay._d;
	}

	return totalCost.toFixed(2);
}
