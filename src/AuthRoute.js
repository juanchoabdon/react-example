import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from 'containers/loading/Loading';
import customer from 'api/customer';

class AuthRoute extends React.Component {

	async componentWillMount() {
		await customer.get();
	}
 
	render() {
		const { auth, component: Component, pending, logged, ...rest } = this.props;

		return (
			<Route {...rest} render={props => {

				if (pending) return <Loading/>
				if (auth) {
					return logged
						? <Component {...props} />
						: <Redirect to="/" />
				}
				return logged
						? <Redirect to="/app" />
						: <Component {...props} />

			}} />
		)
	}

}

const stateToProps = ({ loggedCustomerState }) => ({
	pending: loggedCustomerState.pending,
	logged: loggedCustomerState.logged,
	customer: loggedCustomerState.customer
});

export default connect(stateToProps)(AuthRoute);
