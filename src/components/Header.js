import React from 'react';
import styles from '../assets/sass/Header.module.scss';
import logo from '../assets/images/banana_logo.svg';

const Message = () => (
	<header className={ styles.header }>
		<div className={ styles.grid }>
			<div className={ styles.row }>
				<div className={ styles.col_12_of_12 }>
					<img src={ logo } className={ styles.logo } alt="logo" />
					<h1 className={ styles.title }>Bob's Banana Budget</h1>
				</div>
			</div>
		</div>
	</header>
);

export default Message;