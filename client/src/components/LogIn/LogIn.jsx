import React from 'react';
import axios from 'axios';

import Form from '../Form';
import TextInput from '../TextInput';
import Field from '../Field';
import Button from '../Button';
import PageTitle from '../PageTitle';
import { LayoutCentered } from '../Layout';

import {
	email,
	require,
	minLength
} from '../../utils/formValidators';

import classes from './styles/index.scss';

const LogIn = () => {
	const handleSubmit = values => {
		axios.post('/login', { ...values })
			.then(response => console.log(response));
	};

	return (
		<LayoutCentered>
			<div className={classes.login}>
				<PageTitle
					position="center"
				>
					Log in to account
				</PageTitle>
				<Form onSubmit={handleSubmit}>
					<Field
						required
						name="email"
						type="email"
						placeholder="Email"
						validators={[require, email]}
						component={props => <TextInput { ...props } />}
					/>
					<Field
						required
						name="password"
						type="password"
						placeholder="Password"
						validators={[require, minLength(6)]}
						component={props => <TextInput { ...props } />}
					/>
					<Button
						type="submit"
						position="full"
					>
						Log in
					</Button>
				</Form>
			</div>
		</LayoutCentered>
	);
};

export { LogIn };