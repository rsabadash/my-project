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
	minLength,
	crossFields
} from '../../utils/formValidators';

import classes from './styles/index.scss';

const Register = () => {
	const handleSubmit = values => {
		console.log(values);
		axios.post('/register', { ...values })
			.then(response => console.log(response));
	};

	return (
		<LayoutCentered>
			<div className={classes.register}>
				<PageTitle
					position="center"
				>
					Create an account
				</PageTitle>
				<Form onSubmit={handleSubmit}>
					<Field
						required
						name="name"
						type="text"
						placeholder="Name"
						validators={[require, minLength(3)]}
						component={props => <TextInput { ...props } />}
					/>
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
						validators={[require, minLength(6), crossFields('confirmPassword')]}
						component={props => <TextInput { ...props } />}
					/>
					<Field
						required
						name="confirmPassword"
						type="password"
						placeholder="Confirm password"
						validators={[require, minLength(6), crossFields('password')]}
						component={props => <TextInput { ...props } />}
					/>
					<Button
						type="submit"
						position="full"
					>
						Register
					</Button>
				</Form>
			</div>
		</LayoutCentered>
	);
};

export { Register };