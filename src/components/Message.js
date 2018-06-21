import React from 'react';
import moment from 'moment';
import now from '../utils/now';

import styles from '../assets/sass/Message.module.scss';

const Message = ({ startBeforeToday, endBeforeToday, totalCost, selectedDay, endDate }) => {
	let today = now();
	let start = moment(endDate);
	let end = moment(selectedDay);
	let diffEnd = start.diff(today, 'days');
	let diffStart = end.diff(today, 'days');

	let startingDate = moment(selectedDay).format('MM/DD');
	let endingDate = moment(endDate).format('MM/DD');

	if (totalCost) {
		if (`${selectedDay}` === `${endDate}`) {
			if (diffEnd === 1 && diffStart === 1) {
				return <p className={ styles.msg }>Tomorrow you will spend ${ totalCost } on bananas.</p>;
			}
			if (diffEnd === -1 && diffStart === -1) {
				return <p className={ styles.msg }>Yesterday you spent ${ totalCost } on bananas.</p>;
			}
			if (diffEnd === 0 && diffStart === 0) {
				return <p className={ styles.msg }>Today you spent ${ totalCost } on bananas.</p>;
			}
			if (diffEnd > 0 && diffStart > 0) {
				return <p className={ styles.msg }>In { diffEnd } you will spent ${ totalCost } on bananas.</p>;
			}
			if (diffEnd < 0 && diffStart < 0) {
				return <p className={ styles.msg }>{ -diffEnd } days ago you spent ${ totalCost } on bananas.</p>;
			}
		}
		if (!startBeforeToday && !endBeforeToday) {
			return <p className={ styles.msg }>Including { startingDate } you spent ${ totalCost } on bananas.</p>;
		}
		if (startBeforeToday && endBeforeToday) {
			return <p className={ styles.msg }>Including { startingDate } you will spend ${ totalCost } on bananas.</p>;
		}

		return <p className={ styles.msg }>From { startingDate } to { endingDate } you will spend ${ totalCost } on bananas.</p>;
	}

	return null;
};

export default Message;
