// import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import { Navigate, parsePath, Route, useNavigate} from 'react-router-dom';
import "../Register/Registration.css"
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from '@firebase/util';
// import {firebase} from '../../firebase.js'


export default function Form(e) {
	e.preventDefault;
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	
	
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};
	
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};
	
	const handleSubmit = async(e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			if(successMessage  ){
				navigate("/Login")
			}
		}
		// try {
		// 	await firebase.auth().createUserWithEmailAndPassword(email, password)
		// } catch (error) {
		// 	setError(error)
		// }
		
	};
	
	const successMessage = () => {
		return (
			<div
			className="success"
			style={{
				display: submitted ? '' : 'none',
			}}>
			<h1>User {name} successfully registered!!</h1>
			
			
			</div>
			
			);
			
		};
		const errorMessage = () => {
			return (
				<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
				</div>
				);
			};			
			return (
				<div className="form">
				<div>
				<h1>Register please - </h1>
				</div>
				
				<div className="messages">
				{errorMessage()}
				{successMessage()}
				</div>
				
				<form className='Register'>
				<label className="label">Name</label>
				<input onChange={handleName} className="input"
				value={name} type="text" />
				
				<label className="label">Email</label>
				<input onChange={handleEmail} className="input"
				value={email} type="email" />
				
				<label className="label">Password</label>
				<input onChange={handlePassword} className="input"
				value={password} type="password" />
				
				<button onClick={handleSubmit} className="btn" type="submit">
				Submit
				</button>
				
				</form>
				
				</div>
				);
			}