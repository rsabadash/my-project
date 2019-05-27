import React from 'react';

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
	};

	return (
		<LayoutCentered>
			<div className={classes.register}>
				<PageTitle
					position="center"
				>
					Create an account
				</PageTitle>
				<Form onSubmit={handleSubmit} initialValues={{ name: 'TESTOVE' }}>
					<Field
						required
						name="name"
						type="text"
						// label="Name"
						placeholder="Name"
						validators={[require, minLength(3)]}
						component={props => <TextInput { ...props } />}
					/>
					<Field
						required
						name="email"
						type="email"
						// label="Email"
						placeholder="Email"
						validators={[require, email]}
						component={props => <TextInput { ...props } />}
					/>
					<Field
						required
						name="password"
						type="password"
						// label="Password"
						placeholder="Password"
						validators={[require, minLength(6), crossFields('repeatPassword')]}
						component={props => <TextInput { ...props } />}
					/>
					<Field
						required
						name="repeatPassword"
						type="password"
						// label="Repeat password"
						placeholder="Repeat password"
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