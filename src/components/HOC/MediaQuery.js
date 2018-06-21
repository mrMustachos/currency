import React, { Component } from 'react';

const MediaQueryHOC = (WrappedComponent) => (
	class MediaQueryHOC extends Component {
		state = { windowSize: window.innerWidth }
		handleWindowResize = () => {
			this.setState({ windowSize: window.innerWidth });
		}
		componentDidMount() {
			window.addEventListener('resize', this.handleWindowResize);
		}
		componentWillUnmount() {
			window.removeEventListener('resize', this.handleWindowResize);
		}
		render() {
			return <WrappedComponent { ...this.props } { ...this.state } />
		}
	}
);

export default MediaQueryHOC;