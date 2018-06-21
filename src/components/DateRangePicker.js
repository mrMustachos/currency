import React, { Component, Fragment } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import Message from './Message';
import Button from './UI/Button';

import getTotalCost from '../utils/getTotalCost';
import getFutureDate from '../utils/getFutureDate';
import getTense from '../utils/getTense';

import 'react-day-picker/lib/style.css';
import '../assets/sass/DateRangePicker.scss';

class DatePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedDay: undefined,
			endDate: undefined,
			tense: undefined,
			totalCost: undefined,
			totalDays: undefined,
			startBeforeToday: undefined,
			endBeforeToday: undefined,
		};

		this.handleDayChange = this.handleDayChange.bind(this);
		this.handleTotalDaysChange = this.handleTotalDaysChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearMessage = this.clearMessage.bind(this);
	}

	clearMessage() {
		this.setState({
			totalCost: undefined,
			startBeforeToday: undefined,
			endBeforeToday: undefined,
		});
	}

	handleDayChange(selectedDay) {
		const { totalDays } = this.state;
		this.clearMessage();

		if (totalDays) {
			this.setState({ endDate: getFutureDate(selectedDay, totalDays) });
		}

		this.setState({ selectedDay });
	}

	handleTotalDaysChange(event) {
		const { selectedDay } = this.state;
		let totalDays = event.target.value;
		this.clearMessage();

		if (selectedDay) {
			this.setState({ endDate: getFutureDate(selectedDay, totalDays) });
		}

		this.setState({ totalDays });
	}

	handleSubmit(event) {
		const { totalDays, selectedDay, endDate } = this.state;

		this.setState({
			totalCost: getTotalCost(selectedDay, totalDays),
			startBeforeToday: getTense(selectedDay),
			endBeforeToday: getTense(endDate)
		});

		event.preventDefault();
	}

	render() {
		const { selectedDay, totalDays, startBeforeToday, endBeforeToday, totalCost, endDate } = this.state;
		return (
			<Fragment>
				<form onSubmit={ this.handleSubmit }>
					<label>
						<span>Start Date:</span>
						<DayPickerInput
							formatDate={ formatDate }
							parseDate={ parseDate }
							onDayChange={ this.handleDayChange }
							dayPickerProps={{ selectedDays: selectedDay }}
							placeholder=""
						/>
					</label>
					<label>
						<span>Total Days:</span>
						<input
							type="text"
							value={ !totalDays ? '' : totalDays }
							onChange={ this.handleTotalDaysChange }
						/>
					</label>
					<div className="btnBar">
						<Button
							value={ 'Calculate' }
							icon={ 'show_chart' }
							iconSide={ 'right' }
							disabled={ selectedDay && totalDays ? false : true }
						/>
					</div>
				</form>
				<Message
					startBeforeToday={ startBeforeToday }
					endBeforeToday={ endBeforeToday }
					totalCost={ totalCost }
					selectedDay={ selectedDay }
					endDate={ endDate }
				/>
			</Fragment>
		);
	}
};

export default DatePicker;
