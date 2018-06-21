import React from 'react';
import classNames from 'classnames';
import styles from '../../assets/sass/Button.module.scss';

const Button = ({ type, disabled, value, icon, handleClick, iconSide, btnFloat }) => {

	const _getClassNames = (styles) => (
		classNames(styles.btn, {
			[styles.btn_big]: type === 'big',
			[styles.btn_round]: type === 'round',
			[styles.btn_bigRound]: type === 'bigRound',
			[styles.btn_disabled]: disabled === true,
			[styles.iLeft]: iconSide === 'left',
			[styles.iRight]: iconSide === 'right',
			[styles.bLeft]: btnFloat === 'left',
			[styles.bRight]: btnFloat === 'right',
			[styles.bNone]: btnFloat === 'none',
		})
	);

	return (
		<button
			onClick={ handleClick }
			className={ _getClassNames(styles) }
		>
			{ icon && <i className={ styles.btn__icon }>{ icon }</i> }
			<div className={ styles.btn__value }>{ value }</div>
		</button>
	)
};

export default Button;