import React from 'react';
import classNames from 'classnames';
import DateRangePicker from './DateRangePicker';
import MediaQuery from './HOC/MediaQuery';

import styles from '../assets/sass/Main.module.scss';

const Main = (props) => {
	const { windowSize } = props;

	const columnWidth = () => (
		classNames({
			[styles.center_8_of_12]: windowSize >= 600,
			[styles.center_12_of_12]: windowSize < 600,
		})
	);

	return (
		<div className={ styles.grid }>
			<div className={ styles.row }>
				<div className={ columnWidth() }>
					<DateRangePicker />
				</div>
			</div>
		</div>
	);
};

export default MediaQuery(Main);